<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Sorcerer Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Charisma</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D6 per Sorcerer level</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Saving Throw Proficiencies</b></v-col>
          <v-col class="mr-10">Constitution and Charisma</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Skill Proficiencies</b></v-col>
          <v-col class="mr-10"
            >Choose 2: Arcana, Deception, Insight, Intimidation, Persuasion, or
            Religion</v-col
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
            >Choose A or B: (A) Spear, 2 Daggers, Arcane Focus (crystal),
            Dungeoneer's Pack, and 28 GP; or (B) 50 GP</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Sorcerer</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Sorcerer Traits table.</li>
        <li>
          Gain the Sorcerer's level 1 features, which are listed in the Sorcerer
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>Gain the Hit Point Die from the Core Sorcerer Traits table.</li>
        <li>
          Gain the Sorcerer's level 1 features, which are listed in the Sorcerer
          Features table. See the multiclassing rules to determine your
          available spell slots.
        </li>
      </div>
    </div>

    <!-- Summary table -->
    <div class="bg-grey-darken-4 center pa-5">
      <h2>Sorcerer Class Features</h2>
    </div>
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Sorcery Points</th>
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
            <td class="text-center">{{ item.sorceryPoints }}</td>
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
                    Drawing from your innate magic, you can cast spells.
                    Charisma is your spellcasting ability for your Sorcerer
                    spells, and you can use an Arcane Focus as a Spellcasting
                    Focus.
                  </p>
                  <br />
                  <p>
                    You know four Sorcerer cantrips of your choice. Light,
                    Prestidigitation, Shocking Grasp, and Sorcerous Burst are
                    recommended. You gain additional cantrips at levels 4 and
                    10. Whenever you gain a Sorcerer level, you can replace one
                    of your cantrips with another Sorcerer cantrip.
                  </p>
                  <br />
                  <p>
                    To start, choose two level 1 Sorcerer spells. Burning Hands
                    and Detect Magic are recommended. The number of spells on
                    your list increases as you gain Sorcerer levels. Whenever
                    you gain a Sorcerer level, you can replace one prepared
                    spell with another Sorcerer spell for which you have spell
                    slots.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Innate Sorcery</h2>
                  <br />
                  <p>
                    An event in your past left an indelible mark on you,
                    infusing you with a simmering magic. As a Bonus Action, you
                    can unleash that magic for 1 minute, during which you gain
                    the following benefits:
                  </p>
                  <br />
                  <p>
                    The spell save DC of your Sorcerer spells increases by 1.
                  </p>
                  <br />
                  <p>
                    You have Advantage on the attack rolls of Sorcerer spells
                    you cast.
                  </p>
                  <br />
                  <p>
                    You can use this feature twice, and you regain all expended
                    uses when you finish a Long Rest.
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
                  <h2 class="elevation-10 pa-5">Font of Magic</h2>
                  <br />
                  <p>
                    You can tap into the wellspring of magic within yourself,
                    represented by Sorcery Points. You have 2 Sorcery Points,
                    and you gain more as you reach higher levels, as shown in
                    the Sorcery Points column of the Sorcerer Features table.
                    You regain all expended Sorcery Points when you finish a
                    Long Rest.
                  </p>
                  <br />
                  <p>
                    <b>Converting Spell Slots to Sorcery Points.</b> You can
                    expend a spell slot to gain a number of Sorcery Points equal
                    to the slot's level (no action required).
                  </p>
                  <br />
                  <p>
                    <b>Creating Spell Slots.</b> As a Bonus Action, you can
                    transform unexpended Sorcery Points into one spell slot up
                    to level 5. Costs: level 1 = 2 pts, level 2 = 3 pts, level 3
                    = 5 pts, level 4 = 6 pts, level 5 = 7 pts. Any slot created
                    this way vanishes when you finish a Long Rest.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Metamagic</h2>
                  <br />
                  <p>
                    Because your magic flows from within, you can alter your
                    spells to suit your needs. You gain two Metamagic options of
                    your choice. You can use only one Metamagic option on a
                    spell when you cast it, unless otherwise noted. You gain two
                    more options at Sorcerer levels 10 and 17.
                  </p>
                  <br />
                  <p>
                    <b>Careful Spell (1 pt).</b> Up to Charisma modifier
                    creatures automatically succeed on their saving throw and
                    take no damage if they would take half on a success.
                  </p>
                  <br />
                  <p>
                    <b>Distant Spell (1 pt).</b> Double a spell's range, or
                    change a Touch spell to 30 feet.
                  </p>
                  <br />
                  <p>
                    <b>Empowered Spell (1 pt).</b> Reroll up to Charisma
                    modifier damage dice. Can be combined with another Metamagic
                    option.
                  </p>
                  <br />
                  <p>
                    <b>Extended Spell (1 pt).</b> Double a spell's duration (up
                    to 24 hours). Gain Advantage on Concentration saves for it.
                  </p>
                  <br />
                  <p>
                    <b>Heightened Spell (2 pts).</b> One target of the spell has
                    Disadvantage on saves against it.
                  </p>
                  <br />
                  <p>
                    <b>Quickened Spell (2 pts).</b> Change a spell's casting
                    time from Action to Bonus Action.
                  </p>
                  <br />
                  <p>
                    <b>Seeking Spell (1 pt).</b> If a spell attack misses,
                    reroll the d20. Can be combined with another Metamagic
                    option.
                  </p>
                  <br />
                  <p>
                    <b>Subtle Spell (1 pt).</b> Cast a spell without Verbal,
                    Somatic, or Material components (except consumed or costly
                    ones).
                  </p>
                  <br />
                  <p>
                    <b>Transmuted Spell (1 pt).</b> Change a spell's damage type
                    among: Acid, Cold, Fire, Lightning, Poison, Thunder.
                  </p>
                  <br />
                  <p>
                    <b>Twinned Spell (1 pt).</b> Increase a spell's effective
                    level by 1 to target an additional creature.
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
                  <h2 class="elevation-10 pa-5">Sorcerer Subclass</h2>
                  <br />
                  <p>
                    You gain a Sorcerer subclass of your choice. A subclass is a
                    specialization that grants you features at certain Sorcerer
                    levels. For the rest of your career, you gain each of your
                    subclass's features that are of your Sorcerer level or
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
                    again at Sorcerer levels 8, 12, and 16.
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
                  <h2 class="elevation-10 pa-5">Sorcerous Restoration</h2>
                  <br />
                  <p>
                    When you finish a Short Rest, you can regain expended
                    Sorcery Points, but no more than a number equal to half your
                    Sorcerer level (round down). Once you use this feature, you
                    can't do so again until you finish a Long Rest.
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

          <!-- Level 7 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 7</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Sorcery Incarnate</h2>
                  <br />
                  <p>
                    If you have no uses of Innate Sorcery left, you can use it
                    if you spend 2 Sorcery Points when you take the Bonus Action
                    to activate it.
                  </p>
                  <br />
                  <p>
                    In addition, while your Innate Sorcery feature is active,
                    you can use up to two of your Metamagic options on each
                    spell you cast.
                  </p>
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
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 10</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Metamagic</h2>
                  <br />
                  <p>
                    You gain two additional Metamagic options of your choice.
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

          <!-- Level 17 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 17</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Metamagic</h2>
                  <br />
                  <p>
                    You gain two additional Metamagic options of your choice.
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
                  <h2 class="elevation-10 pa-5">Arcane Apotheosis</h2>
                  <br />
                  <p>
                    While your Innate Sorcery feature is active, you can use one
                    Metamagic option on each of your turns without spending
                    Sorcery Points on it.
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
        .push("/wiki/classes/sorcerer/" + label.replace(" ", "_").toLowerCase())
        .then(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },

  data() {
    return {
      subclasses: [
        { title: "Aberrant Sorcery" },
        { title: "Clockwork Sorcery" },
        { title: "Draconic Sorcery" },
        { title: "Wild Magic Sorcery" },
      ],
      icons: ["brain", "gear", "dragon", "wand-magic-sparkles"],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Spellcasting, Innate Sorcery",
          sorceryPoints: "—",
          cantrips: "4",
          preparedSpells: "2",
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
          feature: "Font of Magic, Metamagic",
          sorceryPoints: "2",
          cantrips: "4",
          preparedSpells: "4",
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
          feature: "Sorcerer Subclass",
          sorceryPoints: "3",
          cantrips: "4",
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
          sorceryPoints: "4",
          cantrips: "5",
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
          feature: "Sorcerous Restoration",
          sorceryPoints: "5",
          cantrips: "5",
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
          sorceryPoints: "6",
          cantrips: "5",
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
          feature: "Sorcery Incarnate",
          sorceryPoints: "7",
          cantrips: "5",
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
          sorceryPoints: "8",
          cantrips: "5",
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
          sorceryPoints: "9",
          cantrips: "5",
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
          feature: "Metamagic",
          sorceryPoints: "10",
          cantrips: "6",
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
          sorceryPoints: "11",
          cantrips: "6",
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
          sorceryPoints: "12",
          cantrips: "6",
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
          sorceryPoints: "13",
          cantrips: "6",
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
          sorceryPoints: "14",
          cantrips: "6",
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
          level: "15",
          profBonus: "+5",
          feature: "—",
          sorceryPoints: "15",
          cantrips: "6",
          preparedSpells: "18",
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
          sorceryPoints: "16",
          cantrips: "6",
          preparedSpells: "18",
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
          feature: "Metamagic",
          sorceryPoints: "17",
          cantrips: "6",
          preparedSpells: "19",
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
          feature: "Subclass Feature",
          sorceryPoints: "18",
          cantrips: "6",
          preparedSpells: "20",
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
          sorceryPoints: "19",
          cantrips: "6",
          preparedSpells: "21",
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
          feature: "Arcane Apotheosis",
          sorceryPoints: "20",
          cantrips: "6",
          preparedSpells: "22",
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
