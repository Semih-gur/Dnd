<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Warlock Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Charisma</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D8 per Warlock level</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Saving Throw Proficiencies</b></v-col>
          <v-col class="mr-10">Wisdom and Charisma</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Skill Proficiencies</b></v-col>
          <v-col class="mr-10"
            >Choose 2: Arcana, Deception, History, Intimidation, Investigation,
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
          <v-col class="mr-10">Light armor</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Starting Equipment</b></v-col>
          <v-col class="mr-10"
            >Choose A or B: (A) Leather Armor, Sickle, 2 Daggers, Arcane Focus
            (orb), Book (occult lore), Scholar's Pack, and 15 GP; or (B) 100
            GP</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Warlock</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Warlock Traits table.</li>
        <li>
          Gain the Warlock's level 1 features, which are listed in the Warlock
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>
          Gain the following traits from the Core Warlock Traits table: Hit
          Point Die and training with Light armor.
        </li>
        <li>
          Gain the Warlock's level 1 features, which are listed in the Warlock
          Features table. See the multiclassing rules to determine your
          available spell slots.
        </li>
      </div>
    </div>

    <!-- Summary table -->
    <div class="bg-grey-darken-4 center pa-5">
      <h2>Warlock Class Features</h2>
    </div>
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Eldritch Invocations</th>
            <th class="text-center">Cantrips</th>
            <th class="text-center">Prepared Spells</th>
            <th class="text-center">Spell Slots</th>
            <th class="text-center">Slot Level</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in levels" :key="item.level">
            <td class="text-center">{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.invocations }}</td>
            <td class="text-center">{{ item.cantrips }}</td>
            <td class="text-center">{{ item.preparedSpells }}</td>
            <td class="text-center">{{ item.spellSlots }}</td>
            <td class="text-center">{{ item.slotLevel }}</td>
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
                  <h2 class="elevation-10 pa-5">Eldritch Invocations</h2>
                  <br />
                  <p>
                    You have unearthed Eldritch Invocations, pieces of forbidden
                    knowledge that imbue you with an abiding magical ability or
                    other lessons. You gain one invocation of your choice, such
                    as Pact of the Tome.
                  </p>
                  <br />
                  <p>
                    If an invocation has a prerequisite, you must meet it to
                    learn that invocation. Whenever you gain a Warlock level,
                    you can replace one of your invocations with another one for
                    which you qualify. You can't replace an invocation if it's a
                    prerequisite for another invocation that you have.
                  </p>
                  <br />
                  <p>
                    You gain more invocations as you reach higher Warlock
                    levels, as shown in the Eldritch Invocations column of the
                    Warlock Features table.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Pact Magic</h2>
                  <br />
                  <p>
                    Through occult ceremony, you have formed a pact with a
                    mysterious entity to gain magical powers. Charisma is your
                    spellcasting ability, and you can use an Arcane Focus as a
                    Spellcasting Focus.
                  </p>
                  <br />
                  <p>
                    You know two Warlock cantrips of your choice. Eldritch Blast
                    and Prestidigitation are recommended. You gain additional
                    cantrips at levels 4 and 10.
                  </p>
                  <br />
                  <p>
                    To start, choose two level 1 Warlock spells. Charm Person
                    and Hex are recommended. Your Pact Magic spell slots all
                    share the same level, as shown in the Warlock Features
                    table, and you regain all expended Pact Magic spell slots
                    when you finish a Short or Long Rest.
                  </p>
                  <br />
                  <p>
                    For example, when you're a level 5 Warlock, you have two
                    level 3 spell slots. To cast a level 1 spell, you must spend
                    one of those slots and cast it as a level 3 spell.
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
                  <h2 class="elevation-10 pa-5">Magical Cunning</h2>
                  <br />
                  <p>
                    You can perform an esoteric rite for 1 minute. At the end of
                    it, you regain expended Pact Magic spell slots but no more
                    than a number equal to half your maximum (round up).
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

          <!-- Level 3 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 3</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Warlock Subclass</h2>
                  <br />
                  <p>
                    You gain a Warlock subclass of your choice. A subclass is a
                    specialization that grants you features at certain Warlock
                    levels. For the rest of your career, you gain each of your
                    subclass's features that are of your Warlock level or lower.
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
                    again at Warlock levels 8, 12, and 16.
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

          <!-- Level 9 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 9</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Contact Patron</h2>
                  <br />
                  <p>
                    You can now communicate with your patron directly. You
                    always have the Contact Other Plane spell prepared. With
                    this feature, you can cast the spell without expending a
                    spell slot to contact your patron, and you automatically
                    succeed on the spell's saving throw.
                  </p>
                  <br />
                  <p>
                    Once you cast the spell with this feature, you can't do so
                    in this way again until you finish a Long Rest.
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
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 11</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Mystic Arcanum</h2>
                  <br />
                  <p>
                    Your patron grants you a magical secret called an arcanum.
                    Choose one level 6 Warlock spell as this arcanum. You can
                    cast your arcanum spell once without expending a spell slot,
                    and you must finish a Long Rest before you can cast it in
                    this way again.
                  </p>
                  <br />
                  <p>
                    You gain additional arcanum spells as you level up: a level
                    7 spell at Warlock level 13, a level 8 spell at level 15,
                    and a level 9 spell at level 17. Whenever you gain a Warlock
                    level, you can replace one of your arcanum spells with
                    another Warlock spell of the same level.
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
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 13</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Mystic Arcanum (Level 7)</h2>
                  <br />
                  <p>
                    Your patron grants you another magical secret. Choose one
                    level 7 Warlock spell as your second arcanum. You can cast
                    it once without a spell slot per Long Rest.
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

          <!-- Level 15 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 15</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Mystic Arcanum (Level 8)</h2>
                  <br />
                  <p>
                    Your patron grants you another magical secret. Choose one
                    level 8 Warlock spell as your third arcanum. You can cast it
                    once without a spell slot per Long Rest.
                  </p>
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
                  <h2 class="elevation-10 pa-5">Mystic Arcanum (Level 9)</h2>
                  <br />
                  <p>
                    Your patron grants you a final magical secret. Choose one
                    level 9 Warlock spell as your fourth arcanum. You can cast
                    it once without a spell slot per Long Rest.
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
                    for which you qualify. Boon of Fate is recommended.
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
                  <h2 class="elevation-10 pa-5">Eldritch Master</h2>
                  <br />
                  <p>
                    When you use your Magical Cunning feature, you regain all
                    your expended Pact Magic spell slots instead of only half.
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
        .push("/wiki/classes/warlock/" + label.replace(" ", "_").toLowerCase())
        .then(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },

  data() {
    return {
      subclasses: [
        { title: "Archfey Patron" },
        { title: "Celestial Patron" },
        { title: "Fiend Patron" },
        { title: "Great Old One Patron" },
      ],
      icons: ["leaf", "sun", "fire", "eye"],
      panel: [0],
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
          feature: "Mystic Arcanum (level 6 spell)",
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
          feature: "Mystic Arcanum (level 7 spell)",
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
          feature: "Mystic Arcanum (level 8 spell)",
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
          feature: "Mystic Arcanum (level 9 spell)",
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
    };
  },
};
</script>

<style scoped>
.center {
  width: 80%;
}
</style>
