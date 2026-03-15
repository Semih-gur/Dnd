<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Fighter Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Strength or Dexterity</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D10 per Fighter level</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Saving Throw Proficiencies</b></v-col>
          <v-col class="mr-10">Strength and Constitution</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Skill Proficiencies</b></v-col>
          <v-col class="mr-10"
            >Choose 2: Acrobatics, Animal Handling, Athletics, History, Insight,
            Intimidation, Perception, Persuasion, or Survival</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Weapon Proficiencies</b></v-col>
          <v-col class="mr-10">Simple and Martial weapons</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Armor Training</b></v-col>
          <v-col class="mr-10"
            >Light, Medium, and Heavy armor and Shields</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Starting Equipment</b></v-col>
          <v-col class="mr-10"
            >Choose A or B: (A) Chain Mail, Greatsword, Flail, 8 Javelins,
            Dungeoneer's Pack, and 4 GP; or (B) 155 GP</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Fighter</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Fighter Traits table.</li>
        <li>
          Gain the Fighter's level 1 features, which are listed in the Fighter
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>
          Gain the following traits from the Core Fighter Traits table: Hit
          Point Die, proficiency with Martial weapons, and training with Light
          and Medium armor and Shields.
        </li>
        <li>
          Gain the Fighter's level 1 features, which are listed in the Fighter
          Features table.
        </li>
      </div>
    </div>

    <!-- Summary table of the class -->
    <div class="bg-grey-darken-4 center pa-5">
      <h2>Fighter Class Features</h2>
    </div>
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Second Wind</th>
            <th class="text-center">Action Surge</th>
            <th class="text-center">Weapon Mastery</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in levels" :key="item.level">
            <td class="text-center">{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.secondWind }}</td>
            <td class="text-center">{{ item.actionSurge }}</td>
            <td class="text-center">{{ item.weaponMastery }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <!-- Level-by-level features -->
    <div class="mt-5">
      <div class="center mt-5">
        <v-expansion-panels v-model="panel">
          <!-- Level 1 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 1</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Fighting Style</h2>
                  <br />
                  <p>
                    You have honed your martial prowess and gain a Fighting
                    Style feat of your choice. Defense is recommended. Whenever
                    you gain a Fighter level, you can replace the feat you chose
                    with a different Fighting Style feat.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Second Wind</h2>
                  <br />
                  <p>
                    You have a limited well of physical and mental stamina that
                    you can draw on. As a Bonus Action, you can use it to regain
                    Hit Points equal to 1d10 plus your Fighter level.
                  </p>
                  <br />
                  <p>
                    You can use this feature twice. You regain one expended use
                    when you finish a Short Rest, and you regain all expended
                    uses when you finish a Long Rest. When you reach certain
                    Fighter levels, you gain more uses of this feature, as shown
                    in the Second Wind column of the Fighter Features table.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Weapon Mastery</h2>
                  <br />
                  <p>
                    Your training with weapons allows you to use the mastery
                    properties of three kinds of Simple or Martial weapons of
                    your choice. Whenever you finish a Long Rest, you can
                    practice weapon drills and change one of those weapon
                    choices.
                  </p>
                  <br />
                  <p>
                    When you reach certain Fighter levels, you gain the ability
                    to use the mastery properties of more kinds of weapons, as
                    shown in the Weapon Mastery column of the Fighter Features
                    table.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 2 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 2</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Action Surge</h2>
                  <br />
                  <p>
                    You can push yourself beyond your normal limits for a
                    moment. On your turn, you can take one additional action,
                    except the Magic action. Once you use this feature, you
                    can't do so again until you finish a Short or Long Rest.
                  </p>
                  <br />
                  <p>
                    Starting at level 17, you can use it twice before a rest,
                    but only once on the same turn.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Tactical Mind</h2>
                  <br />
                  <p>
                    You have a mind for tactics on and off the battlefield. When
                    you fail an ability check, you can expend a use of your
                    Second Wind to push yourself toward success. Rather than
                    regaining Hit Points, you roll 1d10 and add the number
                    rolled to the ability check, potentially turning it into a
                    success. If the check still fails, this use of Second Wind
                    isn't expended.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 3 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 3</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Fighter Subclass</h2>
                  <br />
                  <p>
                    You gain a Fighter subclass of your choice. A subclass is a
                    specialization that grants you features at certain Fighter
                    levels. For the rest of your career, you gain each of your
                    subclass's features that are of your Fighter level or lower.
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

          <!-- Level 4 -->
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
                    again at Fighter levels 6, 8, 12, 14, and 16.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 5 -->
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
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Tactical Shift</h2>
                  <br />
                  <p>
                    Whenever you activate your Second Wind with a Bonus Action,
                    you can move up to half your Speed without provoking
                    Opportunity Attacks.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 6 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 6</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 7 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 7</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose.</p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 8 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 8</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 9 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 9</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Indomitable</h2>
                  <br />
                  <p>
                    If you fail a saving throw, you can reroll it with a bonus
                    equal to your Fighter level. You must use the new roll, and
                    you can't use this feature again until you finish a Long
                    Rest.
                  </p>
                  <br />
                  <p>
                    You can use this feature twice before a Long Rest starting
                    at level 13, and three times before a Long Rest starting at
                    level 17.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Tactical Master</h2>
                  <br />
                  <p>
                    When you attack with a weapon whose mastery property you can
                    use, you can replace that property with the Push, Sap, or
                    Slow property for that attack.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 10 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 10</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose.</p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 11 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 11</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Two Extra Attacks</h2>
                  <br />
                  <p>
                    You can attack three times instead of once whenever you take
                    the Attack action on your turn.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 12 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 12</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 13 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 13</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Studied Attacks</h2>
                  <br />
                  <p>
                    You study your opponents and learn from each attack you
                    make. If you make an attack roll against a creature and
                    miss, you have Advantage on your next attack roll against
                    that creature before the end of your next turn.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 14 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 14</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 15 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 15</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose.</p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 16 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 16</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 17 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 17</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Action Surge (2 uses)</h2>
                  <br />
                  <p>
                    You can now use Action Surge twice before a rest, though
                    still only once on the same turn.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 18 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 18</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose.</p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 19 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 19</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Epic Boon</h2>
                  <br />
                  <p>
                    You gain an Epic Boon feat or another feat of your choice
                    for which you qualify. Boon of Combat Prowess is
                    recommended.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 20 -->
          <v-expansion-panel class="mb-10">
            <v-expansion-panel-title>
              <h2>Level 20</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Three Extra Attacks</h2>
                  <br />
                  <p>
                    You can attack four times instead of once whenever you take
                    the Attack action on your turn.
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
      router
        .push("/wiki/classes/fighter/" + label.replace(" ", "_").toLowerCase())
        .then(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },

  data() {
    return {
      subclasses: [
        { title: "Battle Master" },
        { title: "Champion" },
        { title: "Eldritch Knight" },
        { title: "Psi Warrior" },
      ],
      icons: ["chess-knight", "shield-halved", "hat-wizard", "brain"],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Fighting Style, Second Wind, Weapon Mastery",
          secondWind: "2",
          actionSurge: "—",
          weaponMastery: "3",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Action Surge, Tactical Mind",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "3",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Fighter Subclass",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "3",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Extra Attack, Tactical Shift",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Subclass Feature",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Indomitable, Tactical Master",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "4",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Subclass Feature",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Two Extra Attacks",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Studied Attacks",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          secondWind: "2",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Subclass Feature",
          secondWind: "3",
          actionSurge: "1",
          weaponMastery: "5",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          secondWind: "3",
          actionSurge: "1",
          weaponMastery: "6",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Action Surge (2 uses)",
          secondWind: "3",
          actionSurge: "2",
          weaponMastery: "6",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Subclass Feature",
          secondWind: "3",
          actionSurge: "2",
          weaponMastery: "6",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          secondWind: "3",
          actionSurge: "2",
          weaponMastery: "6",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Three Extra Attacks",
          secondWind: "3",
          actionSurge: "2",
          weaponMastery: "6",
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
