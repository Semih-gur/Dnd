<template>
  <div class="wizard-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/wizard.png" alt="Wizard" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Wizard</h1>
          <p class="hero-subtitle">
            A scholarly magic-user capable of manipulating the structures of
            spellcasting
          </p>
          <div class="hero-badges">
            <span class="badge badge-blue">High Complexity</span>
            <span class="badge badge-cyan">Intelligence</span>
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

      <!-- Becoming a Wizard -->
      <section class="section">
        <h2 class="section-title">Becoming a Wizard</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Wizard Traits table.</li>
              <li>
                Gain the Wizard's level 1 features listed in the Features table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>Gain the Hit Point Die from the Core Wizard Traits table.</li>
              <li>
                Gain the Wizard's level 1 features. See the multiclassing rules
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
                <th>Cantrips</th>
                <th>Spells</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
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
                <td class="text-center">{{ item.cantrips }}</td>
                <td class="text-center">
                  <span class="ps-badge">{{ item.preparedSpells }}</span>
                </td>
                <td class="text-center">{{ item.slot1 }}</td>
                <td class="text-center">{{ item.slot2 }}</td>
                <td class="text-center">{{ item.slot3 }}</td>
                <td class="text-center">{{ item.slot4 }}</td>
                <td class="text-center">{{ item.slot5 }}</td>
                <td class="text-center">{{ item.slot6 }}</td>
                <td class="text-center">{{ item.slot7 }}</td>
                <td class="text-center">{{ item.slot8 }}</td>
                <td class="text-center">{{ item.slot9 }}</td>
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
        { title: "Abjurer" },
        { title: "Diviner" },
        { title: "Evoker" },
        { title: "Illusionist" },
      ],
      subclassIcons: [
        "mdi-shield-half-full",
        "mdi-eye",
        "mdi-lightning-bolt",
        "mdi-creation",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Intelligence" },
        { label: "Hit Point Die", value: "D6 per Wizard level" },
        {
          label: "Saving Throw Proficiencies",
          value: "Intelligence and Wisdom",
        },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 2: Arcana, History, Insight, Investigation, Medicine, Nature, or Religion",
        },
        { label: "Weapon Proficiencies", value: "Simple weapons" },
        { label: "Armor Training", value: "None" },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) 2 Daggers, Arcane Focus (Quarterstaff), Robe, Spellbook, Scholar's Pack, and 5 GP; or (B) 55 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Spellcasting, Ritual Adept, Arcane Recovery",
          cantrips: "3",
          preparedSpells: "4",
          slot1: "2",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Scholar",
          cantrips: "3",
          preparedSpells: "5",
          slot1: "3",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Wizard Subclass",
          cantrips: "3",
          preparedSpells: "6",
          slot1: "4",
          slot2: "2",
          slot3: "—",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          cantrips: "4",
          preparedSpells: "7",
          slot1: "4",
          slot2: "3",
          slot3: "—",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Memorize Spell",
          cantrips: "4",
          preparedSpells: "9",
          slot1: "4",
          slot2: "3",
          slot3: "2",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Subclass Feature",
          cantrips: "4",
          preparedSpells: "10",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "—",
          cantrips: "4",
          preparedSpells: "11",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "1",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          cantrips: "4",
          preparedSpells: "12",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "2",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "—",
          cantrips: "4",
          preparedSpells: "14",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "1",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Subclass Feature",
          cantrips: "5",
          preparedSpells: "15",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "—",
          cantrips: "5",
          preparedSpells: "16",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          cantrips: "5",
          preparedSpells: "16",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "—",
          cantrips: "5",
          preparedSpells: "17",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Subclass Feature",
          cantrips: "5",
          preparedSpells: "18",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "—",
          cantrips: "5",
          preparedSpells: "19",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "1",
          slot9: "—",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          cantrips: "5",
          preparedSpells: "21",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "1",
          slot9: "—",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "—",
          cantrips: "5",
          preparedSpells: "22",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "1",
          slot9: "1",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Spell Mastery",
          cantrips: "5",
          preparedSpells: "23",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "3",
          slot6: "1",
          slot7: "1",
          slot8: "1",
          slot9: "1",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          cantrips: "5",
          preparedSpells: "24",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "3",
          slot6: "2",
          slot7: "1",
          slot8: "1",
          slot9: "1",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Signature Spells",
          cantrips: "5",
          preparedSpells: "25",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "3",
          slot6: "2",
          slot7: "2",
          slot8: "1",
          slot9: "1",
        },
      ],

      levelPanels: [
        {
          level: "Level 1",
          features: [
            {
              title: "Spellcasting",
              body: `<p>Intelligence is your spellcasting ability for Wizard spells, and you can use an Arcane Focus or your spellbook as a Spellcasting Focus.</p>
                     <br/>
                     <p><b>Cantrips.</b> You know three Wizard cantrips of your choice. Light, Mage Hand, and Ray of Frost are recommended. You gain additional cantrips at levels 4 and 10.</p>
                     <br/>
                     <p><b>Spellbook.</b> Your spellbook starts with six level 1 Wizard spells of your choice. Detect Magic, Feather Fall, Mage Armor, Magic Missile, Sleep, and Thunderwave are recommended. You add two Wizard spells each time you gain a Wizard level after 1.</p>
                     <br/>
                     <p><b>Copying Spells.</b> You can copy a Wizard spell you find into your spellbook. Each spell level costs 2 hours and 50 GP to transcribe. Copying from your own book costs 1 hour and 10 GP per level.</p>`,
            },
            {
              title: "Ritual Adept",
              body: `<p>You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn't have the spell prepared, but you must read from the book to cast it this way.</p>`,
            },
            {
              title: "Arcane Recovery",
              body: `<p>When you finish a Short Rest, you can choose expended spell slots to recover. The combined level of recovered slots can't exceed half your Wizard level (round up), and none can be level 6 or higher.</p>
                     <br/>
                     <p>Once you use this feature, you can't do so again until you finish a Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Scholar",
              body: `<p>While studying magic, you also specialized in an academic field. Choose one skill in which you have proficiency from: Arcana, History, Investigation, Medicine, Nature, or Religion. You gain Expertise in the chosen skill.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Wizard Subclass",
              body: `<p>You gain a Wizard subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Wizard level or lower. Choose your arcane tradition below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Wizard levels 8, 12, and 16.</p>`,
            },
          ],
        },
        {
          level: "Level 5",
          features: [
            {
              title: "Memorize Spell",
              body: `<p>Whenever you finish a Short Rest, you can study your spellbook and replace one of the level 1+ Wizard spells you have prepared with another level 1+ spell from the book.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen arcane tradition.</p>`,
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
          level: "Level 10",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen arcane tradition.</p>`,
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
          level: "Level 14",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen arcane tradition.</p>`,
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
          level: "Level 18",
          features: [
            {
              title: "Spell Mastery",
              body: `<p>Choose one level 1 and one level 2 spell from your spellbook with a casting time of an Action. You always have those spells prepared and can cast them at their lowest level without expending a spell slot.</p>
                     <br/>
                     <p>To cast either spell at a higher level, you must expend a spell slot. Whenever you finish a Long Rest, you can study your spellbook and replace one of those spells with an eligible spell of the same level.</p>`,
            },
          ],
        },
        {
          level: "Level 19",
          features: [
            {
              title: "Epic Boon",
              body: `<p>You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Spell Recall is recommended.</p>`,
            },
          ],
        },
        {
          level: "Level 20",
          features: [
            {
              title: "Signature Spells",
              body: `<p>Choose two level 3 spells in your spellbook as your signature spells. You always have these prepared and can cast each once at level 3 without expending a spell slot per Short or Long Rest.</p>
                     <br/>
                     <p>To cast either spell at a higher level, you must expend a spell slot.</p>`,
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
          "/wiki/classes/wizard/" + label.replace(/\s+/g, "_").toLowerCase(),
        )
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.wizard-page {
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
  color: #38bdf8;
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
.badge-blue {
  background: rgba(56, 189, 248, 0.12);
  color: #f87171;
  border: 1px solid #f87171;
}
.badge-cyan {
  background: rgba(34, 211, 238, 0.12);
  color: #22d3ee;
  border: 1px solid #22d3ee;
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
  border-bottom: 1px solid rgba(56, 189, 248, 0.3);
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
  color: #38bdf8;
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
  color: #38bdf8;
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
  background: rgba(56, 189, 248, 0.07);
}
.features-table th {
  padding: 0.75rem 0.5rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #38bdf8;
  white-space: nowrap;
}
.features-table th:nth-child(3) {
  text-align: left;
}
.features-table td {
  padding: 0.6rem 0.5rem;
  color: var(--text-muted2);
  border-bottom: 1px solid var(--border-faint);
  text-align: center;
  white-space: nowrap;
}
.features-table td:nth-child(3) {
  text-align: left;
  min-width: 200px;
}
.features-table tbody tr:hover {
  background: var(--hover-bg);
}
.features-table tbody tr:last-child td {
  border-bottom: none;
}
.row-highlight td {
  color: #38bdf8;
}
.level-cell {
  font-weight: 700;
  color: var(--text-heading) !important;
  text-align: center;
}

.ps-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
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
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
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
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
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
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-muted);
}
.subclass-btn:hover {
  background: rgba(56, 189, 248, 0.06);
  border-color: #38bdf8;
  color: var(--text-heading);
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #38bdf8;
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

