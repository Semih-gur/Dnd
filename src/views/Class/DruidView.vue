<template>
  <div class="druid-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/druid.png" alt="Druid" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Druid</h1>
          <p class="hero-subtitle">
            A priest of the Old Faith, wielding the powers of nature and
            adopting animal forms
          </p>
          <div class="hero-badges">
            <span class="badge badge-orange">High Complexity</span>
            <span class="badge badge-green">Wisdom</span>
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

      <!-- Becoming a Druid -->
      <section class="section">
        <h2 class="section-title">Becoming a Druid</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Druid Traits table.</li>
              <li>
                Gain the Druid's level 1 features listed in the Features table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>
                Gain the Hit Point Die and training with Light armor and
                Shields.
              </li>
              <li>
                Gain the Druid's level 1 features. See the multiclassing rules
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
                <th>Wild Shape</th>
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
                  <span class="ws-badge" v-if="item.wildShape !== '-'">{{
                    item.wildShape
                  }}</span>
                  <span v-else class="muted">—</span>
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
                  <span>Circle of the {{ sub.title }}</span>
                </div>
              </div>

              <!-- Wild Shape table for level 2 -->
              <div v-if="lvl.level === 'Level 2'" class="ws-table-wrap">
                <table class="ws-table">
                  <thead>
                    <tr>
                      <th>Druid Level</th>
                      <th>Known Forms</th>
                      <th>Max CR</th>
                      <th>Fly Speed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in wildshapeTable" :key="row.level">
                      <td class="text-center">{{ row.level }}</td>
                      <td class="text-center">{{ row.forms }}</td>
                      <td class="text-center">{{ row.cr }}</td>
                      <td class="text-center">
                        <span
                          :class="row.flySpeed === 'Yes' ? 'fly-yes' : 'fly-no'"
                        >
                          {{ row.flySpeed }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
        { title: "Land" },
        { title: "Moon" },
        { title: "Sea" },
        { title: "Stars" },
      ],
      subclassIcons: [
        "mdi-mountain",
        "mdi-moon-waning-crescent",
        "mdi-waves",
        "mdi-star-four-points",
      ],

      wildshapeTable: [
        { level: "2", forms: "4", cr: "1/4", flySpeed: "No" },
        { level: "4", forms: "6", cr: "1/2", flySpeed: "No" },
        { level: "8", forms: "8", cr: "1", flySpeed: "Yes" },
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Wisdom" },
        { label: "Hit Point Die", value: "D8 per Druid level" },
        {
          label: "Saving Throw Proficiencies",
          value: "Intelligence and Wisdom",
        },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 2: Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, or Survival",
        },
        { label: "Weapon Proficiencies", value: "Simple weapons" },
        { label: "Tool Proficiencies", value: "Herbalism Kit" },
        { label: "Armor Training", value: "Light armor and Shields" },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Leather Armor, Shield, Sickle, Druidic Focus (Quarterstaff), Explorer's Pack, Herbalism Kit, and 9 GP; or (B) 50 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Spellcasting, Druidic, Primal Order",
          wildShape: "-",
          cantrip: "2",
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
          feature: "Wild Shape, Wild Companion",
          wildShape: "2",
          cantrip: "2",
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
          feature: "Druid Subclass",
          wildShape: "2",
          cantrip: "2",
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
          wildShape: "2",
          cantrip: "3",
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
          feature: "Wild Resurgence",
          wildShape: "2",
          cantrip: "3",
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
          wildShape: "3",
          cantrip: "3",
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
          feature: "Elemental Fury",
          wildShape: "3",
          cantrip: "3",
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
          wildShape: "3",
          cantrip: "3",
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
          wildShape: "3",
          cantrip: "3",
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
          feature: "Subclass Feature",
          wildShape: "3",
          cantrip: "4",
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
          wildShape: "3",
          cantrip: "4",
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
          wildShape: "3",
          cantrip: "4",
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
          wildShape: "3",
          cantrip: "4",
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
          wildShape: "3",
          cantrip: "4",
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
          feature: "Improved Elemental Fury",
          wildShape: "3",
          cantrip: "4",
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
          wildShape: "3",
          cantrip: "4",
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
          wildShape: "4",
          cantrip: "4",
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
          feature: "Beast Spells",
          wildShape: "4",
          cantrip: "4",
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
          wildShape: "4",
          cantrip: "4",
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
          feature: "Archdruid",
          wildShape: "4",
          cantrip: "4",
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
              body: `<p>You cast spells through studying the mystical forces of nature. Wisdom is your spellcasting ability and you can use a Druidic Focus as a Spellcasting Focus.</p>
                     <br/>
                     <p><b>Cantrips.</b> You know two cantrips of your choice from the Druid spell list. Druidcraft and Produce Flame are recommended. You gain more cantrips at levels 4 and 10.</p>
                     <br/>
                     <p><b>Prepared Spells.</b> Choose four level 1 spells to start. Animal Friendship, Cure Wounds, Faerie Fire, and Thunderwave are recommended.</p>
                     <br/>
                     <p><b>Changing Your Prepared Spells.</b> Whenever you finish a Long Rest, you can replace any prepared spells with other Druid spells for which you have spell slots.</p>`,
            },
            {
              title: "Druidic",
              body: `<p>You know Druidic, the secret language of Druids. You always have the Speak with Animals spell prepared.</p>
                     <br/>
                     <p>You can use Druidic to leave hidden messages. You and others who know Druidic automatically spot such messages. Others spot them with a DC 15 Intelligence (Investigation) check but can't decipher them without magic.</p>`,
            },
            {
              title: "Primal Order",
              body: `<p>You have dedicated yourself to one of the following sacred roles of your choice.</p>
                     <br/>
                     <p><b>Magician.</b> You know one extra cantrip from the Druid spell list. Your mystical connection to nature gives you a bonus to Intelligence (Arcana or Nature) checks equal to your Wisdom modifier (minimum +1).</p>
                     <br/>
                     <p><b>Warden.</b> Trained for battle, you gain proficiency with Martial weapons and training with Medium armor.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Wild Shape",
              body: `<p>As a Bonus Action, you shape-shift into a Beast form you have learned. You stay in that form for hours equal to half your Druid level, or until you use Wild Shape again, become Incapacitated, or die. You can also leave early as a Bonus Action.</p>
                     <br/>
                     <p><b>Number of Uses.</b> You can use Wild Shape twice, regaining one use on a Short Rest and all uses on a Long Rest. Additional uses are gained at higher levels.</p>
                     <br/>
                     <p><b>Known Forms.</b> You know four Beast forms (max CR 1/4, no Fly Speed). The Rat, Riding Horse, Spider, and Wolf are recommended. You can replace one known form each Long Rest. The table above shows how your available forms expand as you level up.</p>
                     <br/>
                     <p><b>While Shape-Shifted.</b> You gain Temporary Hit Points equal to your Druid level. Your statistics are replaced by the Beast's stat block, but you retain your creature type, Hit Points, Hit Dice, mental ability scores, class features, languages, feats, and proficiencies. You cannot cast spells, though Concentration on already-cast spells is maintained.</p>`,
            },
            {
              title: "Wild Companion",
              body: `<p>As a Magic action, you can expend a spell slot or a use of Wild Shape to cast Find Familiar without Material components. The familiar is Fey and disappears when you finish a Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Druid Subclass",
              body: `<p>You gain a Druid subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Druid level or lower. Choose your circle below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Druid levels 8, 12, and 16.</p>`,
            },
          ],
        },
        {
          level: "Level 5",
          features: [
            {
              title: "Wild Resurgence",
              body: `<p>Once on each of your turns, if you have no uses of Wild Shape left, you can give yourself one use by expending a spell slot (no action required).</p>
                     <br/>
                     <p>In addition, you can expend one use of Wild Shape (no action required) to give yourself a level 1 spell slot, but you can't do so again until you finish a Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen circle.</p>`,
            },
          ],
        },
        {
          level: "Level 7",
          features: [
            {
              title: "Elemental Fury",
              body: `<p>The might of the elements flows through you. Choose one of the following options:</p>
                     <br/>
                     <p><b>Potent Spellcasting.</b> Add your Wisdom modifier to the damage you deal with any Druid cantrip.</p>
                     <br/>
                     <p><b>Primal Strike.</b> Once on each of your turns when you hit a creature with a weapon or a Beast form's attack in Wild Shape, you can cause the target to take an extra 1d8 Cold, Fire, Lightning, or Thunder damage (choose when you hit).</p>`,
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
              body: `<p>You gain a new feature from your chosen circle.</p>`,
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
              body: `<p>You gain a new feature from your chosen circle.</p>`,
            },
          ],
        },
        {
          level: "Level 15",
          features: [
            {
              title: "Improved Elemental Fury",
              body: `<p>The option you chose for Elemental Fury grows more powerful.</p>
                     <br/>
                     <p><b>Potent Spellcasting.</b> When you cast a Druid cantrip with a range of 10 feet or greater, the spell's range increases by 300 feet.</p>
                     <br/>
                     <p><b>Primal Strike.</b> The extra damage of your Primal Strike increases to 2d8.</p>`,
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
              title: "Beast Spells",
              body: `<p>While using Wild Shape, you can cast spells in Beast form, except for any spell that has a Material component with a cost specified or that consumes its Material component.</p>`,
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
              title: "Archdruid",
              body: `<p>The vitality of nature constantly blooms within you, granting the following benefits:</p>
                     <br/>
                     <p><b>Evergreen Wild Shape.</b> Whenever you roll Initiative and have no uses of Wild Shape left, you regain one expended use of it.</p>
                     <br/>
                     <p><b>Nature Magician.</b> You can convert uses of Wild Shape into a spell slot (no action required). Each use contributes 2 spell levels. For example, two uses produce a level 4 spell slot. Once used, you can't do so again until you finish a Long Rest.</p>
                     <br/>
                     <p><b>Longevity.</b> For every ten years that pass, your body ages only one year.</p>`,
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
        .push("/wiki/classes/druid/" + label.replace(/\s+/g, "_").toLowerCase())
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.druid-page {
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
.badge-orange {
  background: rgba(251, 146, 60, 0.12);
  color: #f87171;
  border: 1px solid #f87171;
}
.badge-green {
  background: rgba(163, 230, 53, 0.12);
  color: #a3e635;
  border: 1px solid #a3e635;
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
  border-bottom: 1px solid rgba(163, 230, 53, 0.3);
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
  color: #a3e635;
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
  color: #a3e635;
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
  background: rgba(163, 230, 53, 0.08);
}
.features-table th {
  padding: 0.75rem 0.6rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a3e635;
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
  color: #a3e635;
}
.level-cell {
  font-weight: 700;
  color: #f1f5f9 !important;
  text-align: center;
}
.muted {
  color: #334155;
}

.ws-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(163, 230, 53, 0.1);
  color: #a3e635;
  border: 1px solid rgba(163, 230, 53, 0.3);
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
  color: #a3e635;
  background: rgba(163, 230, 53, 0.1);
  border: 1px solid rgba(163, 230, 53, 0.3);
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
  border-bottom: 1px solid rgba(163, 230, 53, 0.2);
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
  border: 1px solid rgba(163, 230, 53, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: #94a3b8;
}
.subclass-btn:hover {
  background: rgba(163, 230, 53, 0.06);
  border-color: #a3e635;
  color: #f1f5f9;
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #a3e635;
}

/* ── Wild Shape mini table ──────────────────────── */
.ws-table-wrap {
  margin-bottom: 1.25rem;
  border-radius: 10px;
  border: 1px solid rgba(163, 230, 53, 0.15);
  overflow: hidden;
}
.ws-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}
.ws-table thead tr {
  background: rgba(163, 230, 53, 0.08);
}
.ws-table th {
  padding: 0.6rem 1rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a3e635;
}
.ws-table td {
  padding: 0.55rem 1rem;
  text-align: center;
  color: #94a3b8;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.ws-table tbody tr:last-child td {
  border-bottom: none;
}
.fly-yes {
  color: #a3e635;
  font-weight: 700;
}
.fly-no {
  color: #475569;
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
