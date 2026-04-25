<template>
  <div class="ranger-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/ranger.png" alt="Ranger" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Ranger</h1>
          <p class="hero-subtitle">
            A warrior who uses martial prowess and nature magic to combat
            threats at the edges of civilization
          </p>
          <div class="hero-badges">
            <span class="badge badge-green">Low Complexity</span>
            <span class="badge badge-teal">Dexterity & Wisdom</span>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content">
      <!-- Core Traits -->
      <section class="section">
        <h2 class="section-title">Core Traits</h2>
        <div class="traits-grid">
          <div class="trait-row" v-for="trait in coreTraits" :key="trait.label">
            <span class="trait-label">{{ trait.label }}</span>
            <span class="trait-value">{{ trait.value }}</span>
          </div>
        </div>
      </section>

      <!-- Becoming a Ranger -->
      <section class="section">
        <h2 class="section-title">Becoming a Ranger</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Ranger Traits table.</li>
              <li>
                Gain the Ranger's level 1 features listed in the Features table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>
                Gain the Hit Point Die, proficiency with Martial weapons,
                proficiency in one skill from the Ranger's list, and training
                with Light and Medium armor and Shields.
              </li>
              <li>
                Gain the Ranger's level 1 features. See the multiclassing rules
                to determine available spell slots.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Class Features Table -->
      <section class="section">
        <h2 class="section-title">Class Features</h2>
        <div class="table-wrap">
          <table class="features-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Prof. Bonus</th>
                <th>Features Unlocked</th>
                <th>Favored Enemy</th>
                <th>Prepared Spells</th>
                <th>1st</th>
                <th>2nd</th>
                <th>3rd</th>
                <th>4th</th>
                <th>5th</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in levels"
                :key="item.level"
                :class="{ 'row-highlight': item.feature.includes('Subclass') }"
              >
                <td class="level-cell">{{ item.level }}</td>
                <td class="text-center">{{ item.profBonus }}</td>
                <td>{{ item.feature }}</td>
                <td class="text-center">
                  <span class="fe-badge">{{ item.favoredEnemy }}</span>
                </td>
                <td class="text-center">
                  <span class="ps-badge">{{ item.preparedSpells }}</span>
                </td>
                <td class="text-center">{{ item.slot1 }}</td>
                <td class="text-center">{{ item.slot2 }}</td>
                <td class="text-center">{{ item.slot3 }}</td>
                <td class="text-center">{{ item.slot4 }}</td>
                <td class="text-center">{{ item.slot5 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Level Breakdown -->
      <section class="section">
        <h2 class="section-title">Level Breakdown</h2>
        <div class="panels">
          <div
            v-for="(lvl, index) in levelPanels"
            :key="lvl.level"
            class="panel"
          >
            <div
              class="panel-header"
              @click="togglePanel(index)"
              :class="{ open: openPanels.includes(index) }"
            >
              <div class="panel-header-left">
                <span class="panel-level-badge">{{ lvl.level }}</span>
                <span class="panel-features-preview">{{
                  lvl.features.map((f) => f.title).join(" · ")
                }}</span>
              </div>
              <v-icon class="panel-chevron">
                {{
                  openPanels.includes(index)
                    ? "mdi-chevron-up"
                    : "mdi-chevron-down"
                }}
              </v-icon>
            </div>

            <div class="panel-body" v-if="openPanels.includes(index)">
              <div v-if="lvl.level === 'Level 3'" class="subclass-grid">
                <div
                  v-for="(sub, si) in subclasses"
                  :key="si"
                  class="subclass-btn"
                  @click="goTo(sub.title)"
                >
                  <v-icon class="subclass-icon">{{ subclassIcons[si] }}</v-icon>
                  <span>{{ sub.title }}</span>
                </div>
              </div>
              <div class="feature-cards">
                <div
                  v-for="feature in lvl.features"
                  :key="feature.title"
                  class="feature-card"
                >
                  <h3 class="feature-title">{{ feature.title }}</h3>
                  <div class="feature-body" v-html="feature.body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      openPanels: [0],

      subclasses: [
        { title: "Beast Master" },
        { title: "Fey Wanderer" },
        { title: "Gloom Stalker" },
        { title: "Hunter" },
      ],
      subclassIcons: [
        "mdi-paw",
        "mdi-shimmer",
        "mdi-eye-off",
        "mdi-crosshairs",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Dexterity and Wisdom" },
        { label: "Hit Point Die", value: "D10 per Ranger level" },
        {
          label: "Saving Throw Proficiencies",
          value: "Strength and Dexterity",
        },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 3: Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, or Survival",
        },
        { label: "Weapon Proficiencies", value: "Simple and Martial weapons" },
        {
          label: "Armor Training",
          value: "Light and Medium armor and Shields",
        },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Druidic Focus, Explorer's Pack, and 7 GP; or (B) 150 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Spellcasting, Favored Enemy, Weapon Mastery",
          favoredEnemy: "2",
          preparedSpells: "2",
          slot1: "2",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Deft Explorer, Fighting Style",
          favoredEnemy: "2",
          preparedSpells: "3",
          slot1: "2",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Ranger Subclass",
          favoredEnemy: "2",
          preparedSpells: "4",
          slot1: "3",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          favoredEnemy: "2",
          preparedSpells: "5",
          slot1: "3",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Extra Attack",
          favoredEnemy: "3",
          preparedSpells: "6",
          slot1: "4",
          slot2: "2",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Roving",
          favoredEnemy: "3",
          preparedSpells: "6",
          slot1: "4",
          slot2: "2",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Subclass Feature",
          favoredEnemy: "3",
          preparedSpells: "7",
          slot1: "4",
          slot2: "3",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          favoredEnemy: "3",
          preparedSpells: "7",
          slot1: "4",
          slot2: "3",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Expertise",
          favoredEnemy: "4",
          preparedSpells: "8",
          slot1: "4",
          slot2: "3",
          slot3: "2",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Tireless",
          favoredEnemy: "4",
          preparedSpells: "8",
          slot1: "4",
          slot2: "3",
          slot3: "2",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Subclass Feature",
          favoredEnemy: "4",
          preparedSpells: "10",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          favoredEnemy: "4",
          preparedSpells: "10",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Relentless Hunter",
          favoredEnemy: "5",
          preparedSpells: "11",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "1",
          slot5: "—",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Nature's Veil",
          favoredEnemy: "5",
          preparedSpells: "11",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "1",
          slot5: "—",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Subclass Feature",
          favoredEnemy: "5",
          preparedSpells: "12",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "2",
          slot5: "—",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          favoredEnemy: "5",
          preparedSpells: "12",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "2",
          slot5: "—",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Precise Hunter",
          favoredEnemy: "6",
          preparedSpells: "14",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "1",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Feral Senses",
          favoredEnemy: "6",
          preparedSpells: "14",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "1",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          favoredEnemy: "6",
          preparedSpells: "15",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Foe Slayer",
          favoredEnemy: "6",
          preparedSpells: "15",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
        },
      ],

      levelPanels: [
        {
          level: "Level 1",
          features: [
            {
              title: "Spellcasting",
              body: `<p>Wisdom is your spellcasting ability for Ranger spells, and you can use a Druidic Focus as a Spellcasting Focus.</p>
                     <br/>
                     <p>To start, choose two level 1 Ranger spells. Cure Wounds and Ensnaring Strike are recommended. Whenever you finish a Long Rest, you can replace one spell on your list with another Ranger spell for which you have spell slots.</p>`,
            },
            {
              title: "Favored Enemy",
              body: `<p>You always have the Hunter's Mark spell prepared. You can cast it twice without expending a spell slot, regaining all uses when you finish a Long Rest.</p>
                     <br/>
                     <p>The number of free casts increases when you reach certain Ranger levels, as shown in the Favored Enemy column.</p>`,
            },
            {
              title: "Weapon Mastery",
              body: `<p>Your training allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Longbows and Shortswords. Whenever you finish a Long Rest, you can change the kinds of weapons you chose.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Deft Explorer",
              body: `<p>Thanks to your travels, you gain the following benefits.</p>
                     <br/>
                     <p><b>Expertise.</b> Choose one of your skill proficiencies with which you lack Expertise. You gain Expertise in that skill.</p>
                     <br/>
                     <p><b>Languages.</b> You know two languages of your choice from the language tables.</p>`,
            },
            {
              title: "Fighting Style",
              body: `<p>You gain a Fighting Style feat of your choice. Alternatively, you can choose the Druidic Warrior option below.</p>
                     <br/>
                     <p><b>Druidic Warrior.</b> You learn two Druid cantrips of your choice (Guidance and Starry Wisp recommended). They count as Ranger spells using Wisdom as your spellcasting ability. You can replace one cantrip per Ranger level gained.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Ranger Subclass",
              body: `<p>You gain a Ranger subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Ranger level or lower. Choose your specialization below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Ranger levels 8, 12, and 16.</p>`,
            },
          ],
        },
        {
          level: "Level 5",
          features: [
            {
              title: "Extra Attack",
              body: `<p>You can attack twice instead of once whenever you take the Attack action on your turn.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Roving",
              body: `<p>Your Speed increases by 10 feet while you aren't wearing Heavy Armor. You also have a Climb Speed and a Swim Speed equal to your Speed.</p>`,
            },
          ],
        },
        {
          level: "Level 7",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 8",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.</p>`,
            },
          ],
        },
        {
          level: "Level 9",
          features: [
            {
              title: "Expertise",
              body: `<p>Choose two of your skill proficiencies with which you lack Expertise. You gain Expertise in those skills.</p>`,
            },
          ],
        },
        {
          level: "Level 10",
          features: [
            {
              title: "Tireless",
              body: `<p>Primal forces fuel you on your journeys, granting the following benefits.</p>
                     <br/>
                     <p><b>Temporary Hit Points.</b> As an action, you can give yourself Temporary Hit Points equal to 1d8 plus your Wisdom modifier (minimum 1). You can use this action a number of times equal to your Wisdom modifier (minimum once), regaining all uses on a Long Rest.</p>
                     <br/>
                     <p><b>Decrease Exhaustion.</b> Whenever you finish a Short Rest, your Exhaustion level, if any, decreases by 1.</p>`,
            },
          ],
        },
        {
          level: "Level 11",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 12",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.</p>`,
            },
          ],
        },
        {
          level: "Level 13",
          features: [
            {
              title: "Relentless Hunter",
              body: `<p>Taking damage can't break your Concentration on Hunter's Mark.</p>`,
            },
          ],
        },
        {
          level: "Level 14",
          features: [
            {
              title: "Nature's Veil",
              body: `<p>As a Bonus Action, you can invoke spirits of nature to give yourself the Invisible condition until the end of your next turn.</p>
                     <br/>
                     <p>You can use this feature a number of times equal to your Wisdom modifier (minimum once), regaining all uses on a Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 15",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 16",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.</p>`,
            },
          ],
        },
        {
          level: "Level 17",
          features: [
            {
              title: "Precise Hunter",
              body: `<p>You have Advantage on attack rolls against the creature currently marked by your Hunter's Mark.</p>`,
            },
          ],
        },
        {
          level: "Level 18",
          features: [
            {
              title: "Feral Senses",
              body: `<p>Your connection to the forces of nature grants you Blindsight with a range of 30 feet.</p>`,
            },
          ],
        },
        {
          level: "Level 19",
          features: [
            {
              title: "Epic Boon",
              body: `<p>You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Dimensional Travel is recommended.</p>`,
            },
          ],
        },
        {
          level: "Level 20",
          features: [
            {
              title: "Foe Slayer",
              body: `<p>The damage die of your Hunter's Mark is a d10 rather than a d6.</p>`,
            },
          ],
        },
      ],
    };
  },

  methods: {
    togglePanel(index) {
      const i = this.openPanels.indexOf(index);
      if (i === -1) this.openPanels.push(index);
      else this.openPanels.splice(i, 1);
    },
    goTo(label) {
      router
        .push(
          "/wiki/classes/ranger/" + label.replace(/\s+/g, "_").toLowerCase(),
        )
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.ranger-page {
  min-height: 100vh;
  background: #0e0e1a;
  color: #e2e8f0;
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(14, 14, 26, 0.2) 0%,
    rgba(14, 14, 26, 0.7) 60%,
    #0e0e1a 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 2.5rem;
}
.hero-content {
  max-width: 700px;
}
.hero-eyebrow {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #4ade80;
}
.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0.25rem 0 0.5rem;
  line-height: 1;
}
.hero-subtitle {
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 1rem;
}
.hero-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.badge {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  padding: 4px 12px;
  border-radius: 999px;
}
.badge-green {
  background: rgba(74, 222, 128, 0.12);
  color: #a3e635;
  border: 1px solid #a3e635;
}
.badge-teal {
  background: rgba(45, 212, 191, 0.12);
  color: #2dd4bf;
  border: 1px solid #2dd4bf;
}

/* ── Page content ───────────────────────────────── */
.page-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* ── Section ────────────────────────────────────── */
.section {
  margin-bottom: 3rem;
}
.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(74, 222, 128, 0.3);
}

/* ── Core Traits ────────────────────────────────── */
.traits-grid {
  background: #12121f;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.trait-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  align-items: start;
}
.trait-row:last-child {
  border-bottom: none;
}
.trait-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #4ade80;
}
.trait-value {
  font-size: 0.9rem;
  color: #cbd5e1;
  line-height: 1.5;
}

/* ── Becoming ───────────────────────────────────── */
.becoming-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 640px) {
  .becoming-grid {
    grid-template-columns: 1fr;
  }
}
.becoming-card {
  background: #12121f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 1.25rem;
}
.becoming-heading {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #4ade80;
  margin-bottom: 0.75rem;
}
.becoming-list {
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.becoming-list li {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.5;
}

/* ── Table ──────────────────────────────────────── */
.table-wrap {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.features-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}
.features-table thead tr {
  background: rgba(74, 222, 128, 0.06);
}
.features-table th {
  padding: 0.75rem 0.6rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4ade80;
  white-space: nowrap;
}
.features-table th:nth-child(3) {
  text-align: left;
}
.features-table td {
  padding: 0.6rem 0.6rem;
  color: #cbd5e1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  text-align: center;
  white-space: nowrap;
}
.features-table td:nth-child(3) {
  text-align: left;
  min-width: 220px;
}
.features-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}
.features-table tbody tr:last-child td {
  border-bottom: none;
}
.row-highlight td {
  color: #4ade80;
}
.level-cell {
  font-weight: 700;
  color: #f1f5f9 !important;
  text-align: center;
}
.muted {
  color: #334155;
}

/* Stat badges */
.fe-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(251, 146, 60, 0.1);
  color: #fb923c;
  border: 1px solid rgba(251, 146, 60, 0.3);
}
.ps-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
}

/* ── Panels ─────────────────────────────────────── */
.panels {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.panel {
  background: #12121f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
}
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: background 0.15s ease;
  user-select: none;
}
.panel-header:hover {
  background: rgba(255, 255, 255, 0.04);
}
.panel-header.open {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.panel-header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.panel-level-badge {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4ade80;
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}
.panel-features-preview {
  font-size: 0.85rem;
  color: #94a3b8;
}
.panel-chevron {
  color: #64748b;
  flex-shrink: 0;
}
.panel-body {
  padding: 1.25rem;
}

/* ── Feature cards ──────────────────────────────── */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}
.feature-card {
  background: #0e0e1a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1.25rem;
}
.feature-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(74, 222, 128, 0.2);
}
.feature-body {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.65;
}
.feature-body :deep(b) {
  color: #e2e8f0;
}

/* ── Subclass grid ──────────────────────────────── */
.subclass-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.subclass-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #0e0e1a;
  border: 1px solid rgba(74, 222, 128, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: #94a3b8;
}
.subclass-btn:hover {
  background: rgba(74, 222, 128, 0.06);
  border-color: #4ade80;
  color: #f1f5f9;
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #4ade80;
}

/* ── Mobile ─────────────────────────────────────── */
@media (max-width: 640px) {
  .hero {
    height: 300px;
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-overlay {
    padding: 1.5rem;
  }
  .trait-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
  .feature-cards {
    grid-template-columns: 1fr;
  }
}
</style>
