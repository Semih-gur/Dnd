<template>
  <div class="monk-page">
    <!-- Hero Banner -->
    <div class="hero">
      <img src="../assets/classes/monk.png" alt="Monk" class="hero-img" />
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="hero-eyebrow">Class</span>
          <h1 class="hero-title">Monk</h1>
          <p class="hero-subtitle">
            A master of martial arts, harnessing the power of the body in
            pursuit of physical and spiritual perfection
          </p>
          <div class="hero-badges">
            <span class="badge badge-blue">Medium Complexity</span>
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

      <!-- Becoming a Monk -->
      <section class="section">
        <h2 class="section-title">Becoming a Monk</h2>
        <div class="becoming-grid">
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Level 1 Character</h3>
            <ul class="becoming-list">
              <li>Gain all the traits in the Core Monk Traits table.</li>
              <li>
                Gain the Monk's level 1 features listed in the Features table.
              </li>
            </ul>
          </div>
          <div class="becoming-card">
            <h3 class="becoming-heading">As a Multiclass Character</h3>
            <ul class="becoming-list">
              <li>Gain the Hit Point Die.</li>
              <li>
                Gain the Monk's level 1 features listed in the Features table.
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
                <th>Focus Points</th>
                <th>Martial Arts Die</th>
                <th>Unarmored Movement</th>
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
                  <span v-if="item.focusPoints !== '—'" class="fp-badge">{{
                    item.focusPoints
                  }}</span>
                  <span v-else class="muted">—</span>
                </td>
                <td class="text-center">
                  <span class="ma-badge">{{ item.martialArtsDie }}</span>
                </td>
                <td class="text-center">
                  <span class="mv-badge">{{ item.unarmoredMovement }}</span>
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
                  <span>Warrior of {{ sub.title }}</span>
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
        { title: "Mercy" },
        { title: "Shadow" },
        { title: "the Elements" },
        { title: "the Open Hand" },
      ],
      subclassIcons: [
        "mdi-hand-heart",
        "mdi-weather-night",
        "mdi-weather-tornado",
        "mdi-hand-back-right",
      ],

      coreTraits: [
        { label: "Primary Ability", value: "Dexterity and Wisdom" },
        { label: "Hit Point Die", value: "D8 per Monk level" },
        {
          label: "Saving Throw Proficiencies",
          value: "Strength and Dexterity",
        },
        {
          label: "Skill Proficiencies",
          value:
            "Choose 2: Acrobatics, Athletics, History, Insight, Religion, or Stealth",
        },
        {
          label: "Weapon Proficiencies",
          value: "Simple weapons and Martial weapons with the Light property",
        },
        {
          label: "Tool Proficiencies",
          value: "Choose one type of Artisan's Tools or Musical Instrument",
        },
        { label: "Armor Training", value: "None" },
        {
          label: "Starting Equipment",
          value:
            "Choose A or B: (A) Spear, 5 Daggers, Artisan's Tools or Musical Instrument, Explorer's Pack, and 11 GP; or (B) 50 GP",
        },
      ],

      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Martial Arts, Unarmored Defense",
          focusPoints: "—",
          martialArtsDie: "1d6",
          unarmoredMovement: "+0 ft.",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Monk's Focus, Unarmored Movement, Uncanny Metabolism",
          focusPoints: "2",
          martialArtsDie: "1d6",
          unarmoredMovement: "+10 ft.",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Deflect Attacks, Monk Subclass",
          focusPoints: "3",
          martialArtsDie: "1d6",
          unarmoredMovement: "+10 ft.",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement, Slow Fall",
          focusPoints: "4",
          martialArtsDie: "1d6",
          unarmoredMovement: "+10 ft.",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Extra Attack, Stunning Strike",
          focusPoints: "5",
          martialArtsDie: "1d8",
          unarmoredMovement: "+10 ft.",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Empowered Strikes, Subclass Feature",
          focusPoints: "6",
          martialArtsDie: "1d8",
          unarmoredMovement: "+15 ft.",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Evasion",
          focusPoints: "7",
          martialArtsDie: "1d8",
          unarmoredMovement: "+15 ft.",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          focusPoints: "8",
          martialArtsDie: "1d8",
          unarmoredMovement: "+15 ft.",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Acrobatic Movement",
          focusPoints: "9",
          martialArtsDie: "1d8",
          unarmoredMovement: "+15 ft.",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Heightened Focus, Self-Restoration, Subclass Feature",
          focusPoints: "10",
          martialArtsDie: "1d8",
          unarmoredMovement: "+20 ft.",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Subclass Feature",
          focusPoints: "11",
          martialArtsDie: "1d10",
          unarmoredMovement: "+20 ft.",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          focusPoints: "12",
          martialArtsDie: "1d10",
          unarmoredMovement: "+20 ft.",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Deflect Energy",
          focusPoints: "13",
          martialArtsDie: "1d10",
          unarmoredMovement: "+20 ft.",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          focusPoints: "14",
          martialArtsDie: "1d10",
          unarmoredMovement: "+25 ft.",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Perfect Focus",
          focusPoints: "15",
          martialArtsDie: "1d10",
          unarmoredMovement: "+25 ft.",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          focusPoints: "16",
          martialArtsDie: "1d10",
          unarmoredMovement: "+25 ft.",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Subclass Feature",
          focusPoints: "17",
          martialArtsDie: "1d12",
          unarmoredMovement: "+25 ft.",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Superior Defense",
          focusPoints: "18",
          martialArtsDie: "1d12",
          unarmoredMovement: "+30 ft.",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          focusPoints: "19",
          martialArtsDie: "1d12",
          unarmoredMovement: "+30 ft.",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Body and Mind",
          focusPoints: "20",
          martialArtsDie: "1d12",
          unarmoredMovement: "+30 ft.",
        },
      ],

      levelPanels: [
        {
          level: "Level 1",
          features: [
            {
              title: "Martial Arts",
              body: `<p>Your practice of martial arts gives you mastery of combat styles using Unarmed Strikes and Monk Weapons (Simple Melee weapons and Martial Melee weapons with the Light property). You gain the following benefits while unarmed or wielding only Monk Weapons and not wearing armor or a Shield.</p>
                     <br/>
                     <p><b>Bonus Unarmed Strike.</b> You can make one Unarmed Strike as a Bonus Action.</p>
                     <br/>
                     <p><b>Dexterous Attacks.</b> You can use your Dexterity modifier instead of Strength for the attack and damage rolls of your Unarmed Strikes and Monk Weapons. You can also use Dexterity for Grapple or Shove save DCs.</p>
                     <br/>
                     <p><b>Martial Arts Die.</b> You can roll 1d6 in place of the normal damage of your Unarmed Strike or Monk Weapons. This die improves as you gain Monk levels, shown in the Martial Arts Die column.</p>`,
            },
            {
              title: "Unarmored Defense",
              body: `<p>While you aren't wearing armor or wielding a Shield, your base Armor Class equals 10 plus your Dexterity and Wisdom modifiers.</p>`,
            },
          ],
        },
        {
          level: "Level 2",
          features: [
            {
              title: "Monk's Focus",
              body: `<p>You harness a well of extraordinary energy represented by Focus Points. Your Monk level determines how many you have, as shown in the Focus Points column.</p>
                     <br/>
                     <p><b>Flurry of Blows.</b> Expend 1 Focus Point to make two Unarmed Strikes as a Bonus Action.</p>
                     <br/>
                     <p><b>Patient Defense.</b> Take the Disengage action as a Bonus Action. Or expend 1 Focus Point to take both Disengage and Dodge as a Bonus Action.</p>
                     <br/>
                     <p><b>Step of the Wind.</b> Take the Dash action as a Bonus Action. Or expend 1 Focus Point to take both Disengage and Dash as a Bonus Action, with doubled jump distance for the turn.</p>`,
            },
            {
              title: "Unarmored Movement",
              body: `<p>Your speed increases by 10 feet while you aren't wearing armor or wielding a Shield. This bonus increases at higher Monk levels as shown in the Unarmored Movement column.</p>`,
            },
            {
              title: "Uncanny Metabolism",
              body: `<p>When you roll Initiative, you can regain all expended Focus Points. When you do so, roll your Martial Arts die and regain Hit Points equal to your Monk level plus the number rolled.</p>
                     <br/>
                     <p>Once you use this feature, you can't use it again until you finish a Long Rest.</p>`,
            },
          ],
        },
        {
          level: "Level 3",
          features: [
            {
              title: "Deflect Attacks",
              body: `<p>You can use your Reaction to deflect a melee or ranged attack that deals Bludgeoning, Piercing, or Slashing damage. The total damage you take is reduced by 1d10 + your Dexterity modifier + your Monk level.</p>
                     <br/>
                     <p>If you reduce the damage to 0, you can expend 1 Focus Point to redirect it. A creature within 5 feet (melee) or 60 feet (ranged) must succeed on a Dexterity saving throw or take damage equal to two rolls of your Martial Arts die + your Dexterity modifier.</p>`,
            },
            {
              title: "Monk Subclass",
              body: `<p>You gain a Monk subclass of your choice. For the rest of your career, you gain each of your subclass's features that are of your Monk level or lower. Choose your warrior tradition below:</p>`,
            },
          ],
        },
        {
          level: "Level 4",
          features: [
            {
              title: "Ability Score Improvement",
              body: `<p>You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Monk levels 8, 12, and 16.</p>`,
            },
            {
              title: "Slow Fall",
              body: `<p>You can use your Reaction when you fall to reduce any damage you take from the fall by an amount equal to five times your Monk level.</p>`,
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
              title: "Stunning Strike",
              body: `<p>Once per turn when you hit a creature with a Monk Weapon or Unarmed Strike, you can expend 1 Focus Point to attempt a stunning strike. The target must make a Constitution saving throw. On a failed save, the target has the Stunned condition until the start of your next turn. On a successful save, it takes Force damage equal to a roll of your Martial Arts die + your Wisdom modifier.</p>`,
            },
          ],
        },
        {
          level: "Level 6",
          features: [
            {
              title: "Empowered Strikes",
              body: `<p>Whenever you deal damage with your Unarmed Strike, it can deal your choice of Force damage or its normal damage type.</p>`,
            },
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen warrior tradition.</p>`,
            },
          ],
        },
        {
          level: "Level 7",
          features: [
            {
              title: "Evasion",
              body: `<p>When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage on a success and only half damage on a failure.</p>
                     <br/>
                     <p>You don't benefit from this feature if you have the Incapacitated condition.</p>`,
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
              title: "Acrobatic Movement",
              body: `<p>While you aren't wearing armor or wielding a Shield, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.</p>`,
            },
          ],
        },
        {
          level: "Level 10",
          features: [
            {
              title: "Heightened Focus",
              body: `<p>Your core Focus abilities improve:</p>
                     <br/>
                     <p><b>Flurry of Blows.</b> You can expend 1 Focus Point to make three Unarmed Strikes instead of two.</p>
                     <br/>
                     <p><b>Patient Defense.</b> When you expend a Focus Point for Patient Defense, you gain Temporary Hit Points equal to two rolls of your Martial Arts die.</p>
                     <br/>
                     <p><b>Step of the Wind.</b> When you expend a Focus Point for Step of the Wind, you can bring a willing Large-or-smaller creature within 5 feet with you until the end of your turn without provoking Opportunity Attacks.</p>`,
            },
            {
              title: "Self-Restoration",
              body: `<p>Through sheer force of will, you can remove one of the following conditions from yourself at the end of each of your turns: Charmed, Frightened, or Poisoned.</p>
                     <br/>
                     <p>In addition, forgoing food and drink doesn't give you levels of Exhaustion.</p>`,
            },
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen warrior tradition.</p>`,
            },
          ],
        },
        {
          level: "Level 11",
          features: [
            {
              title: "Subclass Feature",
              body: `<p>You gain a new feature from your chosen warrior tradition.</p>`,
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
              title: "Deflect Energy",
              body: `<p>You can now use your Deflect Attacks feature against attacks that deal any damage type, not just Bludgeoning, Piercing, or Slashing.</p>`,
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
              title: "Perfect Focus",
              body: `<p>When you roll Initiative and have fewer than 4 Focus Points, you regain Focus Points equal to 4 minus the number you have.</p>`,
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
              body: `<p>You gain a new feature from your chosen warrior tradition.</p>`,
            },
          ],
        },
        {
          level: "Level 18",
          features: [
            {
              title: "Superior Defense",
              body: `<p>At the start of your turn, you can expend 3 Focus Points to bolster yourself against harm for 1 minute or until you have the Incapacitated condition. During that time, you have Resistance to all damage except Force damage.</p>`,
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
              title: "Body and Mind",
              body: `<p>You have honed your body and mind to new heights. Your Dexterity and Wisdom scores each increase by 4, to a maximum of 25.</p>`,
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
        .push("/wiki/classes/monk/" + label.replace(/\s+/g, "_").toLowerCase())
        .then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    },
  },
};
</script>

<style scoped>
/* ── Page ───────────────────────────────────────── */
.monk-page {
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
  color: #60a5fa;
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
.badge-blue {
  background: rgba(96, 165, 250, 0.12);
  color: #fb923c;
  border: 1px solid #fb923c;
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
  border-bottom: 1px solid rgba(96, 165, 250, 0.3);
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
  color: #60a5fa;
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
  color: #60a5fa;
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
  background: rgba(96, 165, 250, 0.08);
}
.features-table th {
  padding: 0.75rem 0.6rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #60a5fa;
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
  min-width: 240px;
}
.features-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}
.features-table tbody tr:last-child td {
  border-bottom: none;
}
.row-highlight td {
  color: #60a5fa;
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
.fp-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(45, 212, 191, 0.1);
  color: #2dd4bf;
  border: 1px solid rgba(45, 212, 191, 0.3);
}
.ma-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
}
.mv-badge {
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
  color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.3);
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
  border-bottom: 1px solid rgba(96, 165, 250, 0.2);
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
  border: 1px solid rgba(96, 165, 250, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  text-align: center;
  font-size: 0.82rem;
  color: #94a3b8;
}
.subclass-btn:hover {
  background: rgba(96, 165, 250, 0.06);
  border-color: #60a5fa;
  color: #f1f5f9;
}
.subclass-icon {
  font-size: 1.5rem !important;
  color: #60a5fa;
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
