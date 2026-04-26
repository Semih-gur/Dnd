<template>
  <div class="bard-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/bard.png" alt="Bard" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Bard</h1>
          <p class="hero-subtitle">
            An inspiring magician whose power echoes the music of creation
          </p>
          <div class="hero-badges">
            <span class="badge badge-orange">Medium Complexity</span>
            <span class="badge badge-purple">Charisma</span>
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

      <!-- Becoming a Bard -->
      <section class="section">
        <h2 class="section-title">Becoming a Bard</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Bard Traits table.</li>
              <li>
                Gain the Bard's level 1 features listed in the Features table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>
                Gain the Hit Point Die, proficiency in one skill of your choice,
                proficiency with one Musical Instrument, and training with Light
                armor.
              </li>
              <li>
                Gain the Bard's level 1 features. See the multiclassing rules to
                determine available spell slots.
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
                <th>Bardic Die</th>
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
                <td class="text-center">
                  <span class="die-badge">{{ item.bardic_die }}</span>
                </td>
                <td class="text-center">{{ item.cantrip }}</td>
                <td class="text-center">{{ item.spell }}</td>
                <td class="text-center">{{ item.first }}</td>
                <td class="text-center">{{ item.second }}</td>
                <td class="text-center">{{ item.third }}</td>
                <td class="text-center">{{ item.fourth }}</td>
                <td class="text-center">{{ item.fifth }}</td>
                <td class="text-center">{{ item.sixth }}</td>
                <td class="text-center">{{ item.seventh }}</td>
                <td class="text-center">{{ item.eight }}</td>
                <td class="text-center">{{ item.ninth }}</td>
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
                  <span>College of {{ sub.title }}</span>
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
        { title: "Dance" },
        { title: "Glamour" },
        { title: "Lore" },
        { title: "Valor" },
      ],
      subclassIcons: [
        "mdi-shoe-ballet",
        "mdi-shimmer",
        "mdi-book-open-page-variant",
        "mdi-sword",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Charisma" },
        { label: "Hit Point Die", value: "D8 per Bard level" },
        {
          label: "Saving Throw Proficiencies",
          value: "Dexterity and Charisma",
        },
        { label: "Skill Proficiencies", value: "Choose any 3 skills" },
        { label: "Tool Proficiencies", value: "Choose 3 Musical Instruments" },
        { label: "Weapon Proficiencies", value: "Simple weapons" },
        { label: "Armor Training", value: "Light armor" },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Leather Armor, 2 Daggers, Musical Instrument of your choice, Entertainer's Pack, and 19 GP; or (B) 90 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Bardic Inspiration, Spellcasting",
          bardic_die: "D6",
          cantrip: "2",
          spell: "4",
          first: "2",
          second: "-",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Expertise, Jack of All Trades",
          bardic_die: "D6",
          cantrip: "2",
          spell: "5",
          first: "3",
          second: "-",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Bard Subclass",
          bardic_die: "D6",
          cantrip: "2",
          spell: "6",
          first: "4",
          second: "2",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          bardic_die: "D6",
          cantrip: "3",
          spell: "7",
          first: "4",
          second: "3",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Font of Inspiration",
          bardic_die: "D8",
          cantrip: "3",
          spell: "8",
          first: "4",
          second: "3",
          third: "2",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Subclass Feature",
          bardic_die: "D8",
          cantrip: "3",
          spell: "9",
          first: "4",
          second: "3",
          third: "3",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Countercharm",
          bardic_die: "D8",
          cantrip: "3",
          spell: "10",
          first: "4",
          second: "3",
          third: "3",
          fourth: "1",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          bardic_die: "D8",
          cantrip: "3",
          spell: "11",
          first: "4",
          second: "3",
          third: "3",
          fourth: "2",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Expertise",
          bardic_die: "D8",
          cantrip: "3",
          spell: "12",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "1",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Magical Secrets",
          bardic_die: "D10",
          cantrip: "4",
          spell: "14",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "—",
          bardic_die: "D10",
          cantrip: "4",
          spell: "15",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          bardic_die: "D10",
          cantrip: "4",
          spell: "15",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "—",
          bardic_die: "D10",
          cantrip: "4",
          spell: "16",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "-",
          ninth: "-",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Subclass Feature",
          bardic_die: "D10",
          cantrip: "4",
          spell: "18",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "-",
          ninth: "-",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "—",
          bardic_die: "D12",
          cantrip: "4",
          spell: "19",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "-",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          bardic_die: "D12",
          cantrip: "4",
          spell: "19",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "-",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "—",
          bardic_die: "D12",
          cantrip: "4",
          spell: "20",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "1",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Superior Inspiration",
          bardic_die: "D12",
          cantrip: "4",
          spell: "22",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "3",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "1",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          bardic_die: "D12",
          cantrip: "4",
          spell: "22",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "3",
          sixth: "2",
          seventh: "1",
          eight: "1",
          ninth: "1",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Words of Creation",
          bardic_die: "D12",
          cantrip: "4",
          spell: "22",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "3",
          sixth: "2",
          seventh: "2",
          eight: "1",
          ninth: "1",
        },
      ],

      levelPanels: [
        {
          level: "Level 1",
          features: [
            {
              title: "Bardic Inspiration",
              body: `<p>You can supernaturally inspire others through words, music, or dance, represented by your Bardic Inspiration die (a d6).</p>
                     <br/>
                     <p><b>Using Bardic Inspiration.</b> As a Bonus Action, inspire a creature within 60 feet that can see or hear you. That creature gains one Bardic Inspiration die. Once within the next hour, when the creature fails a D20 Test, it can roll the die and add it to the d20, potentially turning a failure into a success. The die is expended when rolled.</p>
                     <br/>
                     <p><b>Number of Uses.</b> You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum once), regaining all uses on a Long Rest.</p>
                     <br/>
                     <p><b>At Higher Levels.</b> The die becomes a d8 at level 5, a d10 at level 10, and a d12 at level 15.</p>`,
            },
            {
              title: "Spellcasting",
              body: `<p>You have learned to cast spells through your bardic arts. Charisma is your spellcasting ability and you can use a Musical Instrument as a Spellcasting Focus.</p>
                     <br/>
                     <p><b>Cantrips.</b> You know two cantrips of your choice from the Bard spell list. Dancing Lights and Vicious Mockery are recommended. You gain more cantrips at levels 4 and 10.</p>
                     <br/>
                     <p><b>Prepared Spells.</b> Choose four level 1 spells from the Bard spell list to start. The number increases as you gain levels. Charm Person, Color Spray, Dissonant Whispers, and Healing Word are recommended.</p>
                     <br/>
                     <p><b>Changing Your Prepared Spells.</b> Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Expertise",
              body: `<p>You gain Expertise in two of your skill proficiencies of your choice. Performance and Persuasion are recommended. At Bard level 9, you gain Expertise in two more skills.</p>`,
            },
            {
              title: "Jack of All Trades",
              body: `<p>You can add half your Proficiency Bonus (round down) to any ability check you make that uses a skill proficiency you lack and that doesn't otherwise use your Proficiency Bonus.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Bard Subclass",
              body: `<p>You gain a Bard subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower. Choose your college below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, 16, and 19.</p>`,
            },
          ],
        },
        {
          level: "Level 5",
          features: [
            {
              title: "Font of Inspiration",
              body: `<p>You now regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest. In addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen college.</p>`,
            },
          ],
        },
        {
          level: "Level 7",
          features: [
            {
              title: "Countercharm",
              body: `<p>If you or a creature within 30 feet of you fails a saving throw against an effect that applies the Charmed or Frightened condition, you can take a Reaction to cause the save to be rerolled, and the new roll has Advantage.</p>`,
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
              body: `<p>You gain Expertise in two more of your skill proficiencies of your choice.</p>`,
            },
          ],
        },
        {
          level: "Level 10",
          features: [
            {
              title: "Magical Secrets",
              body: `<p>Whenever you reach a Bard level and the Prepared Spells number increases, you can choose any of your new prepared spells from the Bard, Cleric, Druid, and Wizard spell lists. The chosen spells count as Bard spells for you. Whenever you replace a prepared spell, you can replace it with a spell from those lists.</p>`,
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
              body: `<p>You gain a new feature from your chosen college.</p>`,
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
              title: "Superior Inspiration",
              body: `<p>When you roll Initiative, you regain expended uses of Bardic Inspiration until you have two if you have fewer than that.</p>`,
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
              title: "Words of Creation",
              body: `<p>You always have the Power Word: Heal and Power Word: Kill spells prepared. When you cast either spell, you can target a second creature with it if that creature is within 10 feet of the first target.</p>`,
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
        .push("/wiki/classes/bard/" + label.replace(/\s+/g, "_").toLowerCase())
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.bard-page {
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
  color: #fb923c;
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
.badge-orange {
  background: rgba(251, 146, 60, 0.12);
  color: #fb923c;
  border: 1px solid #fb923c;
}
.badge-purple {
  background: rgba(var(--accent-rgb), 0.12);
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
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.3);
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
  color: #fb923c;
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
  color: #fb923c;
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
  background: rgba(var(--accent-rgb), 0.1);
}
.features-table th {
  padding: 0.75rem 0.6rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fb923c;
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
  min-width: 200px;
}
.features-table tbody tr:hover {
  background: var(--hover-bg);
}
.features-table tbody tr:last-child td {
  border-bottom: none;
}
.row-highlight td {
  color: #fb923c;
}
.level-cell {
  font-weight: 700;
  color: var(--text-heading) !important;
  text-align: center;
}

.die-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(251, 146, 60, 0.1);
  color: #fb923c;
  border: 1px solid rgba(251, 146, 60, 0.3);
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
  color: #fb923c;
  background: rgba(var(--accent-rgb), 0.12);
  border: 1px solid rgba(var(--accent-rgb), 0.3);
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
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.2);
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
  border: 1px solid rgba(var(--accent-rgb), 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-muted);
}
.subclass-btn:hover {
  background: rgba(var(--accent-rgb), 0.08);
  border-color: #fb923c;
  color: var(--text-heading);
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #fb923c;
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

