<template>
  <div class="barbarian-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img
        src="../assets/classes/barbarian.png"
        alt="Barbarian"
        class="hero-img"
      />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Barbarian</h1>
          <p class="hero-subtitle">
            A fierce warrior of primitive background who can enter a battle rage
          </p>
          <div class="hero-badges">
            <span class="badge badge-green">Low Complexity</span>
            <span class="badge badge-purple">Strength · Constitution</span>
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

      <!-- Becoming a Barbarian -->
      <section class="section">
        <h2 class="section-title">Becoming a Barbarian</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Barbarian Traits table.</li>
              <li>
                Gain the Barbarian's level 1 features listed in the Features
                table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>
                Gain the Hit Point Die, proficiency with Martial weapons, and
                training with Shields.
              </li>
              <li>
                Gain the Barbarian's level 1 features listed in the Features
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
                <th>Rages</th>
                <th>Rage Damage</th>
                <th>Weapon Mastery</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in levels"
                :key="item.level"
                :class="{ 'row-highlight': item.feature.includes('Subclass') }"
              >
                <td class="text-center level-cell">{{ item.level }}</td>
                <td class="text-center">{{ item.profBonus }}</td>
                <td>{{ item.feature }}</td>
                <td class="text-center">{{ item.rages }}</td>
                <td class="text-center">{{ item.rageDamage }}</td>
                <td class="text-center">{{ item.weaponMastery }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Level Expansion Panels -->
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
                  <span>Path of the {{ sub.title }}</span>
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
        { title: "Berserker" },
        { title: "Wild Heart" },
        { title: "World Tree" },
        { title: "Zealot" },
      ],
      subclassIcons: [
        "mdi-emoticon-angry-outline",
        "mdi-paw",
        "mdi-tree",
        "mdi-cross",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Strength" },
        { label: "Hit Point Die", value: "D12 per Barbarian level" },
        {
          label: "Saving Throw Proficiencies",
          value: "Strength and Constitution",
        },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 2: Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival",
        },
        { label: "Weapon Proficiencies", value: "Simple and Martial weapons" },
        {
          label: "Armor Training",
          value: "Light and Medium armor and Shields",
        },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Greataxe, 4 Handaxes, Explorer's Pack, and 15 GP; or (B) 75 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Rage, Unarmored Defense, Weapon Mastery",
          rages: "2",
          rageDamage: "+2",
          weaponMastery: "2",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Danger Sense, Reckless Attack",
          rages: "2",
          rageDamage: "+2",
          weaponMastery: "2",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Barbarian Subclass, Primal Knowledge",
          rages: "3",
          rageDamage: "+2",
          weaponMastery: "2",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          rages: "3",
          rageDamage: "+2",
          weaponMastery: "3",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Extra Attack, Fast Movement",
          rages: "3",
          rageDamage: "+2",
          weaponMastery: "3",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Subclass Feature",
          rages: "4",
          rageDamage: "+3",
          weaponMastery: "3",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Feral Instinct, Instinctive Pounce",
          rages: "4",
          rageDamage: "+2",
          weaponMastery: "3",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          rages: "4",
          rageDamage: "+2",
          weaponMastery: "3",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Brutal Strike",
          rages: "4",
          rageDamage: "+3",
          weaponMastery: "3",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Subclass Feature",
          rages: "4",
          rageDamage: "+3",
          weaponMastery: "4",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Relentless Rage",
          rages: "4",
          rageDamage: "+3",
          weaponMastery: "4",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          rages: "5",
          rageDamage: "+3",
          weaponMastery: "4",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Improved Brutal Strike",
          rages: "5",
          rageDamage: "+3",
          weaponMastery: "4",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Subclass Feature",
          rages: "5",
          rageDamage: "+3",
          weaponMastery: "4",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Persistent Rage",
          rages: "5",
          rageDamage: "+3",
          weaponMastery: "4",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          rages: "5",
          rageDamage: "+4",
          weaponMastery: "4",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Improved Brutal Strike",
          rages: "6",
          rageDamage: "+4",
          weaponMastery: "4",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Indomitable Might",
          rages: "6",
          rageDamage: "+4",
          weaponMastery: "4",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          rages: "6",
          rageDamage: "+4",
          weaponMastery: "4",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Primal Champion",
          rages: "Unlimited",
          rageDamage: "+4",
          weaponMastery: "4",
        },
      ],

      levelPanels: [
        {
          level: "Level 1",
          features: [
            {
              title: "Rage",
              body: `<p>You can imbue yourself with a primal power called Rage as a Bonus Action if you aren't wearing Heavy armor.</p>
                     <br/>
                     <p><b>Damage Resistance.</b> You have Resistance to Bludgeoning, Piercing, and Slashing damage.</p>
                     <br/>
                     <p><b>Rage Damage.</b> When you make an attack using Strength and deal damage, you gain a bonus shown in the Rage Damage column.</p>
                     <br/>
                     <p><b>Strength Advantage.</b> You have Advantage on Strength checks and saving throws.</p>
                     <br/>
                     <p><b>No Concentration or Spells.</b> You can't maintain Concentration or cast spells.</p>
                     <br/>
                     <p><b>Duration.</b> The Rage lasts until the end of your next turn. Extend it each round by attacking an enemy, forcing a saving throw, or taking a Bonus Action to extend. Max 10 minutes.</p>`,
            },
            {
              title: "Unarmored Defense",
              body: `<p>While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.</p>`,
            },
            {
              title: "Weapon Mastery",
              body: `<p>Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Melee weapons of your choice. Whenever you finish a Long Rest, you can change one of those weapon choices.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Danger Sense",
              body: `<p>You have Advantage on Dexterity saving throws unless you have the Incapacitated condition.</p>`,
            },
            {
              title: "Reckless Attack",
              body: `<p>When you make your first attack roll on your turn, you can decide to attack recklessly. Doing so gives you Advantage on Strength attack rolls until the start of your next turn, but attack rolls against you also have Advantage.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Primal Knowledge",
              body: `<p>You gain proficiency in another skill from the Barbarian list. While Raging, you can make Strength checks for Acrobatics, Intimidation, Perception, Stealth, or Survival.</p>`,
            },
            {
              title: "Barbarian Subclass",
              body: `<p>You gain a Barbarian subclass of your choice. Choose your path below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at levels 8, 12, and 16.</p>`,
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
              title: "Fast Movement",
              body: `<p>Your speed increases by 10 feet while you aren't wearing Heavy armor.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 7",
          features: [
            {
              title: "Feral Instinct",
              body: `<p>You have Advantage on Initiative rolls.</p>`,
            },
            {
              title: "Instinctive Pounce",
              body: `<p>As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed.</p>`,
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
              title: "Brutal Strike",
              body: `<p>If you use Reckless Attack, you can forgo Advantage on one Strength-based attack roll. If it hits, the target takes an extra 1d10 damage and you can apply one Brutal Strike effect:</p>
                     <br/>
                     <p><b>Forceful Blow.</b> Push the target 15 feet away. You can then move up to half your Speed toward them without provoking Opportunity Attacks.</p>
                     <br/>
                     <p><b>Hamstring Blow.</b> The target's Speed is reduced by 15 feet until the start of your next turn.</p>`,
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
              title: "Relentless Rage",
              body: `<p>If you drop to 0 HP while Raging and don't die outright, make a DC 10 Constitution save. On success, your HP becomes twice your Barbarian level. Each subsequent use increases the DC by 5, resetting on a Short or Long Rest.</p>`,
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
              title: "Improved Brutal Strike",
              body: `<p><b>Staggering Blow.</b> The target has Disadvantage on its next saving throw and can't make Opportunity Attacks until your next turn.</p>
                     <br/>
                     <p><b>Sundering Blow.</b> The next attack roll against the target before your next turn gains a +5 bonus.</p>`,
            },
          ],
        },
        {
          level: "Level 14",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 15",
          features: [
            {
              title: "Persistent Rage",
              body: `<p>When you roll Initiative, you can regain all expended uses of Rage (once per Long Rest). Your Rage now lasts 10 minutes without extension actions, ending only if you are Unconscious or don Heavy armor.</p>`,
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
              title: "Improved Brutal Strike",
              body: `<p>The extra damage of your Brutal Strike increases to 2d10. You can also apply two different Brutal Strike effects whenever you use this feature.</p>`,
            },
          ],
        },
        {
          level: "Level 18",
          features: [
            {
              title: "Indomitable Might",
              body: `<p>If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total.</p>`,
            },
          ],
        },
        {
          level: "Level 19",
          features: [
            {
              title: "Epic Boon",
              body: `<p>You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Irresistible Offense is recommended.</p>`,
            },
          ],
        },
        {
          level: "Level 20",
          features: [
            {
              title: "Primal Champion",
              body: `<p>You embody primal power. Your Strength and Constitution scores increase by 4, to a maximum of 25.</p>`,
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
          "/wiki/classes/barbarian/" + label.replace(" ", "_").toLowerCase(),
        )
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.barbarian-page {
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
  color: #c084fc;
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
  background: rgba(163, 230, 53, 0.12);
  color: #a3e635;
  border: 1px solid #a3e635;
}
.badge-purple {
  background: rgba(192, 132, 252, 0.12);
  color: #c084fc;
  border: 1px solid #c084fc;
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
  border-bottom: 1px solid rgba(192, 132, 252, 0.3);
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
  color: #c084fc;
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
  color: #c084fc;
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
  font-size: 0.85rem;
}
.features-table thead tr {
  background: rgba(192, 132, 252, 0.1);
}
.features-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c084fc;
  white-space: nowrap;
}
.features-table td {
  padding: 0.6rem 1rem;
  color: #cbd5e1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.features-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}
.features-table tbody tr:last-child td {
  border-bottom: none;
}
.row-highlight td {
  color: #c084fc;
}
.level-cell {
  font-weight: 700;
  color: #f1f5f9 !important;
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
  color: #c084fc;
  background: rgba(192, 132, 252, 0.12);
  border: 1px solid rgba(192, 132, 252, 0.3);
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
  border-bottom: 1px solid rgba(192, 132, 252, 0.2);
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
  border: 1px solid rgba(192, 132, 252, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: #94a3b8;
}
.subclass-btn:hover {
  background: rgba(192, 132, 252, 0.08);
  border-color: #c084fc;
  color: #f1f5f9;
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #c084fc;
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
