<template>
  <div class="mt-15" >
    <div class="d-flex justify-center"  >
      <v-table>
        <thead >
          <tr >
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Rages</th>
            <th class="text-center">Rage Damage</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="item in levels" :key="item.level">
            <td>{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.rages }}</td>
            <td class="text-center">{{ item.rageDamage }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <div class="mt-5">
      <div class="bg-grey-darken-4 center pa-5">
        <h2>Hit Points</h2>

        <p class="mt-2">
          <strong>Hit Dice:</strong> 1d12.
          <br />
          <strong>Health:</strong> 12 + Constitution Modifier (+1d12 +
          Constitution Modifier for every level after).
        </p>
        <br />
        <h2>Proficiencies</h2>

        <p>
          <strong>Armor:</strong> Light Armor, Medium Armor, Shields.
          <br />
          <strong>Weapons:</strong> Simple Weapons, Martial Weapons.
          <br />
          <strong>Tools:</strong> None.
          <br />
          <strong>Saving Throws:</strong> Strenght, Constitution
          <br />
          <strong>Skills(Choose 2):</strong> Animal Handling, Athletics,
          Intimidation, Nature, Perception, and Survival
        </p>
        <br />
        <h2>Starting Equipment</h2>
        <p>
          <strong>(a)-</strong>A greataxe <strong>(b)-</strong>Any martial melee
          weapon
          <br />
          <strong>(a)-</strong>two handaxes <strong>(b)-</strong> Any simple
          weapon
          <br />
          An explorer's pack and four javelins
        </p>
      </div>
      <div class="center mt-5">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 1</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text >
              <v-row>
                <v-col>
              <h2 class="elevation-10 pa-5" >Rage</h2>
              <br>
              <p>
                On your turn, you can enter a rage as a <b>bonus action.</b>
              </p>
              <br />
              <p>
                While raging, you gain the following benefits if you aren't
                wearing heavy armor:
              </p>
              <br />
              <p>
                --You have advantage on Strength checks and Strength saving
                throws.
              </p>
              <p>
                --When you make a melee weapon attack using Strength, you gain a
                bonus to the damage roll that increases as you gain levels as a
                barbarian, as shown in the Rage Damage column of the Barbarian
                table.
              </p>
              <p>
                --You have resistance to bludgeoning, piercing, and slashing
                damage.
              </p>
              <br />
              <p>
                If you are able to cast spells, you can't cast them or
                concentrate on them while raging.
              </p>
              <p>
                Your rage lasts for 1 minute. It ends early if you are knocked
                unconscious or if your turn ends and you haven't attacked a
                hostile creature since your last turn or taken damage since
                then. You can also end your rage on your turn as a bonus action.
              </p>
              <br />
              <p>
                Once you have raged the number of times shown for your barbarian
                level in the Rages column of the Barbarian table, you must
                finish a long rest before you can rage again
              </p>
              <br />
            </v-col>
              <v-col>
                <h2 class="elevation-10 pa-5">Unarmored Defense</h2>
                <br>
              <p>
                While you are not wearing any armor, your armor class equals 10
                + your Dexterity modifier + your Constitution modifier. You can
                use a shield and still gain this benefit.
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
                  <br>
              <p>
                At 2nd level, you gain an uncanny sense of when things nearby
                aren't as they should be, giving you an edge when you dodge away
                from danger. You have advantage on Dexterity saving throws
                against effects that you can see, such as traps and spells. To
                gain this benefit, you can't be blinded, deafened, or
                incapacitated.
              </p>
              <br />
              
            </v-col>
            <v-col>
              <h2 class="elevation-10 pa-5">Reckless Attack</h2>
              <br>
              <p>
                Starting at 2nd level, you can throw aside all concern for
                defense to attack with fierce desperation. When you make your
                first attack on your turn, you can decide to attack recklessly.
                Doing so gives you advantage on melee weapon attack rolls using
                Strength during this turn, but attack rolls against you have
                advantage until your next turn.
              </p>
            </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2 >Level 3</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Primal Knowledge (Optional)</h2>
                  <br>
                  <p>
                    You gain proficiency in one skill of your choice from the list
                    of skills available to barbarians at 1st level.
                  </p>
                </v-col>
              <v-col>
              <h2 class="elevation-10 pa-5">Primal Path</h2>
              <br>
              <p
                >At 3rd level, you choose a path that shapes the nature of your
                rage. Your choice grants you features at 3rd level and again at
                6th, 10th, and 14th levels.</p
              >
            </v-col>
            </v-row>
              <br>
              <v-row>
                <v-col v-for="sub, in subclasses" :key="sub.sub">
                  <div class="d-flex justify-center">
                    <v-btn               
                    @click="goTo(sub.title)"
                    class=" mb-2 "
                    color="rgb(54, 61, 68)"
                    >
                    <font-awesome-icon :icon="['fab',icon]"/>
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
                  <br>
                  <p>
                    When you reach 4th level, and again at 8th, 12th, 16th, and 19th
                    level, you can increase one ability score of your choice by 2,
                    or you can increase two ability scores of your choice by 1. As
                    normal, you can't increase an ability score above 20 using this
                    feature.
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
                  <br>
                  <p>
                    You can attack twice, instead of once,
                    whenever you take the Attack action on your turn.
                  </p>
                  <br />
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Fast Movement</h2>
                  <br>
                  <p>
                    Your speed increases by 10 feet while you
                    aren't wearing heavy armor
                  </p>
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
                <v-col><h2 class="elevation-10 pa-5">Feral Instinct</h2>
              <br>
              <p>You have advantage on initiative rolls.</p>
              <p>
                Additionally, if you are surprised at the beginning of combat
                and aren't incapacitated, you can act normally on your first
                turn, but only if you enter your rage before doing anything else
                on that turn.
              </p>
              <br /></v-col>
                <v-col><h2 class="elevation-10 pa-5">Instinctive Pounce (Optional)</h2>
              <br>
              <p>
                At 7th level, as part of the bonus action you take to enter your
                rage, you can move up to half your speed.
              </p></v-col>
              </v-row>
              
              
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 9</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6" ><h2 class="elevation-10 pa-5">Brutal Critical</h2>
              <br>
              <p>
                You can roll one additional weapon damage die when determining
                the extra damage for a critical hit with a melee attack.
              </p>
              <p>
                This increases to two additional dice at 13th level and three
                additional dice at 17th level.
              </p></v-col>
              </v-row>
              
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 10</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Primal Knowledge (Optional)</h2>
                  <br>
                  <p>
                    You gain proficiency in one skill of your choice from the list
                    of skills available to barbarians at 1st level.
                  </p>
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
                <v-col cols="6"><h2 class="elevation-10 pa-5">Relentless Rage</h2>
              <br>
              <p>
                Your rage can keep you fighting despite grievous wounds. If you
                drop to 0 hit points while you're raging and don't die outright,
                you can make a DC 10 Constitution saving throw. If you succeed,
                you drop to 1 hit point instead.
              </p>
              <br />
              <p>
                Each time you use this feature after the first, the DC increases
                by 5. When you finish a short or long rest, the DC resets to 10.
              </p></v-col>
              </v-row>
              
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2 >Level 15</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Persistent Rage</h2>
                    <br>
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
                <br>
                <p>
                  If your total for a Strength check is less than your Strength
                  score, you can use that score in place of the total.
                </p></v-col>
              </v-row>
              
              
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-10">
            <v-expansion-panel-title>
              <h2 >Level 20</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Primal Champion</h2>
                    <br>
                    <p>
                      You embody the power of the wilds. Your Strength and
                      Constitution scores increase by 4. Your maximum for those scores
                      is now 24.
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
      icon:"user-secret",
      subclasses: [
        {
          title: "Ancestral Guardian",
          value: 1,
          icon:"mdi-book"
        },
        {
          title: "Battlerager",
          value: 2,
          icon:"paw"
        },
        {
          title: "Beast",
          value: 3,
          icon:"paw"
        },
        {
          title: "Berserker",
          value: 4,
          icon:"paw"
        },
        {
          title: "Giant",
          value: 5,
          icon:"paw"
        },
        {
          title: "Storm Herald",
          value: 6,
          icon:"paw"
        },
        {
          title: "Totem Warrior",
          value: 7,
          icon:"paw"
        },
        {
          title: "Wild Magic",
          value: 8,
          icon:"paw"
        },
        {
          title: "Zealot",
          value: 9,
          icon:"paw"
        },
      ],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Rage, Unarmored Defense",
          rages: "2",
          rageDamage: "+2",
          title:""
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Reckless Attack, Danger Sense",
          rages: "2",
          rageDamage: "+2",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Primal Path, Primal Knowledge (Optional)",
          rages: "3",
          rageDamage: "+2",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          rages: "3",
          rageDamage: "+2",
        },
        {
          level: "5",
          profBonus: "+2",
          feature: "Extra Attack, Fast Movement",
          rages: "3",
          rageDamage: "+2",
        },
        {
          level: "6",
          profBonus: "+2",
          feature: "Path feature",
          rages: "4",
          rageDamage: "+2",
        },
        {
          level: "7",
          profBonus: "+2",
          feature: "Feral Instinct, Instinctive Pounce (Optional)",
          rages: "4",
          rageDamage: "+2",
        },
        {
          level: "8",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          rages: "4",
          rageDamage: "+2",
        },
        {
          level: "9",
          profBonus: "+2",
          feature: "Brutal Critical (1 die)",
          rages: "4",
          rageDamage: "+3",
        },
        {
          level: "10",
          profBonus: "+2",
          feature: "Path feature, Primal Knowledge (Optional)",
          rages: "4",
          rageDamage: "+3",
        },
        {
          level: "11",
          profBonus: "+2",
          feature: "Relentless Rage",
          rages: "4",
          rageDamage: "+3",
        },
        {
          level: "12",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          rages: "5",
          rageDamage: "+3",
        },
        {
          level: "13",
          profBonus: "+2",
          feature: "Brutal Critical (2 dice)",
          rages: "5",
          rageDamage: "+3",
        },
        {
          level: "14",
          profBonus: "+2",
          feature: "Path feature",
          rages: "5",
          rageDamage: "+3",
        },
        {
          level: "15",
          profBonus: "+2",
          feature: "Persistent Rage",
          rages: "5",
          rageDamage: "+3",
        },
        {
          level: "16",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          rages: "5",
          rageDamage: "+4",
        },
        {
          level: "17",
          profBonus: "+2",
          feature: "Brutal Critical (3 dice)",
          rages: "6",
          rageDamage: "+4",
        },
        {
          level: "18",
          profBonus: "+2",
          feature: "Indomitable Might",
          rages: "6",
          rageDamage: "+4",
        },
        {
          level: "19",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          rages: "6",
          rageDamage: "+4",
        },
        {
          level: "20",
          profBonus: "+2",
          feature: "Primal Champion",
          rages: "Unlimited",
          rageDamage: "+4",
        },
      ],
    };
  },
};
</script>

<style>

.center {
  width: 80%;
}
</style>
