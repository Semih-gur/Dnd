<template>
  <div class="rogue-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/rogue.png" alt="Rogue" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Rogue</h1>
          <p class="hero-subtitle">
            A scoundrel who uses stealth and trickery to overcome obstacles and
            enemies
          </p>
          <div class="hero-badges">
            <span class="badge badge-slate">Low Complexity</span>
            <span class="badge badge-yellow">Dexterity</span>
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

      <!-- Becoming a Rogue -->
      <section class="section">
        <h2 class="section-title">Becoming a Rogue</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Rogue Traits table.</li>
              <li>
                Gain the Rogue's level 1 features listed in the Features table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>
                Gain the Hit Point Die, proficiency in one skill from the
                Rogue's list, proficiency with Thieves' Tools, and training with
                Light armor.
              </li>
              <li>
                Gain the Rogue's level 1 features listed in the Features table.
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
                <th>Sneak Attack</th>
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
                  <span class="sa-badge">{{ item.sneakAttack }}</span>
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
        { title: "Arcane Trickster" },
        { title: "Assassin" },
        { title: "Soulknife" },
        { title: "Thief" },
      ],
      subclassIcons: [
        "mdi-hat-fedora",
        "mdi-skull",
        "mdi-brain",
        "mdi-drama-masks",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Dexterity" },
        { label: "Hit Point Die", value: "D8 per Rogue level" },
        {
          label: "Saving Throw Proficiencies",
          value: "Dexterity and Intelligence",
        },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 4: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Persuasion, Sleight of Hand, or Stealth",
        },
        {
          label: "Weapon Proficiencies",
          value:
            "Simple weapons and Martial weapons with the Finesse or Light property",
        },
        { label: "Tool Proficiencies", value: "Thieves' Tools" },
        { label: "Armor Training", value: "Light armor" },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves' Tools, Burglar's Pack, and 8 GP; or (B) 100 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Expertise, Sneak Attack, Thieves' Cant, Weapon Mastery",
          sneakAttack: "1d6",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Cunning Action",
          sneakAttack: "1d6",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Rogue Subclass, Steady Aim",
          sneakAttack: "2d6",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          sneakAttack: "2d6",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Cunning Strike, Uncanny Dodge",
          sneakAttack: "3d6",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Expertise",
          sneakAttack: "3d6",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Evasion, Reliable Talent",
          sneakAttack: "4d6",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          sneakAttack: "4d6",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Subclass Feature",
          sneakAttack: "5d6",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          sneakAttack: "5d6",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Improved Cunning Strike",
          sneakAttack: "6d6",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          sneakAttack: "6d6",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Subclass Feature",
          sneakAttack: "7d6",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Devious Strikes",
          sneakAttack: "7d6",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Slippery Mind",
          sneakAttack: "8d6",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          sneakAttack: "8d6",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Subclass Feature",
          sneakAttack: "9d6",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Elusive",
          sneakAttack: "9d6",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          sneakAttack: "10d6",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Stroke of Luck",
          sneakAttack: "10d6",
        },
      ],

      levelPanels: [
        {
          level: "Level 1",
          features: [
            {
              title: "Expertise",
              body: `<p>You gain Expertise in two of your skill proficiencies of your choice. Sleight of Hand and Stealth are recommended.</p>
                     <br/>
                     <p>At Rogue level 6, you gain Expertise in two more of your skill proficiencies of your choice.</p>`,
            },
            {
              title: "Sneak Attack",
              body: `<p>Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or Ranged weapon. The extra damage type matches the weapon's type.</p>
                     <br/>
                     <p>You don't need Advantage if at least one ally is within 5 feet of the target (not Incapacitated) and you don't have Disadvantage on the roll.</p>
                     <br/>
                     <p>The extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column.</p>`,
            },
            {
              title: "Thieves' Cant",
              body: `<p>You know Thieves' Cant and one other language of your choice, picked up from the communities where you plied your roguish talents.</p>`,
            },
            {
              title: "Weapon Mastery",
              body: `<p>Your training allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Daggers and Shortbows. Whenever you finish a Long Rest, you can change the kinds of weapons you chose.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Cunning Action",
              body: `<p>Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following actions as a Bonus Action: Dash, Disengage, or Hide.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Rogue Subclass",
              body: `<p>You gain a Rogue subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower. Choose your specialization below:</p>`,
            },
            {
              title: "Steady Aim",
              body: `<p>As a Bonus Action, you give yourself Advantage on your next attack roll on the current turn. You can use this feature only if you haven't moved during this turn, and after you use it, your Speed is 0 until the end of the current turn.</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Rogue levels 8, 10, 12, and 16.</p>`,
            },
          ],
        },
        {
          level: "Level 5",
          features: [
            {
              title: "Cunning Strike",
              body: `<p>When you deal Sneak Attack damage, you can add one of the following effects by forgoing the listed number of Sneak Attack dice. Save DC = 8 + your Dexterity modifier + Proficiency Bonus.</p>
                     <br/>
                     <p><b>Poison (Cost: 1d6).</b> The target makes a Constitution save or has the Poisoned condition for 1 minute. Requires a Poisoner's Kit on your person.</p>
                     <br/>
                     <p><b>Trip (Cost: 1d6).</b> If the target is Large or smaller, it must succeed on a Dexterity save or have the Prone condition.</p>
                     <br/>
                     <p><b>Withdraw (Cost: 1d6).</b> Immediately after the attack, you move up to half your Speed without provoking Opportunity Attacks.</p>`,
            },
            {
              title: "Uncanny Dodge",
              body: `<p>When an attacker you can see hits you with an attack roll, you can use your Reaction to halve the attack's damage against you (round down).</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Expertise",
              body: `<p>You gain Expertise in two more of your skill proficiencies of your choice.</p>`,
            },
          ],
        },
        {
          level: "Level 7",
          features: [
            {
              title: "Evasion",
              body: `<p>When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage on a success and only half damage on a failure.</p>
                     <br/>
                     <p>You can't use this feature if you have the Incapacitated condition.</p>`,
            },
            {
              title: "Reliable Talent",
              body: `<p>Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a d20 roll of 9 or lower as a 10.</p>`,
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
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 10",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.</p>`,
            },
          ],
        },
        {
          level: "Level 11",
          features: [
            {
              title: "Improved Cunning Strike",
              body: `<p>You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each effect.</p>`,
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
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 14",
          features: [
            {
              title: "Devious Strikes",
              body: `<p>You've practiced new ways to use your Sneak Attack deviously. The following effects are added to your Cunning Strike options.</p>
                     <br/>
                     <p><b>Daze (Cost: 2d6).</b> The target must succeed on a Constitution save, or on its next turn it can do only one of the following: move, take an action, or take a Bonus Action.</p>
                     <br/>
                     <p><b>Knock Out (Cost: 6d6).</b> The target must succeed on a Constitution save, or it has the Unconscious condition for 1 minute or until it takes any damage. The target can repeat the save at the end of each of its turns.</p>
                     <br/>
                     <p><b>Obscure (Cost: 3d6).</b> The target must succeed on a Dexterity save, or it has the Blinded condition until the end of its next turn.</p>`,
            },
          ],
        },
        {
          level: "Level 15",
          features: [
            {
              title: "Slippery Mind",
              body: `<p>Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving throws.</p>`,
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
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen subclass.</p>`,
            },
          ],
        },
        {
          level: "Level 18",
          features: [
            {
              title: "Elusive",
              body: `<p>You are so evasive that attackers rarely gain the upper hand. No attack roll can have Advantage against you unless you have the Incapacitated condition.</p>`,
            },
          ],
        },
        {
          level: "Level 19",
          features: [
            {
              title: "Epic Boon",
              body: `<p>You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of the Night Spirit is recommended.</p>`,
            },
          ],
        },
        {
          level: "Level 20",
          features: [
            {
              title: "Stroke of Luck",
              body: `<p>If you fail a d20 Test, you can turn the roll into a 20. Once you use this feature, you can't use it again until you finish a Short Rest or a Long Rest.</p>`,
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
        .push("/wiki/classes/rogue/" + label.replace(/\s+/g, "_").toLowerCase())
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.rogue-page {
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
  color: #facc15;
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
.badge-slate {
  background: rgba(100, 116, 139, 0.15);
  color: #a3e635;
  border: 1px solid #a3e635;
}
.badge-yellow {
  background: rgba(250, 204, 21, 0.12);
  color: #facc15;
  border: 1px solid #facc15;
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
  border-bottom: 1px solid rgba(250, 204, 21, 0.3);
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
  color: #facc15;
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
  color: #facc15;
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
  background: rgba(250, 204, 21, 0.06);
}
.features-table th {
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #facc15;
  white-space: nowrap;
}
.features-table th:nth-child(3) {
  text-align: left;
}
.features-table td {
  padding: 0.65rem 1rem;
  color: var(--text-muted2);
  border-bottom: 1px solid var(--border-faint);
  text-align: center;
  white-space: nowrap;
}
.features-table td:nth-child(3) {
  text-align: left;
  min-width: 280px;
}
.features-table tbody tr:hover {
  background: var(--hover-bg);
}
.features-table tbody tr:last-child td {
  border-bottom: none;
}
.row-highlight td {
  color: #facc15;
}
.level-cell {
  font-weight: 700;
  color: var(--text-heading) !important;
  text-align: center;
}

/* Sneak Attack badge */
.sa-badge {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 999px;
  background: rgba(250, 204, 21, 0.1);
  color: #facc15;
  border: 1px solid rgba(250, 204, 21, 0.35);
  font-family: monospace;
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
  color: #facc15;
  background: rgba(250, 204, 21, 0.1);
  border: 1px solid rgba(250, 204, 21, 0.3);
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
  border-bottom: 1px solid rgba(250, 204, 21, 0.2);
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
  border: 1px solid rgba(250, 204, 21, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-muted);
}
.subclass-btn:hover {
  background: rgba(250, 204, 21, 0.06);
  border-color: #facc15;
  color: var(--text-heading);
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #facc15;
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

