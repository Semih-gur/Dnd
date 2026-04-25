<template>
  <div class="cleric-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/cleric.png" alt="Cleric" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Cleric</h1>
          <p class="hero-subtitle">
            A priestly champion who wields divine magic in service of a higher
            power
          </p>
          <div class="hero-badges">
            <span class="badge badge-orange">Medium Complexity</span>
            <span class="badge badge-purple">Wisdom</span>
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

      <!-- Becoming a Cleric -->
      <section class="section">
        <h2 class="section-title">Becoming a Cleric</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Cleric Traits table.</li>
              <li>
                Gain the Cleric's level 1 features listed in the Features table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>
                Gain the Hit Point Die and training with Light and Medium armor
                and Shields.
              </li>
              <li>
                Gain the Cleric's level 1 features. See the multiclassing rules
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
                <th>Cantrips</th>
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
                  <span class="cd-badge">{{ item.channelDivinity }}</span>
                </td>
                <td class="text-center">{{ item.cantrip }}</td>
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
                  <span>{{ sub.title }} Domain</span>
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
        { title: "Life" },
        { title: "Light" },
        { title: "Trickery" },
        { title: "War" },
      ],
      subclassIcons: [
        "mdi-heart-pulse",
        "mdi-white-balance-sunny",
        "mdi-drama-masks",
        "mdi-sword-cross",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Wisdom" },
        { label: "Hit Point Die", value: "D8 per Cleric level" },
        { label: "Saving Throw Proficiencies", value: "Wisdom and Charisma" },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 2: History, Insight, Medicine, Persuasion, or Religion",
        },
        { label: "Weapon Proficiencies", value: "Simple weapons" },
        {
          label: "Armor Training",
          value: "Light and Medium armor and Shields",
        },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Chain Shirt, Shield, Mace, Holy Symbol, Priest's Pack, and 7 GP; or (B) 110 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Spellcasting, Divine Order",
          channelDivinity: "2",
          cantrip: "3",
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
          feature: "Channel Divinity",
          channelDivinity: "2",
          cantrip: "3",
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
          feature: "Cleric Subclass",
          channelDivinity: "2",
          cantrip: "3",
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
          channelDivinity: "2",
          cantrip: "4",
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
          feature: "Sear Undead",
          channelDivinity: "2",
          cantrip: "4",
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
          channelDivinity: "3",
          cantrip: "4",
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
          feature: "Blessed Strikes",
          channelDivinity: "3",
          cantrip: "4",
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
          channelDivinity: "3",
          cantrip: "4",
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
          feature: "—",
          channelDivinity: "3",
          cantrip: "4",
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
          feature: "Divine Intervention",
          channelDivinity: "3",
          cantrip: "5",
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
          channelDivinity: "3",
          cantrip: "5",
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
          channelDivinity: "3",
          cantrip: "5",
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
          channelDivinity: "3",
          cantrip: "5",
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
          feature: "Improved Blessed Strikes",
          channelDivinity: "3",
          cantrip: "5",
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
          channelDivinity: "3",
          cantrip: "5",
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
          channelDivinity: "3",
          cantrip: "5",
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
          feature: "Subclass Feature",
          channelDivinity: "3",
          cantrip: "5",
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
          feature: "—",
          channelDivinity: "4",
          cantrip: "5",
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
          channelDivinity: "4",
          cantrip: "5",
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
          feature: "Greater Divine Intervention",
          channelDivinity: "4",
          cantrip: "5",
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
              title: "Spellcasting",
              body: `<p>You have learned to cast spells through prayer and meditation. Wisdom is your spellcasting ability and you can use a Holy Symbol as a Spellcasting Focus.</p>
                     <br/>
                     <p><b>Cantrips.</b> You know three cantrips of your choice from the Cleric spell list. Guidance, Sacred Flame, and Thaumaturgy are recommended. You gain more cantrips at levels 4 and 10.</p>
                     <br/>
                     <p><b>Prepared Spells.</b> Choose four level 1 spells from the Cleric spell list to start. Bless, Cure Wounds, Guiding Bolt, and Shield of Faith are recommended.</p>
                     <br/>
                     <p><b>Changing Your Prepared Spells.</b> Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.</p>`,
            },
            {
              title: "Divine Order",
              body: `<p>You have dedicated yourself to one of the following sacred roles of your choice.</p>
                     <br/>
                     <p><b>Protector.</b> Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.</p>
                     <br/>
                     <p><b>Thaumaturge.</b> You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks equal to your Wisdom modifier (minimum of +1).</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Channel Divinity",
              body: `<p>You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two effects: Divine Spark and Turn Undead. You gain additional effects from your subclass. You can use Channel Divinity twice, regaining one use on a Short Rest and all uses on a Long Rest.</p>
                     <br/>
                     <p><b>Divine Spark.</b> As a Magic action, point your Holy Symbol at a creature within 30 feet. Roll 1d8 + your Wisdom modifier. Either restore that many Hit Points to the creature, or force a Constitution save — on a fail, it takes Necrotic or Radiant damage equal to that total (half on a success). The die increases at levels 7 (2d8), 13 (3d8), and 18 (4d8).</p>
                     <br/>
                     <p><b>Turn Undead.</b> As a Magic action, present your Holy Symbol. Each Undead of your choice within 30 feet must make a Wisdom saving throw or have the Frightened and Incapacitated conditions for 1 minute, moving as far from you as possible each turn.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Cleric Subclass",
              body: `<p>You gain a Cleric subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Cleric level or lower. Choose your domain below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Cleric levels 8, 12, and 16.</p>`,
            },
          ],
        },
        {
          level: "Level 5",
          features: [
            {
              title: "Sear Undead",
              body: `<p>Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of 1d8) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll's total. This damage doesn't end the turn effect.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen domain.</p>`,
            },
          ],
        },
        {
          level: "Level 7",
          features: [
            {
              title: "Blessed Strikes",
              body: `<p>Divine power infuses you in battle. Choose one of the following options:</p>
                     <br/>
                     <p><b>Divine Strike.</b> Once on each of your turns when you hit a creature with a weapon attack, you can cause the target to take an extra 1d8 Necrotic or Radiant damage (your choice).</p>
                     <br/>
                     <p><b>Potent Spellcasting.</b> Add your Wisdom modifier to the damage you deal with any Cleric cantrip.</p>`,
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
              title: "Divine Intervention",
              body: `<p>As a Magic action, choose any Cleric spell of level 5 or lower that doesn't require a Reaction to cast. You cast that spell without expending a spell slot or needing Material components. You can't use this feature again until you finish a Long Rest.</p>`,
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
              title: "Improved Blessed Strikes",
              body: `<p>The option you chose for Blessed Strikes grows more powerful.</p>
                     <br/>
                     <p><b>Divine Strike.</b> The extra damage of your Divine Strike increases to 2d8.</p>
                     <br/>
                     <p><b>Potent Spellcasting.</b> When you cast a Cleric cantrip and deal damage to a creature with it, you can give vitality to yourself or another creature within 60 feet, granting Temporary Hit Points equal to twice your Wisdom modifier.</p>`,
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
              body: `<p>You gain a new feature from your chosen domain.</p>`,
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
              title: "Greater Divine Intervention",
              body: `<p>When you use your Divine Intervention feature, you can choose Wish when you select a spell. If you do so, you can't use Divine Intervention again until you finish 2d4 Long Rests.</p>`,
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
          "/wiki/classes/cleric/" + label.replace(/\s+/g, "_").toLowerCase(),
        )
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.cleric-page {
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
  color: #fbbf24;
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
.badge-orange {
  background: rgba(251, 146, 60, 0.12);
  color: #fb923c;
  border: 1px solid #fb923c;
}
.badge-purple {
  background: rgba(192, 132, 252, 0.12);
  color: #fbbf24;
  border: 1px solid #fbbf24;
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
  color: #fbbf24;
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
  background: rgba(192, 132, 252, 0.1);
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
  color: #fbbf24;
}
.level-cell {
  font-weight: 700;
  color: #f1f5f9 !important;
  text-align: center;
}

.cd-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
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
  color: #fbbf24;
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
  border-color: #fbbf24;
  color: #f1f5f9;
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
