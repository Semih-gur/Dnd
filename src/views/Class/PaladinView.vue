<template>
  <div class="paladin-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/paladin.png" alt="Paladin" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Paladin</h1>
          <p class="hero-subtitle">
            A holy warrior bound to a sacred oath, wielding divine magic and
            martial might
          </p>
          <div class="hero-badges">
            <span class="badge badge-gold">Low Complexity</span>
            <span class="badge badge-white">Strength & Charisma</span>
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

      <!-- Becoming a Paladin -->
      <section class="section">
        <h2 class="section-title">Becoming a Paladin</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Paladin Traits table.</li>
              <li>
                Gain the Paladin's level 1 features listed in the Features
                table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>
                Gain the Hit Point Die, proficiency with Martial weapons, and
                training with Light and Medium armor and Shields.
              </li>
              <li>
                Gain the Paladin's level 1 features. See the multiclassing rules
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
                <th>Channel Divinity</th>
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
                  <span v-if="item.channelDivinity !== '—'" class="cd-badge">{{
                    item.channelDivinity
                  }}</span>
                  <span v-else class="muted">—</span>
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
                  <span>Oath of {{ sub.title }}</span>
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
        { title: "Devotion" },
        { title: "Glory" },
        { title: "the Ancients" },
        { title: "Vengeance" },
      ],
      subclassIcons: [
        "mdi-star-four-points",
        "mdi-trophy",
        "mdi-leaf",
        "mdi-sword",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Strength and Charisma" },
        { label: "Hit Point Die", value: "D10 per Paladin level" },
        { label: "Saving Throw Proficiencies", value: "Wisdom and Charisma" },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 2: Athletics, Insight, Intimidation, Medicine, Persuasion, or Religion",
        },
        { label: "Weapon Proficiencies", value: "Simple and Martial weapons" },
        {
          label: "Armor Training",
          value: "Light, Medium, and Heavy armor and Shields",
        },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Chain Mail, Shield, Longsword, 6 Javelins, Holy Symbol, Priest's Pack, and 9 GP; or (B) 150 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Lay on Hands, Spellcasting, Weapon Mastery",
          channelDivinity: "—",
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
          feature: "Fighting Style, Paladin's Smite",
          channelDivinity: "—",
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
          feature: "Channel Divinity, Paladin Subclass",
          channelDivinity: "2",
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
          channelDivinity: "2",
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
          feature: "Extra Attack, Faithful Steed",
          channelDivinity: "2",
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
          feature: "Aura of Protection",
          channelDivinity: "2",
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
          channelDivinity: "2",
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
          channelDivinity: "2",
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
          feature: "Abjure Foes",
          channelDivinity: "2",
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
          feature: "Aura of Courage",
          channelDivinity: "2",
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
          feature: "Radiant Strikes",
          channelDivinity: "3",
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
          channelDivinity: "3",
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
          feature: "Spell Slot Increase",
          channelDivinity: "3",
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
          feature: "Restoring Touch",
          channelDivinity: "3",
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
          channelDivinity: "3",
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
          channelDivinity: "3",
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
          feature: "Spell Slot Increase",
          channelDivinity: "3",
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
          feature: "Aura Expansion",
          channelDivinity: "3",
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
          channelDivinity: "3",
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
          feature: "Subclass Feature",
          channelDivinity: "3",
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
              title: "Lay on Hands",
              body: `<p>Your blessed touch can heal wounds. You have a healing pool equal to five times your Paladin level, replenished on a Long Rest.</p>
                     <br/>
                     <p>As a Bonus Action, touch a creature and restore Hit Points up to the remaining pool amount. You can also expend 5 Hit Points from the pool to remove the Poisoned condition (those points don't also restore Hit Points).</p>`,
            },
            {
              title: "Spellcasting",
              body: `<p>Charisma is your spellcasting ability for Paladin spells, and you can use a Holy Symbol as a Spellcasting Focus.</p>
                     <br/>
                     <p>To start, choose two level 1 Paladin spells. Heroism and Searing Smite are recommended. Whenever you finish a Long Rest, you can replace one spell on your list with another Paladin spell for which you have spell slots.</p>`,
            },
            {
              title: "Weapon Mastery",
              body: `<p>Your training allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Longswords and Javelins. Whenever you finish a Long Rest, you can change the kinds of weapons you chose.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Fighting Style",
              body: `<p>You gain a Fighting Style feat of your choice. Alternatively, you can choose the Blessed Warrior option below.</p>
                     <br/>
                     <p><b>Blessed Warrior.</b> You learn two Cleric cantrips of your choice (Guidance and Sacred Flame are recommended). They count as Paladin spells, using Charisma as your spellcasting ability. You can replace one cantrip per Paladin level gained.</p>`,
            },
            {
              title: "Paladin's Smite",
              body: `<p>You always have the Divine Smite spell prepared. In addition, you can cast it once without expending a spell slot, regaining this ability when you finish a Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Channel Divinity",
              body: `<p>You can channel divine energy from the Outer Planes. You start with Divine Sense. Additional Channel Divinity options come from your subclass.</p>
                     <br/>
                     <p>You can use Channel Divinity twice, regaining one use on a Short Rest and all uses on a Long Rest. You gain an additional use at level 11.</p>
                     <br/>
                     <p><b>Divine Sense.</b> As a Bonus Action, open your awareness for 10 minutes. You know the location of any Celestial, Fiend, or Undead within 60 feet, and detect consecrated or desecrated places or objects in the same radius.</p>`,
            },
            {
              title: "Paladin Subclass",
              body: `<p>You gain a Paladin subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Paladin level or lower. Choose your sacred oath below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Paladin levels 8, 12, and 16.</p>`,
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
            {
              title: "Faithful Steed",
              body: `<p>You always have the Find Steed spell prepared. You can also cast it once without expending a spell slot, regaining this ability when you finish a Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Aura of Protection",
              body: `<p>You radiate a protective aura in a 10-foot Emanation (inactive while Incapacitated). You and allies in the aura gain a bonus to saving throws equal to your Charisma modifier (minimum +1).</p>
                     <br/>
                     <p>If multiple Paladins are present, a creature benefits from only one Aura of Protection at a time.</p>`,
            },
          ],
        },
        {
          level: "Level 7",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen oath.</p>`,
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
              title: "Abjure Foes",
              body: `<p>As a Magic action, expend one use of Channel Divinity to overwhelm foes with awe. Target a number of creatures equal to your Charisma modifier (minimum one) within 60 feet.</p>
                     <br/>
                     <p>Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute or until it takes damage. While Frightened this way, a target can do only one of the following on its turn: move, take an action, or take a Bonus Action.</p>`,
            },
          ],
        },
        {
          level: "Level 10",
          features: [
            {
              title: "Aura of Courage",
              body: `<p>You and your allies have Immunity to the Frightened condition while in your Aura of Protection. If a Frightened ally enters the aura, that condition has no effect while there.</p>`,
            },
          ],
        },
        {
          level: "Level 11",
          features: [
            {
              title: "Radiant Strikes",
              body: `<p>Your strikes carry supernatural power. When you hit a target with a Melee weapon or Unarmed Strike, the target takes an extra 1d8 Radiant damage.</p>`,
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
              title: "Spell Slot Increase",
              body: `<p>You gain access to 4th-level spell slots, increasing your magical power and the number of spells you can prepare.</p>`,
            },
          ],
        },
        {
          level: "Level 14",
          features: [
            {
              title: "Restoring Touch",
              body: `<p>When you use Lay On Hands on a creature, you can also remove one or more of the following conditions: Blinded, Charmed, Deafened, Frightened, Paralyzed, or Stunned. You must expend 5 Hit Points from the healing pool per condition removed (those points don't also restore Hit Points).</p>`,
            },
          ],
        },
        {
          level: "Level 15",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen oath.</p>`,
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
              title: "Spell Slot Increase",
              body: `<p>You gain access to 5th-level spell slots, unlocking the most powerful Paladin spells.</p>`,
            },
          ],
        },
        {
          level: "Level 18",
          features: [
            {
              title: "Aura Expansion",
              body: `<p>Your Aura of Protection is now a 30-foot Emanation.</p>`,
            },
          ],
        },
        {
          level: "Level 19",
          features: [
            {
              title: "Epic Boon",
              body: `<p>You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Truesight is recommended.</p>`,
            },
          ],
        },
        {
          level: "Level 20",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen oath.</p>`,
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
          "/wiki/classes/paladin/" + label.replace(/\s+/g, "_").toLowerCase(),
        )
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.paladin-page {
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-body);
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
    rgba(var(--bg-page-rgb), 0.2) 0%,
    rgba(var(--bg-page-rgb), 0.7) 60%,
    var(--bg-page) 100%
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
  color: #fbbf24;
}
.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0.25rem 0 0.5rem;
  line-height: 1;
}
.hero-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
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
.badge-gold {
  background: rgba(251, 191, 36, 0.12);
  color: #fb923c;
  border: 1px solid #fb923c;
}
.badge-white {
  background: rgba(248, 250, 252, 0.08);
  color: var(--text-primary);
  border: 1px solid rgba(248, 250, 252, 0.3);
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
  color: var(--text-heading);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(251, 191, 36, 0.3);
}

/* ── Core Traits ────────────────────────────────── */
.traits-grid {
  background: var(--bg-card);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
}
.trait-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid var(--border-faint);
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
  color: #fbbf24;
}
.trait-value {
  font-size: 0.9rem;
  color: var(--text-muted2);
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
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.25rem;
}
.becoming-heading {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fbbf24;
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
  color: var(--text-muted);
  line-height: 1.5;
}

/* ── Table ──────────────────────────────────────── */
.table-wrap {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
}
.features-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}
.features-table thead tr {
  background: rgba(251, 191, 36, 0.08);
}
.features-table th {
  padding: 0.75rem 0.6rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fbbf24;
  white-space: nowrap;
}
.features-table th:nth-child(3) {
  text-align: left;
}
.features-table td {
  padding: 0.6rem 0.6rem;
  color: var(--text-muted2);
  border-bottom: 1px solid var(--border-faint);
  text-align: center;
  white-space: nowrap;
}
.features-table td:nth-child(3) {
  text-align: left;
  min-width: 220px;
}
.features-table tbody tr:hover {
  background: var(--hover-bg);
}
.features-table tbody tr:last-child td {
  border-bottom: none;
}
.row-highlight td {
  color: #fbbf24;
}
.level-cell {
  font-weight: 700;
  color: var(--text-heading) !important;
  text-align: center;
}
.muted {
  color: var(--text-faint);
}

/* Stat badges */
.cd-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
}
.ps-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(251, 191, 36, 0.1);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

/* ── Panels ─────────────────────────────────────── */
.panels {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.panel {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
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
  background: var(--hover-bg);
}
.panel-header.open {
  border-bottom: 1px solid var(--border-subtle);
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
  color: #fbbf24;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.3);
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}
.panel-features-preview {
  font-size: 0.85rem;
  color: var(--text-muted);
}
.panel-chevron {
  color: var(--text-subtle);
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
  background: var(--bg-page);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 1.25rem;
}
.feature-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(251, 191, 36, 0.2);
}
.feature-body {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.65;
}
.feature-body :deep(b) {
  color: var(--text-body);
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
  background: var(--bg-page);
  border: 1px solid rgba(251, 191, 36, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-muted);
}
.subclass-btn:hover {
  background: rgba(251, 191, 36, 0.06);
  border-color: #fbbf24;
  color: var(--text-heading);
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #fbbf24;
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

