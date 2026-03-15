<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Wizard Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Intelligence</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D6 per Wizard level</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Saving Throw Proficiencies</b></v-col>
          <v-col class="mr-10">Intelligence and Wisdom</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Skill Proficiencies</b></v-col>
          <v-col class="mr-10"
            >Choose 2: Arcana, History, Insight, Investigation, Medicine,
            Nature, or Religion</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Weapon Proficiencies</b></v-col>
          <v-col class="mr-10">Simple weapons</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Armor Training</b></v-col>
          <v-col class="mr-10">None</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Starting Equipment</b></v-col>
          <v-col class="mr-10"
            >Choose A or B: (A) 2 Daggers, Arcane Focus (Quarterstaff), Robe,
            Spellbook, Scholar's Pack, and 5 GP; or (B) 55 GP</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Wizard</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Wizard Traits table.</li>
        <li>
          Gain the Wizard's level 1 features, which are listed in the Wizard
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>Gain the Hit Point Die from the Core Wizard Traits table.</li>
        <li>
          Gain the Wizard's level 1 features, which are listed in the Wizard
          Features table. See the multiclassing rules to determine your
          available spell slots.
        </li>
      </div>
    </div>

    <!-- Summary table -->
    <div class="bg-grey-darken-4 center pa-5">
      <h2>Wizard Class Features</h2>
    </div>
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Cantrips</th>
            <th class="text-center">Prepared Spells</th>
            <th class="text-center">1st</th>
            <th class="text-center">2nd</th>
            <th class="text-center">3rd</th>
            <th class="text-center">4th</th>
            <th class="text-center">5th</th>
            <th class="text-center">6th</th>
            <th class="text-center">7th</th>
            <th class="text-center">8th</th>
            <th class="text-center">9th</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in levels" :key="item.level">
            <td class="text-center">{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.cantrips }}</td>
            <td class="text-center">{{ item.preparedSpells }}</td>
            <td class="text-center">{{ item.slot1 }}</td>
            <td class="text-center">{{ item.slot2 }}</td>
            <td class="text-center">{{ item.slot3 }}</td>
            <td class="text-center">{{ item.slot4 }}</td>
            <td class="text-center">{{ item.slot5 }}</td>
            <td class="text-center">{{ item.slot6 }}</td>
            <td class="text-center">{{ item.slot7 }}</td>
            <td class="text-center">{{ item.slot8 }}</td>
            <td class="text-center">{{ item.slot9 }}</td>
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
                    As a student of arcane magic, you have learned to cast
                    spells. Intelligence is your spellcasting ability for your
                    Wizard spells, and you can use an Arcane Focus or your
                    spellbook as a Spellcasting Focus.
                  </p>
                  <br />
                  <p>
                    You know three Wizard cantrips of your choice. Light, Mage
                    Hand, and Ray of Frost are recommended. You gain additional
                    cantrips at levels 4 and 10. Whenever you finish a Long
                    Rest, you can replace one cantrip with another Wizard
                    cantrip.
                  </p>
                  <br />
                  <p>
                    <b>Spellbook.</b> Your spellbook is a Tiny object containing
                    100 pages, readable only by you or someone casting Identify.
                    It starts with six level 1 Wizard spells of your choice.
                    Detect Magic, Feather Fall, Mage Armor, Magic Missile,
                    Sleep, and Thunderwave are recommended. You add two Wizard
                    spells to your book each time you gain a Wizard level after
                    1. You prepare spells from your spellbook; the number
                    increases as shown in the Prepared Spells column.
                  </p>
                  <br />
                  <p>
                    <b>Copying Spells.</b> You can copy a Wizard spell you find
                    into your spellbook. For each spell level, it takes 2 hours
                    and costs 50 GP to transcribe. Copying from your own book
                    takes 1 hour and 10 GP per level.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Ritual Adept</h2>
                  <br />
                  <p>
                    You can cast any spell as a Ritual if that spell has the
                    Ritual tag and the spell is in your spellbook. You needn't
                    have the spell prepared, but you must read from the book to
                    cast a spell in this way.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Arcane Recovery</h2>
                  <br />
                  <p>
                    When you finish a Short Rest, you can choose expended spell
                    slots to recover. The spell slots can have a combined level
                    equal to no more than half your Wizard level (round up), and
                    none of the slots can be level 6 or higher.
                  </p>
                  <br />
                  <p>
                    Once you use this feature, you can't do so again until you
                    finish a Long Rest.
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
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Scholar</h2>
                  <br />
                  <p>
                    While studying magic, you also specialized in an academic
                    field of study. Choose one of the following skills in which
                    you have proficiency: Arcana, History, Investigation,
                    Medicine, Nature, or Religion. You have Expertise in the
                    chosen skill.
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
                  <h2 class="elevation-10 pa-5">Wizard Subclass</h2>
                  <br />
                  <p>
                    You gain a Wizard subclass of your choice. A subclass is a
                    specialization that grants you features at certain Wizard
                    levels. For the rest of your career, you gain each of your
                    subclass's features that are of your Wizard level or lower.
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
                    again at Wizard levels 8, 12, and 16.
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
                  <h2 class="elevation-10 pa-5">Memorize Spell</h2>
                  <br />
                  <p>
                    Whenever you finish a Short Rest, you can study your
                    spellbook and replace one of the level 1+ Wizard spells you
                    have prepared for your Spellcasting feature with another
                    level 1+ spell from the book.
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

          <!-- Level 14 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 14</h2>
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

          <!-- Level 18 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 18</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Spell Mastery</h2>
                  <br />
                  <p>
                    You have achieved such mastery over certain spells that you
                    can cast them at will. Choose a level 1 and a level 2 spell
                    in your spellbook that have a casting time of an action. You
                    always have those spells prepared, and you can cast them at
                    their lowest level without expending a spell slot. To cast
                    either spell at a higher level, you must expend a spell
                    slot.
                  </p>
                  <br />
                  <p>
                    Whenever you finish a Long Rest, you can study your
                    spellbook and replace one of those spells with an eligible
                    spell of the same level from the book.
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
                    for which you qualify. Boon of Spell Recall is recommended.
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
                  <h2 class="elevation-10 pa-5">Signature Spells</h2>
                  <br />
                  <p>
                    Choose two level 3 spells in your spellbook as your
                    signature spells. You always have these spells prepared, and
                    you can cast each of them once at level 3 without expending
                    a spell slot. When you do so, you can't cast them in this
                    way again until you finish a Short or Long Rest. To cast
                    either spell at a higher level, you must expend a spell
                    slot.
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
        .push("/wiki/classes/wizard/" + label.replace(" ", "_").toLowerCase())
        .then(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },

  data() {
    return {
      subclasses: [
        { title: "Abjurer" },
        { title: "Diviner" },
        { title: "Evoker" },
        { title: "Illusionist" },
      ],
      icons: ["shield-halved", "eye", "bolt", "wand-magic-sparkles"],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Spellcasting, Ritual Adept, Arcane Recovery",
          cantrips: "3",
          preparedSpells: "4",
          slot1: "2",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Scholar",
          cantrips: "3",
          preparedSpells: "5",
          slot1: "3",
          slot2: "—",
          slot3: "—",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Wizard Subclass",
          cantrips: "3",
          preparedSpells: "6",
          slot1: "4",
          slot2: "2",
          slot3: "—",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          cantrips: "4",
          preparedSpells: "7",
          slot1: "4",
          slot2: "3",
          slot3: "—",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Memorize Spell",
          cantrips: "4",
          preparedSpells: "9",
          slot1: "4",
          slot2: "3",
          slot3: "2",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Subclass Feature",
          cantrips: "4",
          preparedSpells: "10",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "—",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "—",
          cantrips: "4",
          preparedSpells: "11",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "1",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          cantrips: "4",
          preparedSpells: "12",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "2",
          slot5: "—",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "—",
          cantrips: "4",
          preparedSpells: "14",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "1",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Subclass Feature",
          cantrips: "5",
          preparedSpells: "15",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "—",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "—",
          cantrips: "5",
          preparedSpells: "16",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          cantrips: "5",
          preparedSpells: "16",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "—",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "—",
          cantrips: "5",
          preparedSpells: "17",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Subclass Feature",
          cantrips: "5",
          preparedSpells: "18",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "—",
          slot9: "—",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "—",
          cantrips: "5",
          preparedSpells: "19",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "1",
          slot9: "—",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          cantrips: "5",
          preparedSpells: "21",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "1",
          slot9: "—",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "—",
          cantrips: "5",
          preparedSpells: "22",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "2",
          slot6: "1",
          slot7: "1",
          slot8: "1",
          slot9: "1",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Spell Mastery",
          cantrips: "5",
          preparedSpells: "23",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "3",
          slot6: "1",
          slot7: "1",
          slot8: "1",
          slot9: "1",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          cantrips: "5",
          preparedSpells: "24",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "3",
          slot6: "2",
          slot7: "1",
          slot8: "1",
          slot9: "1",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Signature Spells",
          cantrips: "5",
          preparedSpells: "25",
          slot1: "4",
          slot2: "3",
          slot3: "3",
          slot4: "3",
          slot5: "3",
          slot6: "2",
          slot7: "2",
          slot8: "1",
          slot9: "1",
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
