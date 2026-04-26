<template>
  <div class="fighter-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/fighter.png" alt="Fighter" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Fighter</h1>
          <p class="hero-subtitle">
            A master of martial combat, skilled with a variety of weapons and
            armor
          </p>
          <div class="hero-badges">
            <span class="badge badge-red">Low Complexity</span>
            <span class="badge badge-orange">Strength or Dexterity</span>
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

      <!-- Becoming a Fighter -->
      <section class="section">
        <h2 class="section-title">Becoming a Fighter</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Fighter Traits table.</li>
              <li>
                Gain the Fighter's level 1 features listed in the Features
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
                Gain the Fighter's level 1 features listed in the Features
                table.
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
                <th>Second Wind</th>
                <th>Action Surge</th>
                <th>Weapon Mastery</th>
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
                  <span class="sw-badge">{{ item.secondWind }}</span>
                </td>
                <td class="text-center">
                  <span v-if="item.actionSurge !== '—'" class="as-badge">{{
                    item.actionSurge
                  }}</span>
                  <span v-else class="muted">—</span>
                </td>
                <td class="text-center">
                  <span class="wm-badge">{{ item.weaponMastery }}</span>
                </td>
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
              <!-- Subclass buttons for level 3 -->
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
        { title: "Battle Master" },
        { title: "Champion" },
        { title: "Eldritch Knight" },
        { title: "Psi Warrior" },
      ],
      subclassIcons: [
        "mdi-chess-knight",
        "mdi-shield-half-full",
        "mdi-hat-fedora",
        "mdi-brain",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Strength or Dexterity" },
        { label: "Hit Point Die", value: "D10 per Fighter level" },
        {
          label: "Saving Throw Proficiencies",
          value: "Strength and Constitution",
        },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 2: Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, Persuasion, or Survival",
        },
        { label: "Weapon Proficiencies", value: "Simple and Martial weapons" },
        {
          label: "Armor Training",
          value: "Light, Medium, and Heavy armor and Shields",
        },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer's Pack, and 4 GP; or (B) 155 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Fighting Style, Second Wind, Weapon Mastery",
          secondWind: "2",
          actionSurge: "—",
          weaponMastery: "3",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Action Surge, Tactical Mind",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "3",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Fighter Subclass",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "3",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Extra Attack, Tactical Shift",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Subclass Feature",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Indomitable, Tactical Master",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Subclass Feature",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Two Extra Attacks",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Studied Attacks",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Subclass Feature",
          secondWind: "3",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          secondWind: "3",
          actionSurge: "1",
          weaponMastery: "6",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Action Surge (2 uses)",
          secondWind: "3",
          actionSurge: "2",
          weaponMastery: "6",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Subclass Feature",
          secondWind: "3",
          actionSurge: "2",
          weaponMastery: "6",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          secondWind: "3",
          actionSurge: "2",
          weaponMastery: "6",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Three Extra Attacks",
          secondWind: "3",
          actionSurge: "2",
          weaponMastery: "6",
        },
      ],

      levelPanels: [
        {
          level: "Level 1",
          features: [
            {
              title: "Fighting Style",
              body: `<p>You have honed your martial prowess and gain a Fighting Style feat of your choice. Defense is recommended. Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat.</p>`,
            },
            {
              title: "Second Wind",
              body: `<p>As a Bonus Action, you can regain Hit Points equal to 1d10 plus your Fighter level.</p>
                     <br/>
                     <p>You can use this feature twice, regaining one use on a Short Rest and all uses on a Long Rest. You gain additional uses at higher Fighter levels as shown in the Second Wind column.</p>`,
            },
            {
              title: "Weapon Mastery",
              body: `<p>Your training with weapons allows you to use the mastery properties of three kinds of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.</p>
                     <br/>
                     <p>When you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Action Surge",
              body: `<p>On your turn, you can take one additional action, except the Magic action. Once you use this feature, you can't do so again until you finish a Short or Long Rest.</p>
                     <br/>
                     <p>Starting at level 17, you can use it twice before a rest, but only once on the same turn.</p>`,
            },
            {
              title: "Tactical Mind",
              body: `<p>When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Fighter Subclass",
              body: `<p>You gain a Fighter subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Fighter level or lower. Choose your specialization below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.</p>`,
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
              title: "Tactical Shift",
              body: `<p>Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attacks.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.</p>`,
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
              title: "Indomitable",
              body: `<p>If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.</p>
                     <br/>
                     <p>You can use this feature twice before a Long Rest starting at level 13, and three times before a Long Rest starting at level 17.</p>`,
            },
            {
              title: "Tactical Master",
              body: `<p>When you attack with a weapon whose mastery property you can use, you can replace that property with the Push, Sap, or Slow property for that attack.</p>`,
            },
          ],
        },
        {
          level: "Level 10",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 11",
          features: [
            {
              title: "Two Extra Attacks",
              body: `<p>You can attack three times instead of once whenever you take the Attack action on your turn.</p>`,
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
              title: "Studied Attacks",
              body: `<p>You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss, you have Advantage on your next attack roll against that creature before the end of your next turn.</p>`,
            },
          ],
        },
        {
          level: "Level 14",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.</p>`,
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
              title: "Action Surge (2 uses)",
              body: `<p>You can now use Action Surge twice before a rest, though still only once on the same turn.</p>`,
            },
          ],
        },
        {
          level: "Level 18",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 19",
          features: [
            {
              title: "Epic Boon",
              body: `<p>You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Combat Prowess is recommended.</p>`,
            },
          ],
        },
        {
          level: "Level 20",
          features: [
            {
              title: "Three Extra Attacks",
              body: `<p>You can attack four times instead of once whenever you take the Attack action on your turn.</p>`,
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
          "/wiki/classes/fighter/" + label.replace(/\s+/g, "_").toLowerCase(),
        )
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.fighter-page {
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
  color: #b45309;
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
.badge-red {
  background: rgba(248, 113, 113, 0.12);
  color: #a3e635;
  border: 1px solid #a3e635;
}
.badge-orange {
  background: rgba(251, 146, 60, 0.12);
  color: #fb923c;
  border: 1px solid #fb923c;
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
  border-bottom: 1px solid rgba(248, 113, 113, 0.3);
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
  color: #b45309;
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
  color: #b45309;
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
  background: rgba(248, 113, 113, 0.08);
}
.features-table th {
  padding: 0.75rem 0.6rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #b45309;
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
  color: #b45309;
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
.sw-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
}
.as-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(251, 146, 60, 0.1);
  color: #fb923c;
  border: 1px solid rgba(251, 146, 60, 0.3);
}
.wm-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(248, 113, 113, 0.1);
  color: #b45309;
  border: 1px solid rgba(248, 113, 113, 0.3);
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
  color: #b45309;
  background: rgba(248, 113, 113, 0.1);
  border: 1px solid rgba(248, 113, 113, 0.3);
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
  border-bottom: 1px solid rgba(248, 113, 113, 0.2);
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
  border: 1px solid rgba(248, 113, 113, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-muted);
}
.subclass-btn:hover {
  background: rgba(248, 113, 113, 0.06);
  border-color: #b45309;
  color: var(--text-heading);
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #b45309;
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

