<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Ranger Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Dexterity and Wisdom</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D10 per Ranger level</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Saving Throw Proficiencies</b></v-col>
          <v-col class="mr-10">Strength and Dexterity</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Skill Proficiencies</b></v-col>
          <v-col class="mr-10"
            >Choose 3: Animal Handling, Athletics, Insight, Investigation,
            Nature, Perception, Stealth, or Survival</v-col
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
          <v-col class="mr-10">Light and Medium armor and Shields</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Starting Equipment</b></v-col>
          <v-col class="mr-10"
            >Choose A or B: (A) Studded Leather Armor, Scimitar, Shortsword,
            Longbow, 20 Arrows, Quiver, Druidic Focus, Explorer's Pack, and 7
            GP; or (B) 150 GP</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Ranger</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Ranger Traits table.</li>
        <li>
          Gain the Ranger's level 1 features, which are listed in the Ranger
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>
          Gain the following traits from the Core Ranger Traits table: Hit Point
          Die, proficiency with Martial weapons, proficiency in one skill of
          your choice from the Ranger's skill list, and training with Light and
          Medium armor and Shields.
        </li>
        <li>
          Gain the Ranger's level 1 features, which are listed in the Ranger
          Features table. See the multiclassing rules to determine your
          available spell slots.
        </li>
      </div>
    </div>

    <!-- Summary table -->
    <div class="bg-grey-darken-4 center pa-5">
      <h2>Ranger Class Features</h2>
    </div>
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Favored Enemy</th>
            <th class="text-center">Prepared Spells</th>
            <th class="text-center">1st</th>
            <th class="text-center">2nd</th>
            <th class="text-center">3rd</th>
            <th class="text-center">4th</th>
            <th class="text-center">5th</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in levels" :key="item.level">
            <td class="text-center">{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.favoredEnemy }}</td>
            <td class="text-center">{{ item.preparedSpells }}</td>
            <td class="text-center">{{ item.slot1 }}</td>
            <td class="text-center">{{ item.slot2 }}</td>
            <td class="text-center">{{ item.slot3 }}</td>
            <td class="text-center">{{ item.slot4 }}</td>
            <td class="text-center">{{ item.slot5 }}</td>
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
                  <h2 class="elevation-10 pa-5">Spellcasting</h2>
                  <br />
                  <p>
                    You have learned to channel the magical essence of nature to
                    cast spells. Wisdom is your spellcasting ability for your
                    Ranger spells, and you can use a Druidic Focus as a
                    Spellcasting Focus.
                  </p>
                  <br />
                  <p>
                    To start, choose two level 1 Ranger spells. Cure Wounds and
                    Ensnaring Strike are recommended. The number of spells on
                    your list increases as you gain Ranger levels, as shown in
                    the Prepared Spells column of the Ranger Features table.
                  </p>
                  <br />
                  <p>
                    Whenever you finish a Long Rest, you can replace one spell
                    on your list with another Ranger spell for which you have
                    spell slots.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Favored Enemy</h2>
                  <br />
                  <p>
                    You always have the Hunter's Mark spell prepared. You can
                    cast it twice without expending a spell slot, and you regain
                    all expended uses of this ability when you finish a Long
                    Rest.
                  </p>
                  <br />
                  <p>
                    The number of times you can cast the spell without a spell
                    slot increases when you reach certain Ranger levels, as
                    shown in the Favored Enemy column of the Ranger Features
                    table.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Weapon Mastery</h2>
                  <br />
                  <p>
                    Your training with weapons allows you to use the mastery
                    properties of two kinds of weapons of your choice with which
                    you have proficiency, such as Longbows and Shortswords.
                  </p>
                  <br />
                  <p>
                    Whenever you finish a Long Rest, you can change the kinds of
                    weapons you chose.
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
                  <h2 class="elevation-10 pa-5">Deft Explorer</h2>
                  <br />
                  <p>
                    Thanks to your travels, you gain the following benefits.
                  </p>
                  <br />
                  <p>
                    <b>Expertise.</b> Choose one of your skill proficiencies
                    with which you lack Expertise. You gain Expertise in that
                    skill.
                  </p>
                  <br />
                  <p>
                    <b>Languages.</b> You know two languages of your choice from
                    the language tables.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Fighting Style</h2>
                  <br />
                  <p>
                    You gain a Fighting Style feat of your choice. Instead of
                    choosing one of those feats, you can choose the option
                    below.
                  </p>
                  <br />
                  <p>
                    <b>Druidic Warrior.</b> You learn two Druid cantrips of your
                    choice. Guidance and Starry Wisp are recommended. The chosen
                    cantrips count as Ranger spells for you, and Wisdom is your
                    spellcasting ability for them. Whenever you gain a Ranger
                    level, you can replace one of these cantrips with another
                    Druid cantrip.
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
                  <h2 class="elevation-10 pa-5">Ranger Subclass</h2>
                  <br />
                  <p>
                    You gain a Ranger subclass of your choice. A subclass is a
                    specialization that grants you features at certain Ranger
                    levels. For the rest of your career, you gain each of your
                    subclass's features that are of your Ranger level or lower.
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
          <v-expansion-panel>
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
                    again at Ranger levels 8, 12, and 16.
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
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Extra Attack</h2>
                  <br />
                  <p>
                    You can attack twice instead of once whenever you take the
                    Attack action on your turn.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 6 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 6</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Roving</h2>
                  <br />
                  <p>
                    Your Speed increases by 10 feet while you aren't wearing
                    Heavy Armor. You also have a Climb Speed and a Swim Speed
                    equal to your Speed.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 7 -->
          <v-expansion-panel>
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
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Expertise</h2>
                  <br />
                  <p>
                    Choose two of your skill proficiencies with which you lack
                    Expertise. You gain Expertise in those skills.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 10 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 10</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Tireless</h2>
                  <br />
                  <p>
                    Primal forces now help fuel you on your journeys, granting
                    you the following benefits.
                  </p>
                  <br />
                  <p>
                    <b>Temporary Hit Points.</b> As an action, you can give
                    yourself a number of Temporary Hit Points equal to 1d8 plus
                    your Wisdom modifier (minimum of 1). You can use this action
                    a number of times equal to your Wisdom modifier (minimum of
                    once), and you regain all expended uses when you finish a
                    Long Rest.
                  </p>
                  <br />
                  <p>
                    <b>Decrease Exhaustion.</b> Whenever you finish a Short
                    Rest, your Exhaustion level, if any, decreases by 1.
                  </p>
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
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose.</p>
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
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 13</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Relentless Hunter</h2>
                  <br />
                  <p>
                    Taking damage can't break your Concentration on Hunter's
                    Mark.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 14 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 14</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Nature's Veil</h2>
                  <br />
                  <p>
                    You invoke spirits of nature to magically hide yourself. As
                    a Bonus Action, you can give yourself the Invisible
                    condition until the end of your next turn.
                  </p>
                  <br />
                  <p>
                    You can use this feature a number of times equal to your
                    Wisdom modifier (minimum of once), and you regain all
                    expended uses when you finish a Long Rest.
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
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 17</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Precise Hunter</h2>
                  <br />
                  <p>
                    You have Advantage on attack rolls against the creature
                    currently marked by your Hunter's Mark.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 18 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 18</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Feral Senses</h2>
                  <br />
                  <p>
                    Your connection to the forces of nature grants you
                    Blindsight with a range of 30 feet.
                  </p>
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
                    for which you qualify. Boon of Dimensional Travel is
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
                  <h2 class="elevation-10 pa-5">Foe Slayer</h2>
                  <br />
                  <p>
                    The damage die of your Hunter's Mark is a d10 rather than a
                    d6.
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
        .push("/wiki/classes/ranger/" + label.replace(" ", "_").toLowerCase())
        .then(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },

  data() {
    return {
      subclasses: [
        { title: "Beast Master" },
        { title: "Fey Wanderer" },
        { title: "Gloom Stalker" },
        { title: "Hunter" },
      ],
      icons: ["paw", "wand-sparkles", "eye-slash", "crosshairs"],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Spellcasting, Favored Enemy, Weapon Mastery",
          favoredEnemy: "2",
          preparedSpells: "2",
          slot1: "2",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Deft Explorer, Fighting Style",
          favoredEnemy: "2",
          preparedSpells: "3",
          slot1: "2",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Ranger Subclass",
          favoredEnemy: "2",
          preparedSpells: "4",
          slot1: "3",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          favoredEnemy: "2",
          preparedSpells: "5",
          slot1: "3",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Extra Attack",
          favoredEnemy: "3",
          preparedSpells: "6",
          slot1: "4",
          slot2: "2",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Roving",
          favoredEnemy: "3",
          preparedSpells: "6",
          slot1: "4",
          slot2: "2",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Subclass Feature",
          favoredEnemy: "3",
          preparedSpells: "7",
          slot1: "4",
          slot2: "3",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          favoredEnemy: "3",
          preparedSpells: "7",
          slot1: "4",
          slot2: "3",
          slot3: "—",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Expertise",
          favoredEnemy: "4",
          preparedSpells: "8",
          slot1: "4",
          slot2: "3",
          slot3: "2",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Tireless",
          favoredEnemy: "4",
          preparedSpells: "8",
          slot1: "4",
          slot2: "3",
          slot3: "2",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Subclass Feature",
          favoredEnemy: "4",
          preparedSpells: "10",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          favoredEnemy: "4",
          preparedSpells: "10",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "—",
          slot5: "—",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Relentless Hunter",
          favoredEnemy: "5",
          preparedSpells: "11",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "1",
          slot5: "—",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Nature's Veil",
          favoredEnemy: "5",
          preparedSpells: "11",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "1",
          slot5: "—",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Subclass Feature",
          favoredEnemy: "5",
          preparedSpells: "12",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "2",
          slot5: "—",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          favoredEnemy: "5",
          preparedSpells: "12",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "2",
          slot5: "—",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Precise Hunter",
          favoredEnemy: "6",
          preparedSpells: "14",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "1",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Feral Senses",
          favoredEnemy: "6",
          preparedSpells: "14",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "1",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          favoredEnemy: "6",
          preparedSpells: "15",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Foe Slayer",
          favoredEnemy: "6",
          preparedSpells: "15",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
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
