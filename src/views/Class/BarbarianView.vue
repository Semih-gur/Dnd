<template>
  <div class="mt-15">
    <div class="mb-5">
      <div class="bg-grey-darken-4 center pa-5">
        <h2>Hit Points</h2>

        <p class="mt-2">
          <strong>Hit Dice:</strong> 1d8.
          <br />
          <strong>Health:</strong> 8 + Constitution Modifier (+1d8 +
          Constitution Modifier for every level after).
        </p>
        <br />
        <h2>Proficiencies</h2>

        <p>
          <strong>Armor:</strong> Light Armor,.
          <br />
          <strong>Weapons:</strong> Simple Weapons, Hand Crossbows, Longswords,
          Rapiers, Shortswords.
          <br />
          <strong>Tools:</strong> Three musical instruments of your choice.
          <br />
          <strong>Saving Throws:</strong> Dexterity, Charisma
          <br />
          <strong>Skills(Choose 2):</strong> Choose any three
        </p>
        <br />
        <h2>Starting Equipment</h2>
        <p>
          <strong>(a)-</strong>A raiper <strong>(b)-</strong>A longsword
          <strong>(c)-</strong>Any simple weapon
          <br />
          <strong>(a)-</strong>A diplomat's pack <strong>(b)-</strong> An
          entertainer's pack
          <br />
          <strong>(a)-</strong>A Lute <strong>(b)-</strong> Any other musical
          instrument
          <br />
          Leather armor and a dagger
        </p>
      </div>
    </div>
    <!-- Summary table of the class -->
    <div class="center">
      <v-card>
        <v-row>
          <v-col class="text-center tableText"> Level </v-col>
          <v-col class="text-center tableText"> Proficiency Bonus </v-col>
          <v-col class="text-center tableText"> Unlocked </v-col>
          <v-col class="text-center tableText"> Rages </v-col>
          <v-col class="text-center tableText"> Rage Damage </v-col>
        </v-row>
        <v-divider class="mb-3 mt-2"></v-divider>
      </v-card>
      <v-card v-for="item in levels" :key="item.level">
        <div>
          <v-row class="card" @click="clicked(item.level)">
            <v-col class="text-center tableText">
              {{ item.level }}
            </v-col>
            <v-col class="text-center tableText">
              {{ item.profBonus }}
            </v-col>
            <v-col class="text-center tableText">
              {{ item.feature }}
            </v-col>
            <v-col class="text-center tableText">
              {{ item.rages }}
            </v-col>
            <v-col class="text-center tableText">
              {{ item.rageDamage }}
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="dropdown" v-if="clickedRow == 1 && item.level == 1">
            <v-col>
              <h2 class="elevation-10 pa-5">Rage</h2>
              <br />
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
              <br />
              <p>
                While you are not wearing any armor, your armor class equals 10
                + your Dexterity modifier + your Constitution modifier. You can
                use a shield and still gain this benefit.
              </p>
            </v-col>
          </v-row>
          <v-row class="dropdown" v-if="clickedRow == 2 && item.level == 2">
            <v-col>
              <h2 class="elevation-10 pa-5">Danger Sense</h2>
              <br />
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
              <br />
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

          <div class="dropdown" v-if="clickedRow == 3 && item.level == 3">
            <v-row>
              <v-col>
                <h2 class="elevation-10 pa-5">Primal Knowledge (Optional)</h2>
                <br />
                <p>
                  You gain proficiency in one skill of your choice from the list
                  of skills available to barbarians at 1st level.
                </p>
              </v-col>
              <v-col>
                <h2 class="elevation-10 pa-5">Primal Path</h2>
                <br />
                <p>
                  At 3rd level, you choose a path that shapes the nature of your
                  rage. Your choice grants you features at 3rd level and again
                  at 6th, 10th, and 14th levels.
                </p>
              </v-col>
            </v-row>
            <v-row class="mt-5 mb-5">
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
          </div>

          <v-row
            class="d-flex justify-center dropdown"
            v-if="clickedRow == 4 && item.level == 4"
          >
            <v-col cols="6">
              <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
              <br />
              <p>
                When you reach 4th level, and again at 8th, 12th, 16th, and 19th
                level, you can increase one ability score of your choice by 2,
                or you can increase two ability scores of your choice by 1. As
                normal, you can't increase an ability score above 20 using this
                feature.
              </p>
            </v-col>
          </v-row>
          <v-row class="dropdown" v-if="clickedRow == 5 && item.level == 5">
            <v-col>
              <h2 class="elevation-10 pa-5">Extra Attack</h2>
              <br />
              <p>
                You can attack twice, instead of once, whenever you take the
                Attack action on your turn.
              </p>
              <br />
            </v-col>
            <v-col>
              <h2 class="elevation-10 pa-5">Fast Movement</h2>
              <br />
              <p>
                Your speed increases by 10 feet while you aren't wearing heavy
                armor
              </p>
            </v-col>
          </v-row>
          <v-row
            class="d-flex justify-center dropdown"
            v-if="clickedRow == 6 && item.level == 6"
          >
            <v-col cols="6">
              <h2 class="elevation-10 pa-5">Subclass Feature</h2>
              <br />
              <p>You gain a new feature from the subclass you chose</p>
            </v-col>
          </v-row>
          <v-row class="dropdown" v-if="clickedRow == 7 && item.level == 7">
            <v-col
              ><h2 class="elevation-10 pa-5">Feral Instinct</h2>
              <br />
              <p>You have advantage on initiative rolls.</p>
              <p>
                Additionally, if you are surprised at the beginning of combat
                and aren't incapacitated, you can act normally on your first
                turn, but only if you enter your rage before doing anything else
                on that turn.
              </p>
              <br
            /></v-col>
            <v-col
              ><h2 class="elevation-10 pa-5">Instinctive Pounce (Optional)</h2>
              <br />
              <p>
                At 7th level, as part of the bonus action you take to enter your
                rage, you can move up to half your speed.
              </p></v-col
            >
          </v-row>
          <v-row
            class="d-flex justify-center dropdown"
            v-if="clickedRow == 9 && item.level == 9"
          >
            <v-col cols="6"
              ><h2 class="elevation-10 pa-5">Brutal Critical</h2>
              <br />
              <p>
                You can roll one additional weapon damage die when determining
                the extra damage for a critical hit with a melee attack.
              </p>
              <p>
                This increases to two additional dice at 13th level and three
                additional dice at 17th level.
              </p></v-col
            >
          </v-row>
          <v-row class="dropdown" v-if="clickedRow == 10 && item.level == 10">
            <v-col>
              <h2 class="elevation-10 pa-5">Primal Knowledge (Optional)</h2>
              <br />
              <p>
                You gain proficiency in one skill of your choice from the list
                of skills available to barbarians at 1st level.
              </p>
            </v-col>
            <v-col>
              <h2 class="elevation-10 pa-5">Subclass feature</h2>
              <br />
              <p>You gain a new feature from the subclass you chose</p>
            </v-col>
          </v-row>
          <v-row
            class="d-flex justify-center dropdown"
            v-if="clickedRow == 11 && item.level == 11"
          >
            <v-col cols="6"
              ><h2 class="elevation-10 pa-5">Relentless Rage</h2>
              <br />
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
              </p></v-col
            >
          </v-row>
          <v-row
            class="d-flex justify-center dropdown"
            v-if="clickedRow == 14 && item.level == 14"
          >
            <v-col cols="6">
              <h2 class="elevation-10 pa-5">Subclass Feature</h2>
              <br />
              <p>You gain a new feature from the subclass you chose</p>
            </v-col>
          </v-row>
          <v-row
            class="d-flex justify-center dropdown"
            v-if="clickedRow == 15 && item.level == 15"
          >
            <v-col cols="6">
              <h2 class="elevation-10 pa-5">Persistent Rage</h2>
              <br />
              <p>
                Your rage is so fierce that it ends early only if you fall
                unconscious or if you choose to end it.
              </p>
            </v-col>
          </v-row>
          <v-row
            class="d-flex justify-center dropdown"
            v-if="clickedRow == 18 && item.level == 18"
          >
            <v-col cols="6">
              <h2 class="elevation-10 pa-5">Indomitable Might</h2>
              <br />
              <p>
                If your total for a Strength check is less than your Strength
                score, you can use that score in place of the total.
              </p></v-col
            >
          </v-row>
          <v-row
            class="d-flex justify-center dropdown"
            v-if="clickedRow == 20 && item.level == 20"
          >
            <v-col cols="6">
              <h2 class="elevation-10 pa-5">Primal Champion</h2>
              <br />
              <p>
                You embody the power of the wilds. Your Strength and
                Constitution scores increase by 4. Your maximum for those scores
                is now 24.
              </p>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
    <!-- Lvl 1 abilities and characteristic -->
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    clicked(id) {
      if (this.clickedRow == id) {
        this.clickedRow = "";
      } else {
        this.clickedRow = id;
        console.log(this.clickedRow);
      }
    },

    goTo(label) {
      router.push(
        "/wiki/classes/barbarian/" + label.replace(" ", "_").toLowerCase()
      );
    },
  },

  data() {
    return {
      clickedRow: "",

      subclasses: [
        {
          title: "Ancestral Guardian",
        },
        {
          title: "Battlerager",
        },
        {
          title: "Beast",
        },
        {
          title: "Berserker",
        },
        {
          title: "Giant",
        },
        {
          title: "Storm Herald",
        },
        {
          title: "Totem Warrior",
        },
        {
          title: "Wild Magic",
        },
        {
          title: "Zealot",
        },
      ],
      icons: [
        "shield",
        "hand-fist",
        "dog",
        "face-angry",
        "mountain",
        "cloud-bolt",
        "paw",
        "hand-sparkles",
        "cross",
      ],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Rage, Unarmored Defense",
          rages: "2",
          rageDamage: "+2",
          title: "",
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
.card {
  cursor: pointer;
}

.card:hover {
  background-color: rgb(63, 63, 63);
}

.dropdown {
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
  cursor: default;
}

.tableText {
  margin: 10px;
}

.center {
  width: 80%;
}
</style>
