<template>
  <div class="creator-page">
    <!-- Header -->
    <div class="creator-header">
      <div class="header-inner">
        <span class="header-eyebrow">Beholder's Tavern</span>
        <h1 class="header-title">Character Creator</h1>
        <p class="header-sub">Build your Level 1 character for D&D 2024</p>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar-wrap">
      <div class="progress-bar-inner">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="progress-step"
          :class="{ active: i === currentStep, complete: i < currentStep }"
          @click="goToStep(i)"
        >
          <div class="step-dot">
            <v-icon v-if="i < currentStep" size="12">mdi-check</v-icon>
            <span v-else>{{ i + 1 }}</span>
          </div>
          <span class="step-label">{{ step.label }}</span>
        </div>
      </div>
    </div>

    <!-- Step Content -->
    <div class="creator-body">
      <!-- ── STEP 0: Name & Basic Info ─────────────── -->
      <div v-if="currentStep === 0" class="step-panel">
        <h2 class="step-title">Name & Basic Info</h2>
        <p class="step-desc">
          Let's start with the basics. You can always change these later.
        </p>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label"
              >Character Name <span class="required">*</span></label
            >
            <input
              v-model="character.name"
              class="form-input"
              placeholder="e.g. Thalindra Moonwhisper"
              type="text"
            />
          </div>
          <div class="form-group">
            <label class="form-label">Player Name</label>
            <input
              v-model="character.playerName"
              class="form-input"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div class="form-group">
            <label class="form-label">Alignment</label>
            <div class="alignment-grid">
              <div
                v-for="a in alignments"
                :key="a"
                class="alignment-btn"
                :class="{ selected: character.alignment === a }"
                @click="character.alignment = a"
              >
                {{ a }}
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Character Level</label>
            <div class="level-display">
              <span class="level-badge">Level 1</span>
              <span class="level-note">Higher levels coming soon</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── STEP 1: Species ───────────────────────── -->
      <div v-if="currentStep === 1" class="step-panel">
        <h2 class="step-title">Choose Your Species</h2>
        <p class="step-desc">
          Your species determines your innate traits and abilities.
        </p>
        <div class="card-grid">
          <div
            v-for="entry in races"
            :key="entry.name"
            class="select-card"
            :class="{ selected: character.species === entry.name }"
            @click="selectSpecies(entry)"
          >
            <div class="card-header">
              <span class="card-name">{{ entry.race[0].name }}</span>
              <div class="card-badges">
                <span class="card-badge">{{ entry.race[0].size }}</span>
                <span class="card-badge accent">{{ entry.race[0].speed }}</span>
              </div>
            </div>
            <p class="card-desc">{{ entry.race[0].desc.slice(0, 110) }}...</p>
            <div class="card-traits">
              <span
                v-for="feat in entry.race[0].feats.slice(0, 3)"
                :key="feat.name"
                class="trait-pill"
                >{{ feat.name }}</span
              >
            </div>
          </div>
        </div>
        <transition name="slide-up">
          <div v-if="character.species" class="detail-panel">
            <div class="detail-header">
              <h3 class="detail-title">
                {{ selectedSpeciesData.race[0].name }}
              </h3>
              <div class="detail-badges">
                <span class="card-badge">{{
                  selectedSpeciesData.race[0].type
                }}</span>
                <span class="card-badge">{{
                  selectedSpeciesData.race[0].size
                }}</span>
                <span class="card-badge accent"
                  >Speed {{ selectedSpeciesData.race[0].speed }}</span
                >
              </div>
            </div>
            <p class="detail-desc">{{ selectedSpeciesData.race[0].desc }}</p>
            <div class="detail-traits">
              <div
                v-for="feat in selectedSpeciesData.race[0].feats"
                :key="feat.name"
                class="detail-trait"
              >
                <span class="detail-trait-name">{{ feat.name }}</span>
                <p class="detail-trait-desc">{{ feat.desc }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- ── STEP 2: Class ─────────────────────────── -->
      <div v-if="currentStep === 2" class="step-panel">
        <h2 class="step-title">Choose Your Class</h2>
        <p class="step-desc">
          Your class defines your role, abilities, and style of play.
        </p>
        <div class="card-grid">
          <div
            v-for="cls in classes"
            :key="cls.name"
            class="select-card class-card"
            :class="{ selected: character.class === cls.name }"
            :style="
              character.class === cls.name
                ? `border-color:${cls.accentColor};box-shadow:0 0 0 1px ${cls.accentColor}33`
                : ''
            "
            @click="selectClass(cls)"
          >
            <div
              class="class-accent-bar"
              :style="`background:${cls.accentColor}`"
            ></div>
            <div class="card-header">
              <span
                class="card-name"
                :style="
                  character.class === cls.name ? `color:${cls.accentColor}` : ''
                "
                >{{ cls.name }}</span
              >
              <span
                class="card-badge"
                :style="`background:${cls.accentColor}22;color:${cls.accentColor};border-color:${cls.accentColor}44`"
                >{{ cls.primaryStat }}</span
              >
            </div>
            <p class="card-desc">{{ cls.subtitle }}</p>
            <div class="card-footer">
              <span
                class="complexity-pill"
                :class="complexityClass(cls.complexity)"
                >{{ cls.complexity }}</span
              >
            </div>
          </div>
        </div>
        <transition name="slide-up">
          <div
            v-if="character.class"
            class="detail-panel"
            :style="`border-color:${selectedClassData.accentColor}44`"
          >
            <div class="detail-header">
              <h3
                class="detail-title"
                :style="`color:${selectedClassData.accentColor}`"
              >
                {{ selectedClassData.name }}
              </h3>
              <p class="detail-desc">{{ selectedClassData.subtitle }}</p>
            </div>
            <div class="detail-traits">
              <div
                v-for="trait in selectedClassData.coreTraits"
                :key="trait.label"
                class="detail-trait-row"
              >
                <span
                  class="detail-trait-label"
                  :style="`color:${selectedClassData.accentColor}`"
                  >{{ trait.label }}</span
                >
                <span class="detail-trait-value">{{ trait.value }}</span>
              </div>
            </div>
            <div class="detail-section">
              <h4 class="detail-section-title">Level 1 Features</h4>
              <div class="detail-features">
                <div
                  v-for="feature in selectedClassData.levelPanels[0].features"
                  :key="feature.title"
                  class="detail-feature-chip"
                  :style="`border-color:${selectedClassData.accentColor}44;color:${selectedClassData.accentColor}`"
                >
                  {{ feature.title }}
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- ── STEP 3: Background ─────────────────────── -->
      <div v-if="currentStep === 3" class="step-panel">
        <h2 class="step-title">Choose Your Background</h2>
        <p class="step-desc">
          Your background reflects your life before adventuring and grants you
          skills, tools, a feat, and ability score increases.
        </p>
        <div class="search-bar-wrap">
          <v-icon class="search-icon">mdi-magnify</v-icon>
          <input
            v-model="backgroundSearch"
            class="search-input"
            placeholder="Search backgrounds..."
            type="text"
          />
        </div>
        <div class="list-grid">
          <div
            v-for="bg in filteredBackgrounds"
            :key="bg.name"
            class="list-card"
            :class="{ selected: character.background === bg.name }"
            @click="selectBackground(bg)"
          >
            <div class="list-card-header">
              <span class="list-card-name">{{ formatName(bg.name) }}</span>
              <span class="list-card-feat">{{ bg.feat }}</span>
            </div>
            <div class="list-card-pills">
              <span class="trait-pill">{{ bg.skill }}</span>
              <span class="trait-pill">{{ bg.tool }}</span>
            </div>
          </div>
        </div>
        <transition name="slide-up">
          <div v-if="character.background" class="detail-panel">
            <h3 class="detail-title">
              {{ formatName(selectedBackgroundData.name) }}
            </h3>
            <p class="detail-desc">{{ selectedBackgroundData.flavor }}</p>
            <div class="detail-trait-row">
              <span class="detail-trait-label" style="color: #c084fc"
                >Ability Scores</span
              ><span class="detail-trait-value"
                >{{ selectedBackgroundData.abilityScore }}
              </span>
            </div>
            <div class="detail-trait-row">
              <span class="detail-trait-label" style="color: #c084fc"
                >Origin Feat</span
              ><span class="detail-trait-value">{{
                selectedBackgroundData.feat
              }}</span>
            </div>
            <div class="detail-trait-row">
              <span class="detail-trait-label" style="color: #c084fc"
                >Skills</span
              ><span class="detail-trait-value">{{
                selectedBackgroundData.skill
              }}</span>
            </div>
            <div class="detail-trait-row">
              <span class="detail-trait-label" style="color: #c084fc">Tool</span
              ><span class="detail-trait-value">{{
                selectedBackgroundData.tool
              }}</span>
            </div>
            <div class="detail-trait-row">
              <span class="detail-trait-label" style="color: #c084fc"
                >Equipment</span
              ><span class="detail-trait-value">{{
                selectedBackgroundData.equipment
              }}</span>
            </div>
          </div>
        </transition>
      </div>

      <!-- ── STEP 4: Ability Scores ─────────────────── -->
      <div v-if="currentStep === 4" class="step-panel">
        <h2 class="step-title">Ability Scores</h2>
        <p class="step-desc">
          Assign your base scores and apply your background bonuses.
        </p>

        <div class="method-tabs">
          <button
            v-for="m in abilityMethods"
            :key="m.key"
            class="method-tab"
            :class="{ active: character.abilityMethod === m.key }"
            @click="setAbilityMethod(m.key)"
          >
            {{ m.label }}
          </button>
        </div>

        <div class="ability-step-layout">
          <!-- LEFT: Allocation panel -->
          <div class="ability-left">
            <!-- Standard Array -->
            <div
              v-if="character.abilityMethod === 'standard'"
              class="ability-method-panel"
            >
              <p class="method-note">
                Assign each value to one ability. Each value can only be used
                once.
              </p>
              <div class="standard-array-chips">
                <span
                  v-for="val in standardArrayValues"
                  :key="val"
                  class="array-chip"
                  :class="{ used: isArrayValueUsed(val) }"
                  >{{ val }}</span
                >
              </div>
              <div class="ability-rows">
                <div v-for="ab in abilityList" :key="ab" class="ability-row">
                  <span class="ability-name">{{ ab }}</span>
                  <span class="ability-full-name">{{
                    abilityFullName(ab)
                  }}</span>
                  <div class="ability-controls">
                    <select
                      class="ability-select"
                      :value="character.abilityScores[ab]"
                      @change="assignStandardScore(ab, $event.target.value)"
                    >
                      <option value="">—</option>
                      <option
                        v-for="val in standardArrayValues"
                        :key="val"
                        :value="val"
                        v-show="
                          !isArrayValueUsed(val) ||
                          character.abilityScores[ab] === val
                        "
                      >
                        {{ val }}
                      </option>
                    </select>
                    <span class="ability-modifier">{{
                      modifierDisplay(character.abilityScores[ab])
                    }}</span>
                    <span
                      v-if="character.backgroundBonuses[ab]"
                      class="inline-final"
                    >
                      → <strong>{{ finalScore(ab) }}</strong>
                      <span class="bonus-mod-display">{{
                        modifierDisplay(finalScore(ab))
                      }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Point Buy -->
            <div
              v-if="character.abilityMethod === 'pointbuy'"
              class="ability-method-panel"
            >
              <p class="method-note">
                You have <strong>{{ pointBuyRemaining }}</strong> points
                remaining. Scores range from 8–15.
              </p>
              <div class="point-buy-cost-table">
                <span
                  v-for="c in pointBuyCosts"
                  :key="c.score"
                  class="cost-chip"
                >
                  {{ c.score }}<span class="cost-sub">{{ c.cost }}pt</span>
                </span>
              </div>
              <div class="ability-rows">
                <div v-for="ab in abilityList" :key="ab" class="ability-row">
                  <span class="ability-name">{{ ab }}</span>
                  <span class="ability-full-name">{{
                    abilityFullName(ab)
                  }}</span>
                  <div class="ability-controls">
                    <button
                      class="pb-btn"
                      @click="adjustPointBuy(ab, -1)"
                      :disabled="(character.abilityScores[ab] || 8) <= 8"
                    >
                      −
                    </button>
                    <span class="pb-score">{{
                      character.abilityScores[ab] || 8
                    }}</span>
                    <button
                      class="pb-btn"
                      @click="adjustPointBuy(ab, 1)"
                      :disabled="
                        (character.abilityScores[ab] || 8) >= 15 ||
                        pointBuyRemaining <= 0
                      "
                    >
                      +
                    </button>
                    <span class="ability-modifier">{{
                      modifierDisplay(character.abilityScores[ab] || 8)
                    }}</span>
                    <span
                      v-if="character.backgroundBonuses[ab]"
                      class="inline-final"
                    >
                      → <strong>{{ finalScore(ab) }}</strong>
                      <span class="bonus-mod-display">{{
                        modifierDisplay(finalScore(ab))
                      }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Roll 4d6 -->
            <div
              v-if="character.abilityMethod === 'roll'"
              class="ability-method-panel"
            >
              <p class="method-note">
                Roll 4d6, drop the lowest, for each ability. Then assign the
                results.
              </p>
              <button class="roll-btn" @click="rollAllScores">
                <v-icon size="18">mdi-dice-multiple</v-icon> Roll All Scores
              </button>
              <div v-if="rolledScores.length" class="roll-results">
                <div
                  v-for="(roll, i) in rolledScores"
                  :key="i"
                  class="roll-result-chip"
                >
                  <span class="roll-total">{{ roll.total }}</span>
                  <span class="roll-dice">{{ roll.dice.join(", ") }}</span>
                </div>
              </div>
              <div class="ability-rows">
                <div v-for="ab in abilityList" :key="ab" class="ability-row">
                  <span class="ability-name">{{ ab }}</span>
                  <span class="ability-full-name">{{
                    abilityFullName(ab)
                  }}</span>
                  <div class="ability-controls">
                    <select
                      class="ability-select"
                      :value="character.abilityScoreRollIds[ab]"
                      @change="assignRolledScore(ab, $event.target.value)"
                    >
                      <option value="">—</option>
                      <option
                        v-for="roll in rolledScores"
                        :key="roll.id"
                        :value="roll.id"
                        v-show="
                          !isRollUsed(roll.id) ||
                          character.abilityScoreRollIds[ab] === roll.id
                        "
                      >
                        {{ roll.total }}
                      </option>
                    </select>
                    <span class="ability-modifier">{{
                      modifierDisplay(character.abilityScores[ab])
                    }}</span>
                    <span
                      v-if="character.backgroundBonuses[ab]"
                      class="inline-final"
                    >
                      → <strong>{{ finalScore(ab) }}</strong>
                      <span class="bonus-mod-display">{{
                        modifierDisplay(finalScore(ab))
                      }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="!character.abilityMethod"
              class="bonus-incomplete"
              style="margin-top: 1rem"
            >
              <v-icon size="16">mdi-information-outline</v-icon>
              Choose a method above to assign your ability scores.
            </div>

            <!-- Score summary -->
            <div
              v-if="abilityList.some((ab) => character.abilityScores[ab])"
              class="score-summary"
              style="margin-top: 1rem"
            >
              <div
                v-for="ab in abilityList"
                :key="ab"
                class="score-summary-item"
              >
                <span class="ss-label">{{ ab }}</span>
                <span class="ss-score">{{
                  character.abilityScores[ab] ? finalScore(ab) : "—"
                }}</span>
                <span class="ss-mod">{{
                  character.abilityScores[ab]
                    ? modifierDisplay(finalScore(ab))
                    : "—"
                }}</span>
                <span v-if="character.backgroundBonuses[ab]" class="ss-bonus"
                  >+{{ character.backgroundBonuses[ab] }} bg</span
                >
              </div>
            </div>
          </div>

          <!-- RIGHT: Background bonuses -->
          <div class="ability-right">
            <div
              v-if="character.background"
              class="bg-bonus-section"
              style="margin-top: 0"
            >
              <h3 class="bg-bonus-title">
                Background Bonuses
                <span class="bg-bonus-source"
                  >from {{ formatName(character.background) }}</span
                >
              </h3>
              <p class="bg-bonus-note">
                Eligible:
                <strong>{{ selectedBackgroundData.abilityScore }}</strong
                >.<br />
                Choose <strong>+2 / +1</strong> or
                <strong>+1 / +1 / +1</strong>. Max 20.
              </p>
              <div class="method-tabs" style="margin-bottom: 1rem">
                <button
                  class="method-tab"
                  :class="{ active: character.backgroundBonusMethod === '2+1' }"
                  @click="setBonusMethod('2+1')"
                >
                  +2 / +1
                </button>
                <button
                  class="method-tab"
                  :class="{
                    active: character.backgroundBonusMethod === '1+1+1',
                  }"
                  @click="setBonusMethod('1+1+1')"
                >
                  +1 / +1 / +1
                </button>
              </div>

              <div v-if="character.backgroundBonusMethod" class="bonus-rows">
                <div
                  v-for="ab in backgroundEligibleAbilities"
                  :key="ab"
                  class="bonus-row"
                >
                  <span class="ability-name">{{ ab }}</span>
                  <span class="ability-full-name">{{
                    abilityFullName(ab)
                  }}</span>
                  <div class="ability-controls">
                    <template v-if="character.backgroundBonusMethod === '2+1'">
                      <button
                        class="bonus-chip"
                        :class="{
                          active: character.backgroundBonuses[ab] === 2,
                        }"
                        :disabled="
                          (character.backgroundBonuses[ab] !== 2 &&
                            bonusAlreadyUsed(2)) ||
                          (character.abilityScores[ab] || 0) + 2 > 20
                        "
                        @click="assignBonus(ab, 2)"
                      >
                        +2
                      </button>
                      <button
                        class="bonus-chip"
                        :class="{
                          active: character.backgroundBonuses[ab] === 1,
                        }"
                        :disabled="
                          (character.backgroundBonuses[ab] !== 1 &&
                            bonusAlreadyUsed(1)) ||
                          (character.abilityScores[ab] || 0) + 1 > 20
                        "
                        @click="assignBonus(ab, 1)"
                      >
                        +1
                      </button>
                    </template>
                    <template
                      v-if="character.backgroundBonusMethod === '1+1+1'"
                    >
                      <button
                        class="bonus-chip"
                        :class="{
                          active: character.backgroundBonuses[ab] === 1,
                        }"
                        :disabled="
                          (character.backgroundBonuses[ab] !== 1 &&
                            bonusPointsUsed >= 3) ||
                          (character.abilityScores[ab] || 0) + 1 > 20
                        "
                        @click="toggleBonus111(ab)"
                      >
                        +1
                      </button>
                    </template>
                    <span
                      class="bonus-final-score"
                      :class="{ capped: finalScore(ab) >= 20 }"
                    >
                      {{ finalScore(ab) }}
                      <span class="bonus-mod-display">{{
                        modifierDisplay(finalScore(ab))
                      }}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div
                v-if="bonusAssigned"
                class="bonus-complete"
                style="margin-top: 0.75rem"
              >
                <v-icon size="16" style="color: #4ade80"
                  >mdi-check-circle</v-icon
                >
                Bonuses applied!
              </div>
              <div
                v-else-if="character.backgroundBonusMethod"
                class="bonus-incomplete"
                style="margin-top: 0.75rem"
              >
                <v-icon size="16">mdi-information-outline</v-icon>
                <span v-if="character.backgroundBonusMethod === '2+1'">
                  Assign {{ !bonusAlreadyUsed(2) ? "+2" : ""
                  }}{{
                    !bonusAlreadyUsed(2) && !bonusAlreadyUsed(1) ? " and " : ""
                  }}{{ !bonusAlreadyUsed(1) ? "+1" : "" }} to continue.
                </span>
                <span v-else>
                  Assign {{ 3 - bonusPointsUsed }} more +1{{
                    3 - bonusPointsUsed !== 1 ? "s" : ""
                  }}
                  to continue.
                </span>
              </div>
              <div v-else class="bonus-incomplete" style="margin-top: 0.75rem">
                <v-icon size="16">mdi-information-outline</v-icon>
                Choose a bonus method above.
              </div>
            </div>

            <div v-else class="bonus-incomplete" style="margin-top: 0">
              <v-icon size="16">mdi-information-outline</v-icon>
              Go back to Step 3 to choose a background — it grants ability score
              increases.
            </div>
          </div>
        </div>
      </div>

      <!-- ── STEP 5: Skills ────────────────────────── -->
      <div v-if="currentStep === 5" class="step-panel">
        <h2 class="step-title">Skills & Proficiencies</h2>
        <p class="step-desc">
          Choose {{ skillChoiceCount }} from your class's available skills.
          Background skills are already added.
          <span
            v-if="classAvailableSkills.length"
            class="skills-available-note"
          >
            Available: {{ classAvailableSkills.join(", ") }}
          </span>
        </p>
        <div class="proficiency-summary">
          <div class="prof-block">
            <span class="prof-block-title">Saving Throws</span>
            <div class="prof-pills">
              <span
                v-for="st in savingThrows"
                :key="st"
                class="prof-pill active"
                >{{ st }}</span
              >
            </div>
          </div>
          <div class="prof-block">
            <span class="prof-block-title">Armor & Weapons</span>
            <div class="prof-pills">
              <span class="prof-pill">{{
                selectedClassData
                  ? selectedClassData.coreTraits.find(
                      (t) => t.label === "Armor Training",
                    )?.value
                  : ""
              }}</span>
              <span class="prof-pill">{{
                selectedClassData
                  ? selectedClassData.coreTraits.find(
                      (t) => t.label === "Weapon Proficiencies",
                    )?.value
                  : ""
              }}</span>
            </div>
          </div>
        </div>
        <h3 class="skills-subtitle">
          Choose {{ skillChoiceCount }} Skills
          <span class="skills-chosen-count"
            >({{ classSkillsChosen }}/{{ skillChoiceCount }} chosen)</span
          >
        </h3>
        <div class="skills-grid">
          <div
            v-for="skill in allSkills"
            :key="skill.name"
            class="skill-row"
            :class="{
              selected:
                character.skills.includes(skill.name) &&
                !backgroundSkills.includes(skill.name),
              'bg-skill': backgroundSkills.includes(skill.name),
              disabled:
                !backgroundSkills.includes(skill.name) &&
                !character.skills.includes(skill.name) &&
                (classSkillsChosen >= skillChoiceCount ||
                  !classAvailableSkills.includes(skill.name)),
            }"
            @click="toggleSkill(skill.name)"
          >
            <div class="skill-check">
              <v-icon
                v-if="
                  character.skills.includes(skill.name) ||
                  backgroundSkills.includes(skill.name)
                "
                size="14"
                >mdi-check</v-icon
              >
            </div>
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-ability">{{ skill.ability }}</span>
            <span
              v-if="backgroundSkills.includes(skill.name)"
              class="skill-source bg-source"
              >Background</span
            >
            <span
              v-else-if="character.skills.includes(skill.name)"
              class="skill-source class-source"
              >Class</span
            >
            <span v-else class="skill-source"></span>
          </div>
        </div>
      </div>

      <!-- ── STEP 6: Equipment ─────────────────────── -->
      <div v-if="currentStep === 6" class="step-panel">
        <h2 class="step-title">Starting Equipment</h2>
        <p class="step-desc">
          Choose your starting equipment pack or take gold to buy your own gear.
        </p>
        <div v-if="selectedClassData" class="equipment-options">
          <div
            class="equipment-option"
            :class="{ selected: character.equipment === 'A' }"
            @click="character.equipment = 'A'"
          >
            <div class="eq-option-header">
              <div class="eq-option-letter">A</div>
              <span class="eq-option-label">Equipment Pack</span>
              <v-icon
                v-if="character.equipment === 'A'"
                size="18"
                style="color: #4ade80"
                >mdi-check-circle</v-icon
              >
            </div>
            <p class="eq-option-desc">{{ equipmentOptionA }}</p>
          </div>
          <div
            class="equipment-option"
            :class="{ selected: character.equipment === 'B' }"
            @click="character.equipment = 'B'"
          >
            <div class="eq-option-header">
              <div class="eq-option-letter">B</div>
              <span class="eq-option-label">Starting Gold</span>
              <v-icon
                v-if="character.equipment === 'B'"
                size="18"
                style="color: #4ade80"
                >mdi-check-circle</v-icon
              >
            </div>
            <p class="eq-option-desc">{{ equipmentOptionB }}</p>
          </div>
        </div>
        <div v-if="selectedBackgroundData" class="bg-equipment-box">
          <span class="bg-eq-title">Background Equipment (included)</span>
          <p class="bg-eq-text">{{ selectedBackgroundData.equipment }}</p>
        </div>
      </div>

      <!-- ── STEP 7: Spells (spellcasters only) ────── -->
      <div v-if="currentStep === spellsStepIndex" class="step-panel">
        <h2 class="step-title">Choose Your Spells</h2>
        <p class="step-desc">
          Select your starting cantrips and prepared spells.
          <span v-if="selectedClassData">
            You know <strong>{{ level1CantripsCount }}</strong> cantrip{{
              level1CantripsCount !== 1 ? "s" : ""
            }}
            and <strong>{{ level1PreparedCount }}</strong> prepared spell{{
              level1PreparedCount !== 1 ? "s" : ""
            }}.
          </span>
        </p>

        <!-- Cantrips -->
        <div v-if="level1CantripsCount > 0" class="spell-section">
          <div class="spell-section-header">
            <h3 class="spell-section-title">Cantrips</h3>
            <span class="spell-count-badge"
              >{{ character.spells.cantrips.length }}/{{
                level1CantripsCount
              }}</span
            >
          </div>
          <div class="spell-search-wrap">
            <v-icon class="search-icon">mdi-magnify</v-icon>
            <input
              v-model="cantripSearch"
              class="search-input"
              placeholder="Search cantrips..."
              type="text"
            />
          </div>
          <div class="spells-grid">
            <div
              v-for="spell in filteredCantrips"
              :key="spell.name"
              class="spell-card"
              :class="{
                selected: character.spells.cantrips.includes(spell.name),
                disabled:
                  !character.spells.cantrips.includes(spell.name) &&
                  character.spells.cantrips.length >= level1CantripsCount,
              }"
              @click="toggleSpell('cantrips', spell.name)"
            >
              <div class="spell-card-header">
                <span class="spell-name">{{ formatName(spell.name) }}</span>
                <span class="spell-school">{{ spell.school.trim() }}</span>
              </div>
              <div class="spell-meta">
                <span class="spell-meta-item"
                  ><v-icon size="11">mdi-clock-outline</v-icon>
                  {{ spell.casting_time }}</span
                >
                <span class="spell-meta-item"
                  ><v-icon size="11">mdi-arrow-expand-all</v-icon>
                  {{ spell.range }}</span
                >
              </div>
              <p class="spell-desc">{{ spell.effect.slice(0, 90) }}...</p>
            </div>
          </div>
        </div>

        <!-- Prepared Spells -->
        <div class="spell-section" style="margin-top: 2rem">
          <div class="spell-section-header">
            <h3 class="spell-section-title">Prepared Spells (Level 1)</h3>
            <span class="spell-count-badge"
              >{{ character.spells.prepared.length }}/{{
                level1PreparedCount
              }}</span
            >
          </div>
          <div class="spell-search-wrap">
            <v-icon class="search-icon">mdi-magnify</v-icon>
            <input
              v-model="preparedSearch"
              class="search-input"
              placeholder="Search spells..."
              type="text"
            />
          </div>
          <div class="spells-grid">
            <div
              v-for="spell in filteredPreparedSpells"
              :key="spell.name"
              class="spell-card"
              :class="{
                selected: character.spells.prepared.includes(spell.name),
                disabled:
                  !character.spells.prepared.includes(spell.name) &&
                  character.spells.prepared.length >= level1PreparedCount,
              }"
              @click="toggleSpell('prepared', spell.name)"
            >
              <div class="spell-card-header">
                <span class="spell-name">{{ formatName(spell.name) }}</span>
                <span class="spell-school">{{ spell.school.trim() }}</span>
              </div>
              <div class="spell-meta">
                <span class="spell-meta-item"
                  ><v-icon size="11">mdi-clock-outline</v-icon>
                  {{ spell.casting_time }}</span
                >
                <span class="spell-meta-item"
                  ><v-icon size="11">mdi-arrow-expand-all</v-icon>
                  {{ spell.range }}</span
                >
                <span class="spell-meta-item"
                  ><v-icon size="11">mdi-timer-outline</v-icon>
                  {{ spell.duration }}</span
                >
              </div>
              <p class="spell-desc">{{ spell.effect.slice(0, 90) }}...</p>
              <div v-if="spell.components" class="spell-components">
                {{ spell.components }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── STEP 8 (or 7): Character Sheet ───────── -->
      <div v-if="currentStep === sheetStepIndex" class="step-panel">
        <h2 class="step-title">Character Sheet</h2>
        <p class="step-desc">
          Your character is ready! Review everything below and download your
          sheet.
        </p>

        <div class="sheet-wrap">
          <!-- Identity bar -->
          <div
            class="sheet-identity"
            :style="
              selectedClassData
                ? `border-color:${selectedClassData.accentColor}`
                : ''
            "
          >
            <div class="sheet-identity-left">
              <h2 class="sheet-char-name">
                {{ character.name || "Unnamed Hero" }}
              </h2>
              <div class="sheet-identity-tags">
                <span class="sheet-tag" v-if="character.species">{{
                  formatName(character.species)
                }}</span>
                <span
                  class="sheet-tag"
                  v-if="character.class"
                  :style="
                    selectedClassData
                      ? `color:${selectedClassData.accentColor};border-color:${selectedClassData.accentColor}44`
                      : ''
                  "
                  >{{ character.class }}</span
                >
                <span class="sheet-tag" v-if="character.background">{{
                  formatName(character.background)
                }}</span>
                <span class="sheet-tag">Level 1</span>
                <span class="sheet-tag" v-if="character.alignment">{{
                  character.alignment
                }}</span>
              </div>
            </div>
            <div class="sheet-identity-right">
              <div class="sheet-hp-box">
                <span class="sheet-hp-label">Hit Points</span>
                <span class="sheet-hp-val">{{ maxHP }}</span>
              </div>
              <div class="sheet-hp-box">
                <span class="sheet-hp-label">Prof. Bonus</span>
                <span class="sheet-hp-val">+2</span>
              </div>
              <div class="sheet-hp-box">
                <span class="sheet-hp-label">AC</span>
                <span class="sheet-hp-val">{{ baseAC }}</span>
              </div>
              <div class="sheet-hp-box">
                <span class="sheet-hp-label">Initiative</span>
                <span class="sheet-hp-val">{{
                  modifierDisplay(finalScore("DEX"))
                }}</span>
              </div>
            </div>
          </div>

          <!-- Ability Scores -->
          <div class="sheet-section">
            <h3 class="sheet-section-title">Ability Scores</h3>
            <div class="sheet-scores">
              <div
                v-for="ab in abilityList"
                :key="ab"
                class="sheet-score-box"
                :style="
                  selectedClassData
                    ? `--accent:${selectedClassData.accentColor}`
                    : ''
                "
              >
                <span class="sheet-score-mod">{{
                  modifierDisplay(finalScore(ab))
                }}</span>
                <span class="sheet-score-val">{{ finalScore(ab) || "—" }}</span>
                <span class="sheet-score-ab">{{ ab }}</span>
                <span
                  v-if="character.backgroundBonuses[ab]"
                  class="sheet-score-bg"
                  >+{{ character.backgroundBonuses[ab] }} bg</span
                >
              </div>
            </div>
          </div>

          <!-- Two-col layout -->
          <div class="sheet-two-col">
            <div class="sheet-col">
              <div class="sheet-section">
                <h3 class="sheet-section-title">Saving Throws</h3>
                <div class="sheet-save-list">
                  <div
                    v-for="ab in abilityList"
                    :key="ab"
                    class="sheet-save-row"
                  >
                    <div
                      class="sheet-save-dot"
                      :class="{
                        proficient: savingThrows.includes(abilityFullName(ab)),
                      }"
                    ></div>
                    <span class="sheet-save-val">{{
                      savingThrowBonus(ab)
                    }}</span>
                    <span class="sheet-save-name">{{
                      abilityFullName(ab)
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="sheet-section">
                <h3 class="sheet-section-title">Skills</h3>
                <div class="sheet-skill-list">
                  <div
                    v-for="skill in allSkills"
                    :key="skill.name"
                    class="sheet-skill-row"
                  >
                    <div
                      class="sheet-save-dot"
                      :class="{
                        proficient: character.skills.includes(skill.name),
                      }"
                    ></div>
                    <span class="sheet-save-val">{{ skillBonus(skill) }}</span>
                    <span class="sheet-save-name"
                      >{{ skill.name }}
                      <span class="sheet-skill-ab"
                        >({{ skill.ability }})</span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="sheet-col">
              <div class="sheet-section">
                <h3 class="sheet-section-title">Species Traits</h3>
                <div class="sheet-trait-list" v-if="selectedSpeciesData">
                  <div
                    v-for="feat in selectedSpeciesData.race[0].feats.slice(
                      0,
                      4,
                    )"
                    :key="feat.name"
                    class="sheet-trait-item"
                  >
                    <span class="sheet-trait-name">{{ feat.name }}</span>
                    <p class="sheet-trait-desc">
                      {{ feat.desc.slice(0, 100) }}...
                    </p>
                  </div>
                </div>
              </div>
              <div class="sheet-section">
                <h3 class="sheet-section-title">Class Features (Level 1)</h3>
                <div class="sheet-trait-list" v-if="selectedClassData">
                  <div
                    v-for="feature in selectedClassData.levelPanels[0].features"
                    :key="feature.title"
                    class="sheet-trait-item"
                  >
                    <span class="sheet-trait-name">{{ feature.title }}</span>
                  </div>
                </div>
              </div>
              <div class="sheet-section">
                <h3 class="sheet-section-title">Equipment</h3>
                <p
                  class="sheet-eq-text"
                  v-if="character.equipment && selectedClassData"
                >
                  {{
                    character.equipment === "A"
                      ? equipmentOptionA
                      : equipmentOptionB
                  }}
                </p>
                <p class="sheet-eq-text" v-if="selectedBackgroundData">
                  <strong>Background:</strong>
                  {{ selectedBackgroundData.equipment }}
                </p>
              </div>
              <div class="sheet-section" v-if="isSpellcaster">
                <h3 class="sheet-section-title">Spells</h3>
                <div v-if="character.spells.cantrips.length">
                  <p class="sheet-spell-group-label">Cantrips</p>
                  <div class="sheet-spell-tags">
                    <span
                      v-for="s in character.spells.cantrips"
                      :key="s"
                      class="sheet-spell-tag"
                      >{{ formatName(s) }}</span
                    >
                  </div>
                </div>
                <div
                  v-if="character.spells.prepared.length"
                  style="margin-top: 0.5rem"
                >
                  <p class="sheet-spell-group-label">Prepared</p>
                  <div class="sheet-spell-tags">
                    <span
                      v-for="s in character.spells.prepared"
                      :key="s"
                      class="sheet-spell-tag"
                      >{{ formatName(s) }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sheet-actions">
          <button class="sheet-btn sheet-btn-primary" @click="downloadSheet">
            <v-icon size="18">mdi-download</v-icon> Download PDF
          </button>
          <button class="sheet-btn sheet-btn-secondary" @click="resetCharacter">
            <v-icon size="18">mdi-refresh</v-icon> Start Over
          </button>
        </div>
      </div>

      <!-- ── Navigation ────────────────────────────── -->
      <div class="step-nav">
        <button
          class="nav-btn nav-back"
          v-if="currentStep > 0"
          @click="prevStep"
        >
          <v-icon size="18">mdi-arrow-left</v-icon> Back
        </button>
        <div class="nav-spacer"></div>
        <button
          class="nav-btn nav-next"
          v-if="currentStep < steps.length - 1"
          :disabled="!canProceed"
          :style="
            canProceed && selectedClassData
              ? `background:${selectedClassData.accentColor}`
              : canProceed
              ? 'background:#c084fc'
              : ''
          "
          @click="nextStep"
        >
          Continue <v-icon size="18">mdi-arrow-right</v-icon>
        </button>
      </div>
    </div>
    <div
      v-if="debugMode"
      style="
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9999;
        background: #0e0e1a;
        border-left: 1px solid #c084fc;
        padding: 1rem;
        width: 280px;
        height: 100vh;
        overflow-y: auto;
        font-family: monospace;
        font-size: 11px;
        color: #e0e0e0;
      "
    >
      <div style="font-weight: bold; color: #c084fc; margin-bottom: 0.5rem">
        PDF Position Tuner
      </div>
      <div style="font-size: 10px; color: #64748b; margin-bottom: 0.75rem">
        id · x · yFromTop
      </div>
      <div
        v-for="field in pdfFields"
        :key="field.id"
        style="
          display: grid;
          grid-template-columns: 90px 45px 55px;
          gap: 3px;
          margin-bottom: 4px;
          align-items: center;
        "
      >
        <span
          style="
            color: #94a3b8;
            font-size: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          "
          :title="field.id"
          >{{ field.id }}</span
        >
        <input
          type="number"
          v-model.number="field.x"
          style="
            background: #1e1e2e;
            color: #fff;
            border: 1px solid #334155;
            padding: 2px 4px;
            width: 100%;
            font-size: 10px;
          "
        />
        <input
          type="number"
          v-model.number="field.yFromTop"
          style="
            background: #1e1e2e;
            color: #fff;
            border: 1px solid #334155;
            padding: 2px 4px;
            width: 100%;
            font-size: 10px;
          "
        />
      </div>
      <button
        @click="copyPositions"
        style="
          margin-top: 0.75rem;
          width: 100%;
          background: #c084fc;
          color: #fff;
          border: none;
          padding: 6px;
          cursor: pointer;
          font-size: 11px;
        "
      >
        Copy All Positions
      </button>
    </div>
  </div>
</template>

<script>
import races from "../races.json";
import backgrounds from "../backgrounds.json";
import feats from "../feats.json";
import allSpells from "../SpellView/allSpells.json";

import barbarian from "../Class/barbarian.json";
import bard from "../Class/bard.json";
import cleric from "../Class/cleric.json";
import druid from "../Class/druid.json";
import fighter from "../Class/fighter.json";
import monk from "../Class/monk.json";
import paladin from "../Class/paladin.json";
import ranger from "../Class/ranger.json";
import rogue from "../Class/rogue.json";
import sorcerer from "../Class/sorcerer.json";
import warlock from "../Class/warlock.json";
import wizard from "../Class/wizard.json";

const SPELLCASTER_CLASSES = [
  "Bard",
  "Cleric",
  "Druid",
  "Paladin",
  "Ranger",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

export default {
  name: "CharacterCreatorView",

  data() {
    return {
      currentStep: 0,
      debugMode: false,
      pdfFields: [
        { id: "name", x: 30, yFromTop: 20 },
        { id: "background", x: 30, yFromTop: 45 },
        { id: "class", x: 185, yFromTop: 53 },
        { id: "species", x: 93, yFromTop: 74 },
        { id: "level", x: 270, yFromTop: 33 },
        { id: "xp", x: 268, yFromTop: 70 },
        { id: "ac", x: 331, yFromTop: 40 },
        { id: "hp_cur", x: 400, yFromTop: 64 },
        { id: "hp_max", x: 450, yFromTop: 64 },
        { id: "hit_die", x: 493, yFromTop: 64 },
        { id: "initiative", x: 255, yFromTop: 135 },
        { id: "speed", x: 343, yFromTop: 135 },
        { id: "size", x: 420, yFromTop: 135 },
        { id: "passive", x: 545, yFromTop: 135 },
        { id: "str_score", x: 50, yFromTop: 222 },
        { id: "str_mod", x: 27, yFromTop: 248 },
        { id: "str_save", x: 27, yFromTop: 266 },
        { id: "athletics", x: 27, yFromTop: 282 },
        { id: "dex_score", x: 50, yFromTop: 337 },
        { id: "dex_mod", x: 27, yFromTop: 362 },
        { id: "dex_save", x: 27, yFromTop: 385 },
        { id: "acrobatics", x: 27, yFromTop: 400 },
        { id: "sleight", x: 27, yFromTop: 411 },
        { id: "stealth", x: 27, yFromTop: 423 },
        { id: "con_score", x: 50, yFromTop: 489 },
        { id: "con_mod", x: 27, yFromTop: 512 },
        { id: "con_save", x: 27, yFromTop: 536 },
        { id: "int_score", x: 159, yFromTop: 149 },
        { id: "int_mod", x: 132, yFromTop: 169 },
        { id: "int_save", x: 135, yFromTop: 186 },
        { id: "arcana", x: 135, yFromTop: 200 },
        { id: "history", x: 135, yFromTop: 211 },
        { id: "invest", x: 135, yFromTop: 223 },
        { id: "nature", x: 135, yFromTop: 235 },
        { id: "religion", x: 135, yFromTop: 246 },
        { id: "wis_score", x: 159, yFromTop: 324 },
        { id: "wis_mod", x: 132, yFromTop: 343 },
        { id: "wis_save", x: 135, yFromTop: 364 },
        { id: "animal", x: 135, yFromTop: 379 },
        { id: "insight", x: 135, yFromTop: 390 },
        { id: "medicine", x: 135, yFromTop: 402 },
        { id: "perception", x: 135, yFromTop: 413 },
        { id: "survival", x: 135, yFromTop: 424 },
        { id: "cha_score", x: 159, yFromTop: 493 },
        { id: "cha_mod", x: 132, yFromTop: 512 },
        { id: "cha_save", x: 135, yFromTop: 532 },
        { id: "deception", x: 135, yFromTop: 547 },
        { id: "intim", x: 135, yFromTop: 559 },
        { id: "perform", x: 135, yFromTop: 570 },
        { id: "persuasion", x: 135, yFromTop: 582 },
        { id: "cf_text", x: 363, yFromTop: 356 },
        { id: "sp_traits", x: 225, yFromTop: 598 },
        { id: "feats", x: 458, yFromTop: 598 },
        { id: "armor", x: 57, yFromTop: 643 },
        { id: "weapons", x: 16, yFromTop: 656 },
        { id: "equipment", x: 16, yFromTop: 668 },
        { id: "tools", x: 16, yFromTop: 724 },
        // Saving throw dots
        { id: "d_str_save", x: 14, yFromTop: 266 },
        { id: "d_dex_save", x: 14, yFromTop: 385 },
        { id: "d_con_save", x: 14, yFromTop: 536 },
        { id: "d_int_save", x: 124, yFromTop: 186 },
        { id: "d_wis_save", x: 124, yFromTop: 364 },
        { id: "d_cha_save", x: 124, yFromTop: 532 },
        // Skill dots
        { id: "d_athletics", x: 14, yFromTop: 282 },
        { id: "d_acrobatics", x: 14, yFromTop: 400 },
        { id: "d_sleight", x: 14, yFromTop: 411 },
        { id: "d_stealth", x: 14, yFromTop: 423 },
        { id: "d_arcana", x: 124, yFromTop: 200 },
        { id: "d_history", x: 124, yFromTop: 211 },
        { id: "d_invest", x: 124, yFromTop: 223 },
        { id: "d_nature", x: 124, yFromTop: 235 },
        { id: "d_religion", x: 124, yFromTop: 246 },
        { id: "d_animal", x: 124, yFromTop: 379 },
        { id: "d_insight", x: 124, yFromTop: 390 },
        { id: "d_medicine", x: 124, yFromTop: 402 },
        { id: "d_perception", x: 124, yFromTop: 413 },
        { id: "d_survival", x: 124, yFromTop: 424 },
        { id: "d_deception", x: 124, yFromTop: 547 },
        { id: "d_intim", x: 124, yFromTop: 559 },
        { id: "d_perform", x: 124, yFromTop: 570 },
        { id: "d_persuasion", x: 124, yFromTop: 582 },
      ],
      races,
      backgrounds,
      feats,
      allSpells,
      classes: [
        barbarian,
        bard,
        cleric,
        druid,
        fighter,
        monk,
        paladin,
        ranger,
        rogue,
        sorcerer,
        warlock,
        wizard,
      ],

      character: {
        name: "",
        playerName: "",
        alignment: "",
        level: 1,
        species: null,
        speciesData: null,
        class: null,
        classData: null,
        background: null,
        backgroundData: null,
        abilityScores: {
          STR: null,
          DEX: null,
          CON: null,
          INT: null,
          WIS: null,
          CHA: null,
        },
        abilityScoreRollIds: {
          STR: null,
          DEX: null,
          CON: null,
          INT: null,
          WIS: null,
          CHA: null,
        },
        abilityMethod: null,
        backgroundBonuses: { STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 },
        backgroundBonusMethod: null,
        skills: [],
        equipment: null,
        spells: { cantrips: [], prepared: [] },
      },

      alignments: [
        "Lawful Good",
        "Neutral Good",
        "Chaotic Good",
        "Lawful Neutral",
        "True Neutral",
        "Chaotic Neutral",
        "Lawful Evil",
        "Neutral Evil",
        "Chaotic Evil",
      ],

      backgroundSearch: "",
      cantripSearch: "",
      preparedSearch: "",

      abilityMethods: [
        { key: "standard", label: "Standard Array" },
        { key: "pointbuy", label: "Point Buy" },
        { key: "roll", label: "Roll 4d6" },
      ],
      abilityList: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
      standardArrayValues: [15, 14, 13, 12, 10, 8],
      pointBuyCosts: [
        { score: 8, cost: 0 },
        { score: 9, cost: 1 },
        { score: 10, cost: 2 },
        { score: 11, cost: 3 },
        { score: 12, cost: 4 },
        { score: 13, cost: 5 },
        { score: 14, cost: 7 },
        { score: 15, cost: 9 },
      ],
      rolledScores: [],

      allSkills: [
        { name: "Acrobatics", ability: "DEX" },
        { name: "Animal Handling", ability: "WIS" },
        { name: "Arcana", ability: "INT" },
        { name: "Athletics", ability: "STR" },
        { name: "Deception", ability: "CHA" },
        { name: "History", ability: "INT" },
        { name: "Insight", ability: "WIS" },
        { name: "Intimidation", ability: "CHA" },
        { name: "Investigation", ability: "INT" },
        { name: "Medicine", ability: "WIS" },
        { name: "Nature", ability: "INT" },
        { name: "Perception", ability: "WIS" },
        { name: "Performance", ability: "CHA" },
        { name: "Persuasion", ability: "CHA" },
        { name: "Religion", ability: "INT" },
        { name: "Sleight of Hand", ability: "DEX" },
        { name: "Stealth", ability: "DEX" },
        { name: "Survival", ability: "WIS" },
      ],
    };
  },

  computed: {
    isSpellcaster() {
      return (
        this.character.class &&
        SPELLCASTER_CLASSES.includes(this.character.class)
      );
    },

    spellStepVisible() {
      if (!this.isSpellcaster) return false;
      const row = this.selectedClassData?.levels?.[0];
      if (!row) return false;
      const cantrips = parseInt(row.cantrips || 0);
      const prepared = parseInt(row.preparedSpells || 0);
      const slot1 = row.slot1 && row.slot1 !== "—" && row.slot1 !== "";
      const slotLevel =
        row.slotLevel && row.slotLevel !== "—" && row.slotLevel !== "";
      const spellSlots =
        row.spellSlots && row.spellSlots !== "—" && row.spellSlots !== "";
      return cantrips > 0 || prepared > 0 || slot1 || slotLevel || spellSlots;
    },

    steps() {
      const base = [
        { label: "Info" },
        { label: "Species" },
        { label: "Class" },
        { label: "Background" },
        { label: "Abilities" },
        { label: "Skills" },
        { label: "Equipment" },
        { label: "Sheet" },
      ];
      if (this.spellStepVisible) base.splice(7, 0, { label: "Spells" });
      return base;
    },

    spellsStepIndex() {
      return this.spellStepVisible ? 7 : -1;
    },
    sheetStepIndex() {
      return this.spellStepVisible ? 8 : 7;
    },

    selectedSpeciesData() {
      if (!this.character.species) return null;
      return this.races.find((r) => r.name === this.character.species);
    },

    selectedClassData() {
      if (!this.character.class) return null;
      return this.classes.find((c) => c.name === this.character.class);
    },

    selectedBackgroundData() {
      if (!this.character.background) return null;
      return this.backgrounds.find((b) => b.name === this.character.background);
    },

    filteredBackgrounds() {
      const q = this.backgroundSearch.toLowerCase();
      return this.backgrounds.filter(
        (bg) =>
          bg.name.includes(q) ||
          (bg.skill && bg.skill.toLowerCase().includes(q)) ||
          (bg.feat && bg.feat.toLowerCase().includes(q)),
      );
    },

    pointBuyRemaining() {
      const costs = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };
      let spent = 0;
      for (const ab of this.abilityList)
        spent += costs[this.character.abilityScores[ab]] || 0;
      return 27 - spent;
    },

    allScoresAssigned() {
      return this.abilityList.every((ab) => this.character.abilityScores[ab]);
    },

    backgroundEligibleAbilities() {
      if (!this.selectedBackgroundData) return [];
      const nameMap = {
        STRENGTH: "STR",
        DEXTERITY: "DEX",
        CONSTITUTION: "CON",
        INTELLIGENCE: "INT",
        WISDOM: "WIS",
        CHARISMA: "CHA",
      };
      return this.selectedBackgroundData.abilityScore
        .split(",")
        .map((s) => {
          const word = s.trim().split(" ")[0].toUpperCase();
          return nameMap[word] || word.slice(0, 3);
        })
        .filter((s) => this.abilityList.includes(s));
    },

    bonusPointsUsed() {
      return Object.values(this.character.backgroundBonuses).reduce(
        (a, b) => a + b,
        0,
      );
    },

    bonusAssigned() {
      if (!this.character.backgroundBonusMethod) return false;
      if (this.character.backgroundBonusMethod === "2+1") {
        return this.bonusAlreadyUsed(2) && this.bonusAlreadyUsed(1);
      }
      return this.bonusPointsUsed === 3;
    },

    backgroundSkills() {
      if (!this.character.backgroundData) return [];
      return this.character.backgroundData.skill
        .split(/\band\b|,/)
        .map((s) => s.trim())
        .filter(Boolean);
    },

    classAvailableSkills() {
      if (!this.selectedClassData) return [];
      const trait = this.selectedClassData.coreTraits.find(
        (t) => t.label === "Skill Proficiencies",
      );
      if (!trait) return [];

      const value = trait.value;
      const colonIndex = value.indexOf(":");

      // No colon means "Choose N skills" with no restriction — allow all skills
      if (colonIndex === -1) {
        return this.allSkills.map((s) => s.name);
      }

      const afterColon = value.slice(colonIndex + 1);
      const parsed = afterColon
        .split(",")
        .map((s) => s.replace(/\bor\b/i, "").trim())
        .filter(Boolean);

      // If parsing yielded nothing, also fall back to all skills
      return parsed.length > 0 ? parsed : this.allSkills.map((s) => s.name);
    },

    classSkillsChosen() {
      return this.character.skills.filter(
        (s) => !this.backgroundSkills.includes(s),
      ).length;
    },

    skillChoiceCount() {
      if (!this.selectedClassData) return 2;
      const trait = this.selectedClassData.coreTraits.find(
        (t) => t.label === "Skill Proficiencies",
      );
      if (!trait) return 2;
      const match = trait.value.match(/(\d+)/);
      return match ? parseInt(match[1]) : 2;
    },

    savingThrows() {
      if (!this.selectedClassData) return [];
      const trait = this.selectedClassData.coreTraits.find(
        (t) => t.label === "Saving Throw Proficiencies",
      );
      if (!trait) return [];
      return trait.value
        .split(/\band\b|,/)
        .map((s) => s.trim())
        .filter(Boolean);
    },

    equipmentOptionA() {
      if (!this.selectedClassData) return "";
      const trait = this.selectedClassData.coreTraits.find(
        (t) => t.label === "Starting Equipment",
      );
      if (!trait) return "";
      const match = trait.value.match(/\(A\)(.*?)(?:;\s*or|\(B\)|$)/s);
      return match ? match[1].trim() : trait.value;
    },

    equipmentOptionB() {
      if (!this.selectedClassData) return "";
      const trait = this.selectedClassData.coreTraits.find(
        (t) => t.label === "Starting Equipment",
      );
      if (!trait) return "";
      const match = trait.value.match(/\(B\)(.*?)$/s);
      return match ? match[1].trim() : "";
    },

    classCantrips() {
      if (!this.character.class) return [];
      const level0 = this.allSpells.find((s) => s.level === "0");
      if (!level0) return [];
      return level0.spells.filter((s) =>
        s.class.some(
          (c) => c.toLowerCase() === this.character.class.toLowerCase(),
        ),
      );
    },

    classLevel1Spells() {
      if (!this.character.class) return [];
      const level1 = this.allSpells.find((s) => s.level === "1");
      if (!level1) return [];
      return level1.spells.filter((s) =>
        s.class.some(
          (c) => c.toLowerCase() === this.character.class.toLowerCase(),
        ),
      );
    },

    filteredCantrips() {
      const q = this.cantripSearch.toLowerCase();
      return this.classCantrips.filter(
        (s) =>
          !q ||
          s.name.replace(/_/g, " ").includes(q) ||
          s.school.toLowerCase().includes(q),
      );
    },

    filteredPreparedSpells() {
      const q = this.preparedSearch.toLowerCase();
      return this.classLevel1Spells.filter(
        (s) =>
          !q ||
          s.name.replace(/_/g, " ").includes(q) ||
          s.school.toLowerCase().includes(q),
      );
    },

    level1CantripsCount() {
      if (!this.selectedClassData) return 0;
      const row = this.selectedClassData.levels[0];
      return row && row.cantrips ? parseInt(row.cantrips) : 0;
    },

    level1PreparedCount() {
      if (!this.selectedClassData) return 0;
      const row = this.selectedClassData.levels[0];
      return row && row.preparedSpells ? parseInt(row.preparedSpells) : 2;
    },

    maxHP() {
      if (!this.selectedClassData) return "—";
      const dieTrait = this.selectedClassData.coreTraits.find(
        (t) => t.label === "Hit Point Die",
      );
      if (!dieTrait) return "—";
      const match = dieTrait.value.match(/D(\d+)/i);
      if (!match) return "—";
      const dwarfBonus = this.character.species === "dwarf" ? 1 : 0;
      return parseInt(match[1]) + this.abilityModifier("CON") + dwarfBonus;
    },

    baseAC() {
      const dexMod = this.abilityModifier("DEX");
      if (!this.selectedClassData) return 10 + dexMod;
      const armor = this.selectedClassData.coreTraits.find(
        (t) => t.label === "Armor Training",
      );
      if (!armor) return 10 + dexMod;
      if (armor.value.includes("Heavy")) return 16;
      if (armor.value.includes("Medium")) return 13 + Math.min(dexMod, 2);
      if (armor.value.includes("Light")) return 11 + dexMod;
      return 10 + dexMod;
    },

    canProceed() {
      switch (this.currentStep) {
        case 0:
          return this.character.name.trim().length > 0;
        case 1:
          return !!this.character.species;
        case 2:
          return !!this.character.class;
        case 3:
          return !!this.character.background;
        case 4:
          return (
            this.allScoresAssigned &&
            !!this.character.abilityMethod &&
            this.bonusAssigned
          );
        case 5:
          return this.classSkillsChosen >= this.skillChoiceCount;
        case 6:
          return !!this.character.equipment;
        case 7:
          if (this.isSpellcaster) {
            return (
              this.character.spells.cantrips.length >=
                this.level1CantripsCount &&
              this.character.spells.prepared.length >= this.level1PreparedCount
            );
          }
          return true;
        default:
          return true;
      }
    },
  },

  methods: {
    copyPositions() {
      const out = this.pdfFields.reduce((acc, f) => {
        acc[f.id] = { x: f.x, y: f.yFromTop };
        return acc;
      }, {});
      navigator.clipboard.writeText(JSON.stringify(out, null, 2));
      alert("Copied!");
    },

    goToStep(i) {
      if (i < this.currentStep) {
        this.currentStep = i;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    nextStep() {
      if (!this.canProceed) return;
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },

    selectSpecies(entry) {
      this.character.species = entry.name;
      this.character.speciesData = entry.race[0];
    },

    selectClass(cls) {
      this.character.class = cls.name;
      this.character.classData = cls;
      this.character.spells = { cantrips: [], prepared: [] };

      // Remove any class-chosen skills that aren't background skills
      // (background skills stay, class picks are reset)
      this.character.skills = this.character.skills.filter((s) =>
        this.backgroundSkills.includes(s),
      );
    },

    selectBackground(bg) {
      this.character.background = bg.name;
      this.character.backgroundData = bg;
      this.abilityList.forEach((ab) => {
        this.character.backgroundBonuses[ab] = 0;
      });
      this.character.backgroundBonusMethod = null;
      const newSkills = bg.skill
        .split(/\band\b|,/)
        .map((s) => s.trim())
        .filter(Boolean);
      newSkills.forEach((s) => {
        if (!this.character.skills.includes(s)) this.character.skills.push(s);
      });
    },

    setAbilityMethod(key) {
      this.character.abilityMethod = key;
      this.abilityList.forEach((ab) => {
        this.character.abilityScores[ab] = null;
      });
      this.rolledScores = [];
      if (key === "pointbuy")
        this.abilityList.forEach((ab) => {
          this.character.abilityScores[ab] = 8;
        });
      this.abilityList.forEach((ab) => {
        this.character.backgroundBonuses[ab] = 0;
      });
      this.character.backgroundBonusMethod = null;
    },

    assignStandardScore(ab, val) {
      this.character.abilityScores[ab] = val ? parseInt(val) : null;
    },

    isArrayValueUsed(val) {
      return this.abilityList.some(
        (ab) => this.character.abilityScores[ab] === val,
      );
    },

    adjustPointBuy(ab, delta) {
      const costs = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };
      const current = this.character.abilityScores[ab] || 8;
      const next = current + delta;
      if (next < 8 || next > 15) return;
      if (
        delta > 0 &&
        (costs[next] || 0) - (costs[current] || 0) > this.pointBuyRemaining
      )
        return;
      this.character.abilityScores[ab] = next;
    },

    rollAllScores() {
      this.rolledScores = Array.from({ length: 6 }, (_, id) => {
        const dice = Array.from(
          { length: 4 },
          () => Math.floor(Math.random() * 6) + 1,
        );
        dice.sort((a, b) => a - b);
        return { id, dice, total: dice.slice(1).reduce((s, d) => s + d, 0) };
      });
      this.abilityList.forEach((ab) => {
        this.character.abilityScores[ab] = null;
        this.character.abilityScoreRollIds[ab] = null;
      });
    },

    assignRolledScore(ab, rollId) {
      const id = parseInt(rollId);
      const roll = this.rolledScores.find((r) => r.id === id);
      if (!roll) return;
      this.character.abilityScoreRollIds[ab] = id;
      this.character.abilityScores[ab] = roll.total;
    },

    isRollUsed(id) {
      return Object.entries(this.character.abilityScoreRollIds).some(
        ([, val]) => val === id,
      );
    },

    // ── Background bonuses ────────────────────────────
    setBonusMethod(method) {
      this.character.backgroundBonusMethod = method;
      this.abilityList.forEach((ab) => {
        this.character.backgroundBonuses[ab] = 0;
      });
    },

    assignBonus(ab, val) {
      if (this.character.backgroundBonuses[ab] === val) {
        this.character.backgroundBonuses[ab] = 0;
        return;
      }
      if ((this.character.abilityScores[ab] || 0) + val > 20) return;
      this.abilityList.forEach((a) => {
        if (this.character.backgroundBonuses[a] === val)
          this.character.backgroundBonuses[a] = 0;
      });
      this.character.backgroundBonuses[ab] = val;
    },

    bonusAlreadyUsed(val) {
      return Object.values(this.character.backgroundBonuses).includes(val);
    },

    toggleBonus111(ab) {
      if (this.character.backgroundBonuses[ab] === 1) {
        this.character.backgroundBonuses[ab] = 0;
      } else {
        if (this.bonusPointsUsed >= 3) return;
        if ((this.character.abilityScores[ab] || 0) + 1 > 20) return;
        this.character.backgroundBonuses[ab] = 1;
      }
    },

    finalScore(ab) {
      return Math.min(
        20,
        (this.character.abilityScores[ab] || 0) +
          (this.character.backgroundBonuses[ab] || 0),
      );
    },

    // ── Utility ──────────────────────────────────────
    modifierDisplay(score) {
      if (!score) return "—";
      const mod = Math.floor((parseInt(score) - 10) / 2);
      return mod >= 0 ? `+${mod}` : `${mod}`;
    },

    abilityModifier(ab) {
      return Math.floor((this.finalScore(ab) - 10) / 2);
    },

    abilityFullName(ab) {
      return {
        STR: "Strength",
        DEX: "Dexterity",
        CON: "Constitution",
        INT: "Intelligence",
        WIS: "Wisdom",
        CHA: "Charisma",
      }[ab];
    },

    formatName(name) {
      if (!name) return "";
      return name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    },

    complexityClass(c) {
      if (c.includes("Low")) return "complexity-low";
      if (c.includes("Medium")) return "complexity-medium";
      if (c.includes("High")) return "complexity-high";
      return "";
    },

    toggleSkill(name) {
      if (this.backgroundSkills.includes(name)) return;
      // Only restrict if the class actually has a specific list
      if (
        this.classAvailableSkills.length > 0 &&
        !this.classAvailableSkills.includes(name)
      )
        return;
      const i = this.character.skills.indexOf(name);
      if (i !== -1) {
        this.character.skills.splice(i, 1);
      } else {
        if (this.classSkillsChosen >= this.skillChoiceCount) return;
        this.character.skills.push(name);
      }
    },

    savingThrowBonus(ab) {
      const total =
        this.abilityModifier(ab) +
        (this.savingThrows.includes(this.abilityFullName(ab)) ? 2 : 0);
      return total >= 0 ? `+${total}` : `${total}`;
    },

    skillBonus(skill) {
      const total =
        this.abilityModifier(skill.ability) +
        (this.character.skills.includes(skill.name) ? 2 : 0);
      return total >= 0 ? `+${total}` : `${total}`;
    },

    toggleSpell(type, name) {
      const list = this.character.spells[type];
      const limit =
        type === "cantrips"
          ? this.level1CantripsCount
          : this.level1PreparedCount;
      const i = list.indexOf(name);
      if (i !== -1) list.splice(i, 1);
      else if (list.length < limit) list.push(name);
    },

    resetCharacter() {
      this.currentStep = 0;
      this.character = {
        name: "",
        playerName: "",
        alignment: "",
        level: 1,
        species: null,
        speciesData: null,
        class: null,
        classData: null,
        background: null,
        backgroundData: null,
        abilityScores: {
          STR: null,
          DEX: null,
          CON: null,
          INT: null,
          WIS: null,
          CHA: null,
        },
        abilityScoreRollIds: {
          STR: null,
          DEX: null,
          CON: null,
          INT: null,
          WIS: null,
          CHA: null,
        },
        abilityMethod: null,
        backgroundBonuses: { STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 },
        backgroundBonusMethod: null,
        skills: [],
        equipment: null,
        spells: { cantrips: [], prepared: [] },
      };
      this.rolledScores = [];
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    async downloadSheet() {
      const { PDFDocument } = await import("pdf-lib");
      const c = this.character;

      const fs = (ab) =>
        Math.min(
          20,
          (c.abilityScores[ab] || 0) + (c.backgroundBonuses[ab] || 0),
        );
      const mod = (score) => {
        const m = Math.floor((score - 10) / 2);
        return m >= 0 ? `+${m}` : `${m}`;
      };
      const abmod = (ab) => Math.floor((fs(ab) - 10) / 2);
      const AB = {
        STR: "Strength",
        DEX: "Dexterity",
        CON: "Constitution",
        INT: "Intelligence",
        WIS: "Wisdom",
        CHA: "Charisma",
      };
      const stv = (ab) => {
        const m = abmod(ab) + (this.savingThrows.includes(AB[ab]) ? 2 : 0);
        return m >= 0 ? `+${m}` : `${m}`;
      };
      const skb = (name, ab) => {
        const m = abmod(ab) + (c.skills.includes(name) ? 2 : 0);
        return m >= 0 ? `+${m}` : `${m}`;
      };

      const passive =
        10 + abmod("WIS") + (c.skills.includes("Perception") ? 2 : 0);
      const spellAbility =
        this.selectedClassData?.primaryStat?.slice(0, 3).toUpperCase() || "WIS";
      const spellSaveDC = 8 + 2 + abmod(spellAbility);
      const spellAtk = 2 + abmod(spellAbility);
      const hitDie =
        this.selectedClassData?.coreTraits
          ?.find((t) => t.label === "Hit Point Die")
          ?.value?.match(/D\d+/i)?.[0]
          ?.toLowerCase() || "d8";
      const spellAbilityName = (() => {
        const raw = this.selectedClassData?.primaryStat || "";
        if (raw.includes("&")) return raw.split("&").pop().trim();
        if (raw.includes("·")) return raw.split("·").pop().trim();
        return raw.split(" ")[0];
      })();
      const eqText =
        c.equipment === "A" ? this.equipmentOptionA : this.equipmentOptionB;
      const fullEq = [eqText, c.backgroundData?.equipment]
        .filter(Boolean)
        .join(", ");

      // Define these before they are used below
      const cfText =
        this.selectedClassData?.levelPanels?.[0]?.features
          ?.map((f) => f.title)
          .join(", ") || "";
      const stText =
        this.selectedSpeciesData?.race?.[0]?.feats
          ?.map((f) => f.name)
          .join(", ") || "";

      const response = await fetch("/sheet.pdf");
      if (!response.ok) {
        alert(`Could not load PDF: ${response.status}`);
        return;
      }

      const pdfDoc = await PDFDocument.load(await response.arrayBuffer());
      const form = pdfDoc.getForm();

      const sf = (id, val, fontSize = null) => {
        try {
          const field = form.getTextField(id);
          field.setText(String(val ?? ""));
          if (fontSize !== null) {
            field.setFontSize(fontSize);
            const widgets = field.acroField.getWidgets();
            widgets.forEach((widget) => {
              widget.setDefaultAppearance(`/Helvetica ${fontSize} Tf 0 g`);
            });
          }
        } catch (e) {
          /* not found */
        }
      };

      const checkField = (id, on) => {
        try {
          const field = form.getField(id);
          const type = field.constructor.name;
          if (on) {
            if (type === "PDFCheckBox") field.check();
            else field.select("/Yes");
          } else {
            if (type === "PDFCheckBox") field.uncheck();
          }
        } catch (e) {
          /* not found */
        }
      };

      // ── Header ───────────────────────────────────────
      sf("Name", c.name || "", 10);
      sf("Background", (c.background || "").toUpperCase(), 7);
      sf("Class", (c.class || "").toUpperCase(), 7);
      sf("Species", (c.species || "").toUpperCase(), 7);
      sf("Subclass", (c.subclass || "").toUpperCase(), 7);
      sf("Level", String(c.level || 1), 11);
      sf("XP Points", String(c.xp || 0), 7);

      // ── Combat ───────────────────────────────────────
      sf("Armor Class", String(this.baseAC), 11);
      sf("Current HP", String(this.maxHP), 11);
      sf("Max HP", String(this.maxHP), 11);
      sf("Max HD", `1${hitDie}`, 9);
      sf("PROF BONUS", "+2", 14);
      sf("init", mod(fs("DEX")), 11);
      sf("SPEED", this.selectedSpeciesData?.race?.[0]?.speed || "30 ft.", 9);
      sf(
        "SIZE",
        (this.selectedSpeciesData?.race?.[0]?.size || "Medium").split(" ")[0],
        9,
      );
      sf("PASSIVE PERCEPTION", String(passive), 11);

      // ── Ability scores ────────────────────────────────
      sf("STR SCORE", "  ", String(fs("STR")), 11);
      sf("STR MOD", mod(fs("STR")), 10);
      sf("STR SAVE", stv("STR"), 9);
      sf("DEX SCORE", String(fs("DEX")), 11);
      sf("DEX MOD", mod(fs("DEX")), 10);
      sf("DEX SAVE", stv("DEX"), 9);
      sf("CON SCORE", String(fs("CON")), 11);
      sf("CON MOD", mod(fs("CON")), 10);
      sf("CON SAVE", stv("CON"), 9);
      sf("INT SCORE", String(fs("INT")), 11);
      sf("INT MOD", mod(fs("INT")), 10);
      sf("INT SAVE", stv("INT"), 9);
      sf("WIS SCORE", String(fs("WIS")), 11);
      sf("WIS MOD", mod(fs("WIS")), 10);
      sf("CHA SCORE", String(fs("CHA")), 11);
      sf("CHA MOD", mod(fs("CHA")), 10);
      sf("CHA SAVE", stv("CHA"), 9);

      // ── Skills ────────────────────────────────────────
      sf("ATHLETICS", skb("Athletics", "STR"), 9);
      sf("ACROBATICS", skb("Acrobatics", "DEX"), 9);
      sf("SLEIGHT OF HAND", skb("Sleight of Hand", "DEX"), 9);
      sf("STEALTH", skb("Stealth", "DEX"), 9);
      sf("ARCANA", skb("Arcana", "INT"), 9);
      sf("HISTORY", skb("History", "INT"), 9);
      sf("INVESTIGATION", skb("Investigation", "INT"), 9);
      sf("NATURE", skb("Nature", "INT"), 9);
      sf("RELIGION", skb("Religion", "INT"), 9);
      sf("ANIMAL HANDLING", skb("Animal Handling", "WIS"), 9);
      sf("INSIGHT", skb("Insight", "WIS"), 9);
      sf("MEDICINE", skb("Medicine", "WIS"), 9);
      sf("PERCEPTION", skb("Perception", "WIS"), 9);
      sf("SURVIVAL", skb("Survival", "WIS"), 9);
      sf("DECEPTION", skb("Deception", "CHA"), 9);
      sf("INTIMIDATE", skb("Intimidation", "CHA"), 9);
      sf("PERFORMANCE", skb("Performance", "CHA"), 9);
      sf("PERSUASION", skb("Persuasion", "CHA"), 9);

      // ── Right column ──────────────────────────────────
      sf("CLASS FEATURES 1", cfText, 8);
      sf("SPECIES TRAITS", stText, 8);
      sf("FEATS", c.backgroundData?.feat || "", 8);

      // ── Equipment ─────────────────────────────────────
      sf(
        "WEAPON PROF",
        this.selectedClassData?.coreTraits?.find(
          (t) => t.label === "Weapon Proficiencies",
        )?.value || "",
        10,
      );
      sf("EQUIPMENT", fullEq, 8);
      sf("TOOL PROF", c.backgroundData?.tool || "", 10);
      sf("Alignment", c.alignment || "", 9);

      // ── Saving throw & skill dots ─────────────────────
      checkField("Check Box18", this.savingThrows.includes("Strength"));
      checkField("Check Box19", c.skills.includes("Athletics"));
      checkField("Check Box11", this.savingThrows.includes("Dexterity"));
      checkField("Check Box8", c.skills.includes("Acrobatics"));
      checkField("Check Box9", c.skills.includes("Sleight of Hand"));
      checkField("Check Box10", c.skills.includes("Stealth"));
      checkField("Check Box7", this.savingThrows.includes("Constitution"));
      checkField("Check Box25", this.savingThrows.includes("Intelligence"));
      checkField("Check Box24", c.skills.includes("Arcana"));
      checkField("Check Box20", c.skills.includes("History"));
      checkField("Check Box21", c.skills.includes("Investigation"));
      checkField("Check Box22", c.skills.includes("Nature"));
      checkField("Check Box23", c.skills.includes("Religion"));
      checkField("Check Box17", this.savingThrows.includes("Wisdom"));
      checkField("Check Box15", c.skills.includes("Animal Handling"));
      checkField("Check Box13", c.skills.includes("Insight"));
      checkField("Check Box12", c.skills.includes("Medicine"));
      checkField("Check Box14", c.skills.includes("Perception"));
      checkField("Check Box16", c.skills.includes("Survival"));
      checkField("Check Box6", this.savingThrows.includes("Charisma"));
      checkField("Check Box1", this.savingThrows.includes("Charisma"));
      checkField("Check Box5", c.skills.includes("Deception"));
      checkField("Check Box4", c.skills.includes("Intimidation"));
      checkField("Check Box3", c.skills.includes("Performance"));
      checkField("Check Box2", c.skills.includes("Persuasion"));

      // ── Page 2 spellcasting ───────────────────────────
      sf("SPELLCASTING ABILITY", spellAbilityName, 9);
      sf("SPELLCASTING MOD", mod(fs(spellAbility)), 11);
      sf("SPELL SAVE DC", String(spellSaveDC), 11);
      sf("SPELL ATTACK BONUS", `+${spellAtk}`, 11);

      const allSpells = [
        ...c.spells.cantrips.map((s) => ["0", this.formatName(s)]),
        ...c.spells.prepared.map((s) => ["1", this.formatName(s)]),
      ];
      allSpells.slice(0, 29).forEach(([lvl, name], i) => {
        sf(`SPELL NAME${i}`, name);
        sf(`SPELL LEVEL${i}`, lvl === "0" ? "" : lvl);
      });

      // ── Save & download ───────────────────────────────
      form.flatten();
      const filled = await pdfDoc.save();
      const blob = new Blob([filled], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${c.name || "character"}_sheet.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    },
  },
};
</script>

<style scoped>
.creator-page {
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-body);
}

.creator-header {
  width: 100%;
  padding: 3rem 2.5rem 2rem;
  background: linear-gradient(
    to bottom,
    rgba(var(--bg-page-rgb), 0.95),
    var(--bg-page)
  );
  border-bottom: 1px solid var(--border-subtle);
  text-align: center;
}
.header-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
}
.header-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.5rem;
}
.header-sub {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0;
}

.progress-bar-wrap {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-subtle);
  padding: 0.75rem 1.5rem;
  overflow-x: auto;
}
.progress-bar-inner {
  display: flex;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
}
.progress-step {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex: 1;
  cursor: pointer;
  position: relative;
  padding: 0.25rem 0.4rem;
}
.progress-step::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: var(--border-subtle);
}
.progress-step:last-child::after {
  display: none;
}
.step-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--bg-page);
  border: 2px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: all 0.2s ease;
}
.progress-step.active .step-dot {
  background: #c084fc;
  border-color: #c084fc;
  color: #fff;
}
.progress-step.complete .step-dot {
  background: #4ade80;
  border-color: #4ade80;
  color: #fff;
}
.step-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-muted);
  white-space: nowrap;
}
.progress-step.active .step-label {
  color: var(--text-heading);
}
.progress-step.complete .step-label {
  color: #4ade80;
}

.creator-body {
  max-width: 960px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 6rem;
}

.step-panel {
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.step-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0 0 0.4rem;
}
.step-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0 0 2rem;
  line-height: 1.6;
}

.form-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 560px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}
.required {
  color: #f87171;
}
.form-input {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  color: var(--text-body);
  outline: none;
  transition: border-color 0.15s ease;
}
.form-input:focus {
  border-color: #c084fc;
}
.form-input::placeholder {
  color: var(--text-subtle);
}
.alignment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
}
.alignment-btn {
  padding: 0.5rem 0.25rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}
.alignment-btn:hover {
  border-color: #c084fc;
  color: var(--text-heading);
}
.alignment-btn.selected {
  border-color: #c084fc;
  background: rgba(192, 132, 252, 0.1);
  color: #c084fc;
}
.level-display {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.level-badge {
  padding: 4px 14px;
  border-radius: 999px;
  background: rgba(192, 132, 252, 0.12);
  color: #c084fc;
  border: 1px solid rgba(192, 132, 252, 0.3);
  font-size: 0.8rem;
  font-weight: 700;
}
.level-note {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.select-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;
  overflow: hidden;
}
.select-card:hover {
  border-color: #c084fc;
  background: rgba(192, 132, 252, 0.04);
}
.select-card.selected {
  border-color: #c084fc;
  background: rgba(192, 132, 252, 0.07);
}
.class-accent-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 12px 12px 0 0;
}
.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.card-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-heading);
}
.card-badges {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
}
.card-badge {
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 7px;
  border-radius: 999px;
  background: var(--bg-page);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  white-space: nowrap;
}
.card-badge.accent {
  background: rgba(192, 132, 252, 0.1);
  border-color: rgba(192, 132, 252, 0.3);
  color: #c084fc;
}
.card-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 0.75rem;
}
.card-traits {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.trait-pill {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--bg-page);
  border: 1px solid var(--border-faint);
  color: var(--text-subtle);
}
.card-footer {
  margin-top: 0.75rem;
}
.complexity-pill {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 999px;
}
.complexity-low {
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
}
.complexity-medium {
  background: rgba(251, 191, 36, 0.1);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}
.complexity-high {
  background: rgba(248, 113, 113, 0.1);
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.3);
}

.detail-panel {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1.5rem;
  margin-top: 0.5rem;
}
.detail-header {
  margin-bottom: 1rem;
}
.detail-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0 0 0.4rem;
}
.detail-badges {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}
.detail-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0 0 1rem;
}
.detail-traits {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.detail-trait {
  background: var(--bg-page);
  border: 1px solid var(--border-faint);
  border-radius: 8px;
  padding: 0.75rem;
}
.detail-trait-name {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-heading);
  display: block;
  margin-bottom: 0.3rem;
}
.detail-trait-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}
.detail-trait-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--border-faint);
  align-items: start;
}
.detail-trait-row:last-child {
  border-bottom: none;
}
.detail-trait-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.detail-trait-value {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}
.detail-section {
  margin-top: 1.25rem;
}
.detail-section-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin: 0 0 0.75rem;
}
.detail-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.detail-feature-chip {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid;
  background: transparent;
}

.slide-up-enter-active {
  transition: all 0.25s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.search-bar-wrap {
  position: relative;
  max-width: 400px;
  margin-bottom: 1.25rem;
}
.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-subtle);
}
.search-input {
  width: 100%;
  padding: 0.65rem 1rem 0.65rem 2.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-body);
  outline: none;
  box-sizing: border-box;
}
.search-input:focus {
  border-color: #c084fc;
}
.search-input::placeholder {
  color: var(--text-subtle);
}

.list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  max-height: 420px;
  overflow-y: auto;
  padding-right: 0.25rem;
}
.list-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 0.85rem 1rem;
  cursor: pointer;
  transition: all 0.15s ease;
}
.list-card:hover {
  border-color: #c084fc;
}
.list-card.selected {
  border-color: #c084fc;
  background: rgba(192, 132, 252, 0.07);
}
.list-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}
.list-card-name {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text-heading);
}
.list-card-feat {
  font-size: 0.65rem;
  font-weight: 600;
  color: #c084fc;
  text-align: right;
  flex-shrink: 0;
}
.list-card-pills {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
}

.method-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  background: var(--bg-card);
  border-radius: 10px;
  padding: 0.35rem;
  width: fit-content;
  border: 1px solid var(--border-subtle);
}
.method-tab {
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}
.method-tab:hover {
  color: var(--text-heading);
}
.method-tab.active {
  background: #c084fc;
  color: #fff;
}
.ability-method-panel {
  max-width: 560px;
}
.method-note {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  line-height: 1.6;
}
.method-note strong {
  color: var(--text-heading);
}
.standard-array-chips {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}
.array-chip {
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  background: rgba(192, 132, 252, 0.12);
  color: #c084fc;
  border: 1px solid rgba(192, 132, 252, 0.3);
  transition: opacity 0.15s;
}
.array-chip.used {
  opacity: 0.35;
}
.ability-step-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 1.5rem;
  align-items: start;
}

.ability-left {
  min-width: 0;
}

.ability-right {
  position: sticky;
  top: 4rem;
}

.ability-method-panel {
  max-width: 100%;
}

.inline-final {
  font-size: 0.82rem;
  font-weight: 700;
  color: #4ade80;
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
  white-space: nowrap;
}

@media (max-width: 760px) {
  .ability-step-layout {
    grid-template-columns: 1fr;
  }
  .ability-right {
    position: static;
  }
}
.ability-rows {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.ability-row {
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 0.65rem 1rem;
}
.ability-name {
  font-size: 0.8rem;
  font-weight: 800;
  color: #c084fc;
  letter-spacing: 0.05em;
}
.ability-full-name {
  font-size: 0.82rem;
  color: var(--text-muted);
}
.ability-controls {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.ability-select {
  background: var(--bg-page);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  padding: 0.35rem 0.6rem;
  font-size: 0.85rem;
  color: var(--text-body);
  outline: none;
  cursor: pointer;
}
.ability-modifier {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-muted);
  min-width: 28px;
  text-align: right;
}
.point-buy-cost-table {
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}
.cost-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 10px;
  border-radius: 8px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-heading);
  min-width: 36px;
}
.cost-sub {
  font-size: 0.6rem;
  font-weight: 600;
  color: var(--text-muted);
}
.pb-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-page);
  color: var(--text-heading);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}
.pb-btn:hover:not(:disabled) {
  border-color: #c084fc;
  color: #c084fc;
}
.pb-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.pb-score {
  font-size: 1rem;
  font-weight: 800;
  color: var(--text-heading);
  min-width: 24px;
  text-align: center;
}
.roll-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: #c084fc;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 1.25rem;
  transition: opacity 0.15s;
}
.roll-btn:hover {
  opacity: 0.9;
}
.roll-results {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}
.roll-result-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  min-width: 48px;
}
.roll-total {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-heading);
}
.roll-dice {
  font-size: 0.6rem;
  color: var(--text-muted);
}
.score-summary {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
}
.score-summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 60px;
  gap: 0.1rem;
}
.ss-label {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c084fc;
}
.ss-score {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-heading);
}
.ss-mod {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
}
.ss-bonus {
  font-size: 0.6rem;
  font-weight: 700;
  color: #4ade80;
}

.bg-bonus-section {
  margin-top: 2rem;
  padding: 1.25rem;
  background: var(--bg-card);
  border: 1px solid rgba(192, 132, 252, 0.25);
  border-radius: 12px;
  max-width: 560px;
}
.bg-bonus-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.bg-bonus-source {
  font-size: 0.78rem;
  font-weight: 600;
  color: #c084fc;
}
.bg-bonus-note {
  font-size: 0.83rem;
  color: var(--text-muted);
  margin: 0 0 1.25rem;
  line-height: 1.6;
}
.bg-bonus-note strong {
  color: var(--text-heading);
}
.bonus-rows {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.bonus-row {
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-page);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 0.65rem 1rem;
}
.bonus-chip {
  padding: 3px 12px;
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  margin-right: 0.3rem;
}
.bonus-chip:hover:not(:disabled) {
  border-color: #c084fc;
  color: #c084fc;
}
.bonus-chip.active {
  background: rgba(192, 132, 252, 0.15);
  border-color: #c084fc;
  color: #c084fc;
}
.bonus-chip:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.bonus-final-score {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-heading);
  min-width: 52px;
  text-align: right;
  display: flex;
  align-items: baseline;
  gap: 0.3rem;
}
.bonus-final-score.capped {
  color: #fbbf24;
}
.bonus-mod-display {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
}
.bonus-complete {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #4ade80;
  padding: 0.5rem 0;
}
.bonus-incomplete {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  padding: 0.6rem 0.85rem;
  background: var(--bg-page);
  border-radius: 8px;
  border: 1px solid var(--border-faint);
  margin-top: 0.5rem;
}

.proficiency-summary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.prof-block {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 0.85rem;
}
.prof-block-title {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #c084fc;
  margin-bottom: 0.5rem;
}
.prof-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.prof-pill {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--bg-page);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
}
.prof-pill.active {
  background: rgba(192, 132, 252, 0.1);
  border-color: rgba(192, 132, 252, 0.3);
  color: #c084fc;
}
.skills-subtitle {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.75rem;
}
.skills-chosen-count {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-left: 0.4rem;
}
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.skill-row {
  display: grid;
  grid-template-columns: 24px 1fr 48px auto;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.85rem;
  border-radius: 8px;
  border: 1px solid var(--border-faint);
  background: var(--bg-card);
  cursor: pointer;
  transition: all 0.15s ease;
}
.skill-row:hover:not(.disabled) {
  border-color: #c084fc;
}
.skill-row.selected {
  background: rgba(192, 132, 252, 0.07);
  border-color: rgba(192, 132, 252, 0.4);
}
.skill-row.bg-skill {
  background: rgba(74, 222, 128, 0.05);
  border-color: rgba(74, 222, 128, 0.3);
  cursor: default;
}
.skill-row.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.skill-check {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-page);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c084fc;
}
.skill-row.bg-skill .skill-check {
  border-color: rgba(74, 222, 128, 0.4);
  color: #4ade80;
}
.skill-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-body);
}
.skill-ability {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
}
.skill-source {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: right;
}
.skills-available-note {
  display: block;
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: var(--text-subtle);
}
.bg-source {
  color: #4ade80;
}
.class-source {
  color: #c084fc;
}

.equipment-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.equipment-option {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.15s ease;
}
.equipment-option:hover {
  border-color: #c084fc;
}
.equipment-option.selected {
  border-color: #4ade80;
  background: rgba(74, 222, 128, 0.05);
}
.eq-option-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.eq-option-letter {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(192, 132, 252, 0.15);
  color: #c084fc;
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.eq-option-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-heading);
  flex: 1;
}
.eq-option-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}
.bg-equipment-box {
  background: rgba(74, 222, 128, 0.05);
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 10px;
  padding: 1rem;
}
.bg-eq-title {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #4ade80;
  margin-bottom: 0.4rem;
}
.bg-eq-text {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.spell-section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.spell-section-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0;
}
.spell-count-badge {
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(192, 132, 252, 0.12);
  color: #c084fc;
  border: 1px solid rgba(192, 132, 252, 0.3);
  font-size: 0.75rem;
  font-weight: 700;
}
.spell-search-wrap {
  position: relative;
  max-width: 400px;
  margin-bottom: 1rem;
}
.spells-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.6rem;
  max-height: 480px;
  overflow-y: auto;
  padding-right: 0.25rem;
}
.spell-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;
}
.spell-card:hover:not(.disabled) {
  border-color: #c084fc;
}
.spell-card.selected {
  border-color: #c084fc;
  background: rgba(192, 132, 252, 0.07);
}
.spell-card.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.spell-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}
.spell-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-heading);
}
.spell-school {
  font-size: 0.62rem;
  font-weight: 600;
  color: #c084fc;
  text-align: right;
  flex-shrink: 0;
}
.spell-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
}
.spell-meta-item {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.68rem;
  color: var(--text-muted);
}
.spell-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 0.4rem;
}
.spell-components {
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--text-subtle);
}

.sheet-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2rem;
}
.sheet-identity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 2px solid var(--border-subtle);
  background: linear-gradient(135deg, rgba(192, 132, 252, 0.05), transparent);
}
.sheet-char-name {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0 0 0.5rem;
}
.sheet-identity-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.sheet-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--bg-page);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
}
.sheet-identity-right {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.sheet-hp-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 1rem;
  background: var(--bg-page);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  min-width: 64px;
}
.sheet-hp-label {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-muted);
  margin-bottom: 0.2rem;
}
.sheet-hp-val {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-heading);
}
.sheet-section {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border-faint);
}
.sheet-section:last-child {
  border-bottom: none;
}
.sheet-section-title {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c084fc;
  margin: 0 0 0.85rem;
}
.sheet-scores {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.sheet-score-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0.75rem;
  border-radius: 10px;
  background: var(--bg-page);
  border: 1px solid var(--border-subtle);
  flex: 1;
  min-width: 64px;
}
.sheet-score-mod {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--accent, #c084fc);
}
.sheet-score-val {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-heading);
}
.sheet-score-ab {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}
.sheet-score-bg {
  font-size: 0.58rem;
  font-weight: 700;
  color: #4ade80;
}
.sheet-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.sheet-col:first-child {
  border-right: 1px solid var(--border-faint);
}
.sheet-save-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.sheet-skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.sheet-save-row {
  display: grid;
  grid-template-columns: 10px 36px 1fr;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 0;
}
.sheet-skill-row {
  display: grid;
  grid-template-columns: 10px 36px 1fr;
  align-items: center;
  gap: 0.5rem;
  padding: 0.18rem 0;
}
.sheet-save-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-subtle);
  border: 1px solid var(--border-subtle);
}
.sheet-save-dot.proficient {
  background: #c084fc;
  border-color: #c084fc;
}
.sheet-save-val {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-heading);
  text-align: right;
}
.sheet-save-name {
  font-size: 0.78rem;
  color: var(--text-muted);
}
.sheet-skill-ab {
  font-size: 0.65rem;
  color: var(--text-subtle);
}
.sheet-trait-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.sheet-trait-name {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-heading);
  display: block;
  margin-bottom: 0.2rem;
}
.sheet-trait-desc {
  font-size: 0.77rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}
.sheet-eq-text {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 0.5rem;
}
.sheet-spell-group-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin: 0 0 0.4rem;
}
.sheet-spell-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.sheet-spell-tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(192, 132, 252, 0.1);
  border: 1px solid rgba(192, 132, 252, 0.25);
  color: #c084fc;
}
.sheet-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.sheet-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease;
}
.sheet-btn-primary {
  background: #c084fc;
  color: #fff;
}
.sheet-btn-primary:hover {
  opacity: 0.9;
}
.sheet-btn-secondary {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
}
.sheet-btn-secondary:hover {
  border-color: #f87171;
  color: #f87171;
}

.step-nav {
  display: flex;
  align-items: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
}
.nav-spacer {
  flex: 1;
}
.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease;
}
.nav-back {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
}
.nav-back:hover {
  border-color: #c084fc;
  color: var(--text-heading);
}
.nav-next {
  background: #c084fc;
  color: #fff;
}
.nav-next:hover:not(:disabled) {
  opacity: 0.9;
}
.nav-next:disabled {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-subtle);
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .creator-header {
    padding: 2rem 1.25rem 1.5rem;
  }
  .header-title {
    font-size: 1.75rem;
  }
  .card-grid {
    grid-template-columns: 1fr;
  }
  .step-label {
    display: none;
  }
  .detail-trait-row {
    grid-template-columns: 1fr;
  }
  .proficiency-summary {
    grid-template-columns: 1fr;
  }
  .equipment-options {
    grid-template-columns: 1fr;
  }
  .sheet-two-col {
    grid-template-columns: 1fr;
  }
  .sheet-col:first-child {
    border-right: none;
    border-bottom: 1px solid var(--border-faint);
  }
  .sheet-identity {
    flex-direction: column;
  }
  .bonus-row {
    grid-template-columns: 48px 1fr;
  }
}
</style>
