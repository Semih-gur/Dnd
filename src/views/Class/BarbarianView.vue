<template>
  <div class="mt-15">
    <!-- Summary table of the class -->
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Rages</th>
            <th class="text-center">Rage Damage</th>
            <th class="text-center">Weapon Mastery</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in levels" :key="item.level">
            <td>{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.rages }}</td>
            <td class="text-center">{{ item.rageDamage }}</td>
            <td class="text-center">{{ item.weaponMastery }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <!-- Lvl 1 abilities and characteristic -->
    <div class="mt-5">
      <div class="bg-grey-darken-4 center pa-5">
        <h2>Hit Points</h2>

        <p class="mt-2">
          <strong>Hit Dice:</strong> D12 per Barbarian Level.
          <br />
        </p>
        <br />
        <h2>Proficiencies</h2>

        <p>
          <br />
          <strong>Saving Throws:</strong> Strenght, Constitution
          <br />
          <v-divider class="ma-1" :thickness="3"></v-divider
          ><strong>Skill Proficiencies:</strong> Choose 2: Animal Handling,
          Athletics, Intimidation, Nature, Perception, or Survival
          <v-divider class="ma-1" :thickness="3"></v-divider>

          <strong>Weapons:</strong> Simple and Martial weapons
          <v-divider class="ma-1" :thickness="3"></v-divider>
          <strong>Armor:</strong> Light and Medium armor and Shields
          <v-divider class="ma-1" :thickness="3"></v-divider>
        </p>
        <br />
        <h2>Starting Equipment</h2>
        <p>
          <strong>(A)-</strong>Greataxe, 4 Handaxes, Explorer’s Pack, and 15 GP;
          <br />
          <strong>(B)-</strong>75 GP
        </p>
      </div>

      <!-- All levels that an ability is gained. -->
      <div class="center mt-5">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 1</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Rage</h2>
                  <br />
                  <p>
                    You can enter your Rage the number of times shown for your
                    Barbarian level in the Rages column of the Barbarian
                    Features table. You regain one expended use when you finish
                    a Short Rest, and you regain all expended uses when you
                    finish a Long Rest.
                  </p>
                  <br />
                  <p>While active, your Rage follows the rules below.</p>
                  <br />
                  <p>
                    <strong>Damage Resistance. </strong>You have Resistance to
                    Bludgeoning, Piercing, and Slashing damage.
                  </p>
                  <br />
                  <p>
                    <strong>Rage Damage.</strong> When you make an attack using
                    Strength—with either a weapon or an Unarmed Strike—and deal
                    damage to the target, you gain a bonus to the damage that
                    increases as you gain levels as a Barbarian, as shown in the
                    Rage Damage column of the Barbarian Features table.
                  </p>
                  <br />
                  <p>
                    <strong>Strength Advantage. </strong>You have Advantage on
                    Strength checks and Strength saving throws.
                  </p>
                  <br />
                  <p>
                    <strong>No Concentration or Spells. </strong>You can't
                    maintain Concentration, and you can't cast spells.
                  </p>
                  <br />
                  <p>
                    <strong>Duration. </strong>The Rage lasts until the end of
                    your next turn, and it ends early if you don Heavy armor or
                    have the Incapacitated condition. If your Rage is still
                    active on your next turn, you can extend the Rage for
                    another round by doing one of the following:
                  </p>
                  <br />
                  <ul class="ml-5">
                    <li>Make an attack roll against an enemy.</li>
                    <li>Force an enemy to make a saving throw.</li>
                    <li>Take a Bonus Action to extend your Rage.</li>
                  </ul>
                  <br />
                  Each time the Rage is extended, it lasts until the end of your
                  next turn. You can maintain a Rage for up to 10 minutes.
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Unarmored Defense</h2>
                  <br />
                  <p>
                    While you aren't wearing any armor, your base Armor Class
                    equals 10 plus your Dexterity and Constitution modifiers.
                    You can use a Shield and still gain this benefit.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Level 1: Weapon Mastery</h2>
                  <p>
                    Your training with weapons allows you to use the mastery
                    properties of two kinds of Simple or Martial Melee weapons
                    of your choice, such as Greataxes and Handaxes. Whenever you
                    finish a Long Rest, you can practice weapon drills and
                    change one of those weapon choices.
                  </p>
                  <br />
                  <p>
                    When you reach certain Barbarian levels, you gain the
                    ability to use the mastery properties of more kinds of
                    weapons, as shown in the Weapon Mastery column of the
                    Barbarian Features table.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 2</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Danger Sense</h2>
                  <br />
                  <p>
                    You gain an uncanny sense of when things aren't as they
                    should be, giving you an edge when you dodge perils. You
                    have Advantage on Dexterity saving throws unless you have
                    the Incapacitated condition.
                  </p>
                  <br />
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Reckless Attack</h2>
                  <br />
                  <p>
                    You can throw aside all concern for defense to attack with
                    increased ferocity. When you make your first attack roll on
                    your turn, you can decide to attack recklessly. Doing so
                    gives you Advantage on attack rolls using Strength until the
                    start of your next turn, but attack rolls against you have
                    Advantage during that time.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 3</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Primal Knowledge (Optional)</h2>
                  <br />
                  <p>
                    You gain proficiency in another skill of your choice from
                    the skill list available to Barbarians at level 1.
                  </p>
                  <br />
                  <p>
                    In addition, while your Rage is active, you can channel
                    primal power when you attempt certain tasks; whenever you
                    make an ability check using one of the following skills, you
                    can make it as a Strength check even if it normally uses a
                    different ability: Acrobatics, Intimidation, Perception,
                    Stealth, or Survival. When you use this ability, your
                    Strength represents primal power coursing through you,
                    honing your agility, bearing, and senses.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Barbarian Subclasses</h2>
                  <br />
                  <p>
                    You gain a Barbarian subclass of your choice.A subclass is a
                    specialization that grants you features at certain Barbarian
                    levels. For the rest of your career, you gain each of your
                    subclass’s features that are of your Barbarian level or
                    lower.
                  </p>
                </v-col>
              </v-row>
              <br />
              <v-row>
                <v-col v-for="(sub, index) in subclasses" :key="index">
                  <div class="d-flex justify-center">
                    <v-btn
                      @click="goTo(sub.title)"
                      class="mb-2"
                      color="rgb(54, 61, 68)"
                    >
                      <font-awesome-icon
                        class="fab fa"
                        :icon="['fa', icons[index]]"
                        :key="index"
                      />
                    </v-btn>
                  </div>
                  <p class="text-center">{{ sub.title }}</p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 4</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify. You gain this feature
                    again at Barbarian levels 8, 12, and 16.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 5</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Extra Attack</h2>
                  <br />
                  <p>
                    You can attack twice instead of once whenever you take the
                    Attack action on your turn.
                  </p>
                  <br />
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Fast Movement</h2>
                  <br />
                  <p>
                    YYour speed increases by 10 feet while you aren't wearing
                    Heavy armor.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 6</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose</p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 7</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col
                  ><h2 class="elevation-10 pa-5">Feral Instinct</h2>
                  <br />
                  <p>You have advantage on initiative rolls.</p>
                  <p>
                    Additionally, if you are surprised at the beginning of
                    combat and aren't incapacitated, you can act normally on
                    your first turn, but only if you enter your rage before
                    doing anything else on that turn.
                  </p>
                  <br
                /></v-col>
                <v-col
                  ><h2 class="elevation-10 pa-5">
                    Instinctive Pounce (Optional)
                  </h2>
                  <br />
                  <p>
                    At 7th level, as part of the bonus action you take to enter
                    your rage, you can move up to half your speed.
                  </p></v-col
                >
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 9</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6"
                  ><h2 class="elevation-10 pa-5">Brutal Critical</h2>
                  <br />
                  <p>
                    You can roll one additional weapon damage die when
                    determining the extra damage for a critical hit with a melee
                    attack.
                  </p>
                  <p>
                    This increases to two additional dice at 13th level and
                    three additional dice at 17th level.
                  </p></v-col
                >
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 10</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Primal Knowledge (Optional)</h2>
                  <br />
                  <p>
                    You gain proficiency in one skill of your choice from the
                    list of skills available to barbarians at 1st level.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Subclass feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose</p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 11</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6"
                  ><h2 class="elevation-10 pa-5">Relentless Rage</h2>
                  <br />
                  <p>
                    Your rage can keep you fighting despite grievous wounds. If
                    you drop to 0 hit points while you're raging and don't die
                    outright, you can make a DC 10 Constitution saving throw. If
                    you succeed, you drop to 1 hit point instead.
                  </p>
                  <br />
                  <p>
                    Each time you use this feature after the first, the DC
                    increases by 5. When you finish a short or long rest, the DC
                    resets to 10.
                  </p></v-col
                >
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 14</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose</p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 15</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Persistent Rage</h2>
                  <br />
                  <p>
                    Your rage is so fierce that it ends early only if you fall
                    unconscious or if you choose to end it.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 18</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Indomitable Might</h2>
                  <br />
                  <p>
                    If your total for a Strength check is less than your
                    Strength score, you can use that score in place of the
                    total.
                  </p></v-col
                >
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-10">
            <v-expansion-panel-title>
              <h2>Level 20</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Primal Champion</h2>
                  <br />
                  <p>
                    You embody the power of the wilds. Your Strength and
                    Constitution scores increase by 4. Your maximum for those
                    scores is now 24.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    goTo(label) {
      router.push(
        "/wiki/classes/barbarian/" + label.replace(" ", "_").toLowerCase()
      );
    },
  },

  data() {
    return {
      subclasses: [
        {
          title: "Berserker",
        },
        {
          title: "Wild Heart",
        },
        {
          title: "World Tree",
        },
        {
          title: "Zealot",
        },
      ],
      icons: ["face-angry", "paw", "tree", "cross"],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "	Rage, Unarmored Defense, Weapon Mastery",
          rages: "2",
          rageDamage: "+2",
          weaponMastery: "2",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Danger Sense, Reckless Attack, ",
          rages: "2",
          rageDamage: "+2",
          weaponMastery: "2",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "	Barbarian Subclass, Primal Knowledge",
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
          feature: "Subclass Feature	",
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
          feature: "	Brutal Strike",
          rages: "4",
          rageDamage: "+3",
          weaponMastery: "3",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Subclass feature",
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
          feature: "	Improved Brutal Strike",
          rages: "5",
          rageDamage: "+3",
          weaponMastery: "4",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "	Subclass feature",
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
          feature: "	Improved Brutal Strike",
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
          feature: "	Epic Boon",
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
    };
  },
};
</script>

<style scoped>
.center {
  width: 80%;
}
</style>
