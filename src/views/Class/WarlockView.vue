<template>
  <div class="warlock-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/warlock.png" alt="Warlock" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Warlock</h1>
          <p class="hero-subtitle">
            A wielder of magic that is derived from a bargain with an
            extraplanar entity
          </p>
          <div class="hero-badges">
            <span class="badge badge-purple">High Complexity</span>
            <span class="badge badge-violet">Charisma</span>
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

      <!-- Becoming a Warlock -->
      <section class="section">
        <h2 class="section-title">Becoming a Warlock</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Warlock Traits table.</li>
              <li>
                Gain the Warlock's level 1 features listed in the Features
                table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>Gain the Hit Point Die and training with Light armor.</li>
              <li>
                Gain the Warlock's level 1 features. See the multiclassing rules
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
                <th>Invocations</th>
                <th>Cantrips</th>
                <th>Spells</th>
                <th>Spell Slots</th>
                <th>Slot Level</th>
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
                  <span class="inv-badge">{{ item.invocations }}</span>
                </td>
                <td class="text-center">{{ item.cantrips }}</td>
                <td class="text-center">{{ item.preparedSpells }}</td>
                <td class="text-center">
                  <span class="slot-badge">{{ item.spellSlots }}</span>
                </td>
                <td class="text-center">
                  <span class="lvl-badge">{{ item.slotLevel }}</span>
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
        { title: "Archfey Patron" },
        { title: "Celestial Patron" },
        { title: "Fiend Patron" },
        { title: "Great Old One Patron" },
      ],
      subclassIcons: [
        "mdi-flower",
        "mdi-white-balance-sunny",
        "mdi-fire",
        "mdi-eye-outline",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Charisma" },
        { label: "Hit Point Die", value: "D8 per Warlock level" },
        { label: "Saving Throw Proficiencies", value: "Wisdom and Charisma" },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 2: Arcana, Deception, History, Intimidation, Investigation, Nature, or Religion",
        },
        { label: "Weapon Proficiencies", value: "Simple weapons" },
        { label: "Armor Training", value: "Light armor" },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Leather Armor, Sickle, 2 Daggers, Arcane Focus (orb), Book (occult lore), Scholar's Pack, and 15 GP; or (B) 100 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Eldritch Invocations, Pact Magic",
          invocations: "1",
          cantrips: "2",
          preparedSpells: "2",
          spellSlots: "1",
          slotLevel: "1",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Magical Cunning",
          invocations: "3",
          cantrips: "2",
          preparedSpells: "3",
          spellSlots: "2",
          slotLevel: "1",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Warlock Subclass",
          invocations: "3",
          cantrips: "2",
          preparedSpells: "4",
          spellSlots: "2",
          slotLevel: "2",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          invocations: "3",
          cantrips: "3",
          preparedSpells: "5",
          spellSlots: "2",
          slotLevel: "2",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "—",
          invocations: "5",
          cantrips: "3",
          preparedSpells: "6",
          spellSlots: "2",
          slotLevel: "3",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Subclass Feature",
          invocations: "5",
          cantrips: "3",
          preparedSpells: "7",
          spellSlots: "2",
          slotLevel: "3",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "—",
          invocations: "6",
          cantrips: "3",
          preparedSpells: "8",
          spellSlots: "2",
          slotLevel: "4",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          invocations: "6",
          cantrips: "3",
          preparedSpells: "9",
          spellSlots: "2",
          slotLevel: "4",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Contact Patron",
          invocations: "7",
          cantrips: "3",
          preparedSpells: "10",
          spellSlots: "2",
          slotLevel: "5",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Subclass Feature",
          invocations: "7",
          cantrips: "4",
          preparedSpells: "10",
          spellSlots: "2",
          slotLevel: "5",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Mystic Arcanum (lv 6)",
          invocations: "7",
          cantrips: "4",
          preparedSpells: "11",
          spellSlots: "3",
          slotLevel: "5",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          invocations: "8",
          cantrips: "4",
          preparedSpells: "11",
          spellSlots: "3",
          slotLevel: "5",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Mystic Arcanum (lv 7)",
          invocations: "8",
          cantrips: "4",
          preparedSpells: "12",
          spellSlots: "3",
          slotLevel: "5",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Subclass Feature",
          invocations: "8",
          cantrips: "4",
          preparedSpells: "12",
          spellSlots: "3",
          slotLevel: "5",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Mystic Arcanum (lv 8)",
          invocations: "9",
          cantrips: "4",
          preparedSpells: "13",
          spellSlots: "3",
          slotLevel: "5",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          invocations: "9",
          cantrips: "4",
          preparedSpells: "13",
          spellSlots: "3",
          slotLevel: "5",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Mystic Arcanum (lv 9)",
          invocations: "9",
          cantrips: "4",
          preparedSpells: "14",
          spellSlots: "4",
          slotLevel: "5",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "—",
          invocations: "10",
          cantrips: "4",
          preparedSpells: "14",
          spellSlots: "4",
          slotLevel: "5",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          invocations: "10",
          cantrips: "4",
          preparedSpells: "15",
          spellSlots: "4",
          slotLevel: "5",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Eldritch Master",
          invocations: "10",
          cantrips: "4",
          preparedSpells: "15",
          spellSlots: "4",
          slotLevel: "5",
        },
      ],

      levelPanels: [
        {
          level: "Level 1",
          features: [
            {
              title: "Eldritch Invocations",
              body: `<p>You have unearthed pieces of forbidden knowledge that imbue you with abiding magical ability. You gain one invocation of your choice, such as Pact of the Tome.</p>
                     <br/>
                     <p>If an invocation has a prerequisite, you must meet it to learn it. Whenever you gain a Warlock level, you can replace one invocation with another you qualify for. You gain more invocations at higher levels as shown in the Invocations column.</p>`,
            },
            {
              title: "Pact Magic",
              body: `<p>Through occult ceremony, you have formed a pact with a mysterious entity. Charisma is your spellcasting ability and you can use an Arcane Focus as a Spellcasting Focus.</p>
                     <br/>
                     <p><b>Cantrips.</b> You know two Warlock cantrips of your choice. Eldritch Blast and Prestidigitation are recommended. You gain additional cantrips at levels 4 and 10.</p>
                     <br/>
                     <p><b>Pact Magic Slots.</b> All your Pact Magic spell slots share the same level, as shown in the Warlock Features table. You regain all expended Pact Magic spell slots when you finish a Short or Long Rest.</p>
                     <br/>
                     <p>For example, at level 5 you have two level 3 slots — casting a level 1 spell uses one of those slots and casts it at level 3.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Magical Cunning",
              body: `<p>You can perform an esoteric rite for 1 minute. At the end of it, you regain expended Pact Magic spell slots up to half your maximum (round up).</p>
                     <br/>
                     <p>Once you use this feature, you can't do so again until you finish a Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Warlock Subclass",
              body: `<p>You gain a Warlock subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Warlock level or lower. Choose your patron below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Warlock levels 8, 12, and 16.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen patron.</p>`,
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
              title: "Contact Patron",
              body: `<p>You always have the Contact Other Plane spell prepared. With this feature, you can cast it without expending a spell slot to contact your patron, and you automatically succeed on the spell's saving throw.</p>
                     <br/>
                     <p>Once you cast the spell this way, you can't do so again until you finish a Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 10",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen patron.</p>`,
            },
          ],
        },
        {
          level: "Level 11",
          features: [
            {
              title: "Mystic Arcanum (Level 6)",
              body: `<p>Your patron grants you a magical secret. Choose one level 6 Warlock spell as this arcanum. You can cast it once without expending a spell slot per Long Rest.</p>
                     <br/>
                     <p>You gain additional arcana at levels 13 (lv 7), 15 (lv 8), and 17 (lv 9). Whenever you gain a Warlock level, you can replace one arcanum with another Warlock spell of the same level.</p>`,
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
              title: "Mystic Arcanum (Level 7)",
              body: `<p>Your patron grants you another magical secret. Choose one level 7 Warlock spell. You can cast it once without a spell slot per Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 14",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen patron.</p>`,
            },
          ],
        },
        {
          level: "Level 15",
          features: [
            {
              title: "Mystic Arcanum (Level 8)",
              body: `<p>Your patron grants you another magical secret. Choose one level 8 Warlock spell. You can cast it once without a spell slot per Long Rest.</p>`,
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
              title: "Mystic Arcanum (Level 9)",
              body: `<p>Your patron grants you a final magical secret. Choose one level 9 Warlock spell. You can cast it once without a spell slot per Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 19",
          features: [
            {
              title: "Epic Boon",
              body: `<p>You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Fate is recommended.</p>`,
            },
          ],
        },
        {
          level: "Level 20",
          features: [
            {
              title: "Eldritch Master",
              body: `<p>When you use your Magical Cunning feature, you regain all your expended Pact Magic spell slots instead of only half.</p>`,
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
          "/wiki/classes/warlock/" + label.replace(/\s+/g, "_").toLowerCase(),
        )
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.warlock-page {
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
  color: #a855f7;
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
.badge-purple {
  background: rgba(168, 85, 247, 0.12);
  color: #f87171;
  border: 1px solid #f87171;
}
.badge-violet {
  background: rgba(139, 92, 246, 0.12);
  color: #8b5cf6;
  border: 1px solid #8b5cf6;
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
  border-bottom: 1px solid rgba(168, 85, 247, 0.3);
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
  color: #a855f7;
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
  color: #a855f7;
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
  background: rgba(168, 85, 247, 0.08);
}
.features-table th {
  padding: 0.75rem 0.6rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a855f7;
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
  min-width: 200px;
}
.features-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}
.features-table tbody tr:last-child td {
  border-bottom: none;
}
.row-highlight td {
  color: #a855f7;
}
.level-cell {
  font-weight: 700;
  color: #f1f5f9 !important;
  text-align: center;
}

/* Stat badges */
.inv-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  border: 1px solid rgba(139, 92, 246, 0.3);
}
.slot-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(168, 85, 247, 0.1);
  color: #a855f7;
  border: 1px solid rgba(168, 85, 247, 0.3);
}
.lvl-badge {
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
  color: #a855f7;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
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
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
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
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: #94a3b8;
}
.subclass-btn:hover {
  background: rgba(168, 85, 247, 0.06);
  border-color: #a855f7;
  color: #f1f5f9;
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #a855f7;
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
