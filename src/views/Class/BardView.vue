<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Bard Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Charisma</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D8 per Bard level</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Saving Throw Proficiencies</b></v-col>
          <v-col class="mr-10">Dexterity and Charisma</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Skill Proficiencies</b></v-col>
          <v-col class="mr-10">Choose any 3 skills</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Tool Proficiencies</b></v-col>
          <v-col class="mr-10"> Choose 3 Musical Instruments</v-col>
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
            >Choose A or B: (A) Leather Armor, 2 Daggers, Musical Instrument of
            your choice, Entertainer’s Pack, and 19 GP; or (B) 90 GP</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Bard</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Bard Traits table.</li>
        <li>
          Gain the Bard's level 1 features, which are listed in the Bard
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>
          Gain the following traits from the Core Bard Traits table: Hit Point
          Die, proficiency in one skill of your choice, proficiency with one
          Musical Instrument of your choice, and training with Light armor.
        </li>
        <li>
          Gain the Bard's level 1 features, which are listed in the Bard
          Features table. See the multiclassing rules in multiclassing to
          determine your available spell slots.
        </li>
      </div>
    </div>
    <!-- Summary table of the class -->
    <div class="bg-grey-darken-4 center pa-5">
      <h2>Bard Class Features</h2>
    </div>
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <th></th>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Bardic Die</th>
            <th class="text-center">Cantrips</th>
            <th class="text-center">Prepared Spells</th>
            <th class="text-center">1</th>
            <th class="text-center">2</th>
            <th class="text-center">3</th>
            <th class="text-center">4</th>
            <th class="text-center">5</th>
            <th class="text-center">6</th>
            <th class="text-center">7</th>
            <th class="text-center">8</th>
            <th class="text-center">9</th>
          </tr>
        </thead>
        <tbody>
          <p></p>
          <tr v-for="item in levels" :key="item.level">
            <td>{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.bardic_die }}</td>
            <td class="text-center">{{ item.cantrip }}</td>
            <td class="text-center">{{ item.spell }}</td>
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
      </v-table>
    </div>
    <!-- Lvl 1 abilities and characteristic -->
    <div class="mt-5">
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
                  <h2 class="elevation-10 pa-5">Bardic Inspiration</h2>
                  <br />
                  <p>
                    You can supernaturally inspire others through words, music,
                    or dance. This inspiration is represented by your Bardic
                    Inspiration die, which is a d6.
                  </p>
                  <br />
                  <p>
                    <b>Using Bardic Inspiration.</b>As a Bonus Action, you can
                    inspire another creature within 60 feet of yourself who can
                    see or hear you. That creature gains one of your Bardic
                    Inspiration dice. A creature can have only one Bardic
                    Inspiration die at a time.
                  </p>
                  <br />
                  <p>
                    Once within the next hour when the creature fails a D20
                    Test, the creature can roll the Bardic Inspiration die and
                    add the number rolled to the d20, potentially turning the
                    failure into a success. A Bardic Inspiration die is expended
                    when it's rolled.
                  </p>
                  <br />
                  <p>
                    <b>Number of Uses.</b>You can confer a Bardic Inspiration
                    die a number of times equal to your Charisma modifier
                    (minimum of once), and you regain all expended uses when you
                    finish a Long Rest.
                  </p>
                  <br />
                  <p>
                    <b>At Higher Levels.</b>Your Bardic Inspiration die changes
                    when you reach certain Bard levels, as shown in the Bardic
                    Die column of the Bard Features table. The die becomes a d8
                    at level 5, a d10 at level 10, and a d12 at level 15.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Spellcasting</h2>
                  <br />
                  <p>
                    You have learned to cast spells through your bardic arts.
                    See chapter 7 for the rules on spellcasting. The information
                    below details how you use those rules with Bard spells,
                    which appear in the Bard spell list later in the class's
                    description.
                  </p>
                  <br />
                  <p>
                    <b>Cantrips. </b>You know two cantrips of your choice from
                    the Bard spell list. Dancing Lights and Vicious Mockery are
                    recommended.
                  </p>
                  <br />
                  <p>
                    Whenever you gain a Bard level, you can replace one of your
                    cantrips with another cantrip of your choice from the Bard
                    spell list.
                  </p>
                  <br />
                  <p>
                    When you reach Bard levels 4 and 10, you learn another
                    cantrip of your choice from the Bard spell list, as shown in
                    the Cantrips column of the Bard Features table.
                  </p>
                  <br />
                  <p>
                    <b>Spell Slots. </b>The Bard Features table shows how many
                    spell slots you have to cast your level 1+ spells. You
                    regain all expended slots when you finish a Long Rest.
                  </p>
                  <br />
                  <p>
                    <b>Prepared Spells of Level 1+. </b>You prepare the list of
                    level 1+ spells that are available for you to cast with this
                    feature. To start, choose four level 1 spells from the Bard
                    spell list. Charm Person, Color Spray, Dissonant Whispers,
                    and Healing Word are recommended.
                  </p>
                  <br />
                  <p>
                    The number of spells on your list increases as you gain Bard
                    levels, as shown in the Prepared Spells column of the Bard
                    Features table. Whenever that number increases, choose
                    additional spells from the Bard spell list until the number
                    of spells on your list matches the number on the table. The
                    chosen spells must be of a level for which you have spell
                    slots. For example, if you're a level 3 Bard, your list of
                    prepared spells can include six spells of levels 1 and 2 in
                    any combination.
                  </p>
                  <br />
                  <p>
                    If another Bard feature gives you spells that you always
                    have prepared, those spells don’t count against the number
                    of spells you can prepare with this feature, but those
                    spells otherwise count as Bard spells for you.
                  </p>
                  <br />
                  <p>
                    <b>Changing Your Prepared Spells.</b>Whenever you gain a
                    Bard level, you can replace one spell on your list with
                    another Bard spell for which you have spell slots.
                  </p>
                  <p>
                    <b>Spellcasting Ability. </b>Charisma is your spellcasting
                    ability for your Bard spells.
                  </p>
                  <p>
                    <b>Spellcasting Focus. </b>You can use a Musical Instrument
                    as a Spellcasting Focus for your Bard spells.
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
                  <h2 class="elevation-10 pa-5">Expertise</h2>
                  <br />
                  <p>
                    You gain Expertise (see the rules glossary) in two of your
                    skill proficiencies of your choice. Performance and
                    Persuasion are recommended if you have proficiency in them.
                  </p>
                  <br />
                  <p>
                    At Bard level 9, you gain Expertise in two more of your
                    skill proficiencies of your choice.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Jack of all Trades</h2>
                  <br />
                  <p>
                    You can add half your Proficiency Bonus (round down) to any
                    ability check you make that uses a skill proficiency you
                    lack and that doesn't otherwise use your Proficiency Bonus.
                  </p>
                  <br />
                  <p>
                    For example, if you make a Strength (Athletics) check and
                    lack Athletics proficiency, you can add half your
                    Proficiency Bonus to the check.
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
                  <h2 class="elevation-10 pa-5">Bard Subclass</h2>
                  <br />
                  <p>
                    You gain a Bard subclass of your choice. The College of
                    Dance, College of Glamour, College of Lore, and College of
                    Valor subclasses are detailed after this class's
                    description. A subclass is a specialization that grants you
                    features at certain Bard levels. For the rest of your
                    career, you gain each of your subclass’s features that are
                    of your Bard level or lower.
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
                    When you reach 4th level, and again at 8th, 12th, 16th, and
                    19th level, you can increase one ability score of your
                    choice by 2, or you can increase two ability scores of your
                    choice by 1. As normal, you can't increase an ability score
                    above 20 using this feature.
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
                  <h2 class="elevation-10 pa-5">Font of Inspiration</h2>
                  <br />
                  <p>
                    You now regain all your expended uses of Bardic Inspiration
                    when you finish a Short or Long Rest.
                  </p>
                  <br />
                  <p>
                    In addition, you can expend a spell slot (no action
                    required) to regain one expended use of Bardic Inspiration.
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
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 7</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Countercharm</h2>
                  <br />
                  <p>
                    You can use musical notes or words of power to disrupt
                    mind-influencing effects. If you or a creature within 30
                    feet of you fails a saving throw against an effect that
                    applies the Charmed or Frightened condition, you can take a
                    Reaction to cause the save to be rerolled, and the new roll
                    has Advantage.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 8</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col>
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You can increase one ability score of your choice by 2, or
                    you can increase two ability scores of your choice by 1. As
                    normal, you can't increase an ability score above 20 using
                    this feature.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 9</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col>
                  <h2 class="elevation-10 pa-5">Expertise</h2>
                  <br />
                  <p>
                    You gain Expertise in two more of your skill proficiencies
                    of your choice.
                  </p>
                </v-col>
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
                  <h2 class="elevation-10 pa-5">Magical Secrets</h2>
                  <br />
                  <p>
                    You've learned secrets from various magical traditions.
                    Whenever you reach a Bard level (including this level) and
                    the Prepared Spells number in the Bard Features table
                    increases, you can choose any of your new prepared spells
                    from the Bard, Cleric, Druid, and Wizard spell lists, and
                    the chosen spells count as Bard spells for you (see a
                    class’s section for its spell list). In addition, whenever
                    you replace a spell prepared for this class, you can replace
                    it with a spell from those lists.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 12</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col>
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You can increase one ability score of your choice by 2, or
                    you can increase two ability scores of your choice by 1. As
                    normal, you can't increase an ability score above 20 using
                    this feature.
                  </p>
                </v-col>
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
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 16</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    When you reach 4th level, and again at 8th, 12th, 16th, and
                    19th level, you can increase one ability score of your
                    choice by 2, or you can increase two ability scores of your
                    choice by 1. As normal, you can't increase an ability score
                    above 20 using this feature.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 18</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Superior Inspiration</h2>
                  <br />
                  <p>
                    When you roll Initiative, you regain expended uses of Bardic
                    Inspiration until you have two if you have fewer than that.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-10">
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

          <v-expansion-panel class="mb-10">
            <v-expansion-panel-title>
              <h2>Level 20</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Words of Creation</h2>
                  <br />
                  <p>
                    You have mastered two of the Words of Creation: the words of
                    life and death. You therefore always have the Power Word:
                    Heal and Power Word: Kill spells prepared. When you cast
                    either spell, you can target a second creature with it if
                    that creature is within 10 feet of the first target.
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
        "/wiki/classes/bard/" + label.replace(" ", "_").toLowerCase()
      );
    },
  },

  data() {
    return {
      subclasses: [
        {
          title: "Dance",
        },
        {
          title: "Glamour",
        },
        {
          title: "Lore",
        },

        {
          title: "Valor",
        },
      ],
      icons: ["shoe-prints", "hand-sparkles", "book", "khanda"],
      panel: [0],
      levels: [
        {
          level: "1st",
          profBonus: "+2",
          feature: "Bardic Inspiration, Spellcasting",
          cantrip: "2",
          spell: "4",
          first: "2",
          second: "-",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D6",
        },
        {
          level: "2nd",
          profBonus: "+2",
          feature: "Expertise, Jack of All Trades",
          cantrip: "2",
          spell: "5",
          first: "3",
          second: "-",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D6",
        },
        {
          level: "3rd",
          profBonus: "+2",
          feature: "Bard Subclass",
          cantrip: "2",
          spell: "6",
          first: "4",
          second: "2",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D6",
        },
        {
          level: "4th",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          cantrip: "3",
          spell: "7",
          first: "4",
          second: "3",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D6",
        },
        {
          level: "5th",
          profBonus: "+3",
          feature: "Font of Inspiration",
          cantrip: "3",
          spell: "8",
          first: "4",
          second: "3",
          third: "2",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D8",
        },
        {
          level: "6th",
          profBonus: "+3",
          feature: "Subclass Feature",
          cantrip: "3",
          spell: "9",
          first: "4",
          second: "3",
          third: "3",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D8",
        },
        {
          level: "7th",
          profBonus: "+3",
          feature: "Countercharm",
          cantrip: "3",
          spell: "10",
          first: "4",
          second: "3",
          third: "3",
          fourth: "1",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D8",
        },
        {
          level: "8th",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          cantrip: "3",
          spell: "11",
          first: "4",
          second: "3",
          third: "3",
          fourth: "2",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D8",
        },
        {
          level: "9th",
          profBonus: "+4",
          feature: "Expertise",
          cantrip: "3",
          spell: "12",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "1",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D8",
        },
        {
          level: "10th",
          profBonus: "+4",
          feature: "Magical Secrets",
          cantrip: "4",
          spell: "14",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D10",
        },
        {
          level: "11th",
          profBonus: "+4",
          feature: "",
          cantrip: "4",
          spell: "15",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D10",
        },
        {
          level: "12th",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          cantrip: "4",
          spell: "15",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "-",
          eight: "-",
          ninth: "-",
          bardic_die: "D10",
        },
        {
          level: "13th",
          profBonus: "+5",
          feature: "Song of Rest (d10)",
          cantrip: "4",
          spell: "16",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "-",
          ninth: "-",
          bardic_die: "D10",
        },
        {
          level: "14th",
          profBonus: "+5",
          feature: "Subclass Feature",
          cantrip: "4",
          spell: "18",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "-",
          ninth: "-",
          bardic_die: "D10",
        },
        {
          level: "15th",
          profBonus: "+5",
          feature: "",
          cantrip: "4",
          spell: "19",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "-",
          bardic_die: "D12",
        },
        {
          level: "16th",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          cantrip: "4",
          spell: "19",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "-",
          bardic_die: "D12",
        },
        {
          level: "17th",
          profBonus: "+6",
          feature: "",
          cantrip: "4",
          spell: "20",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "1",
          bardic_die: "D12",
        },
        {
          level: "18th",
          profBonus: "+6",
          feature: "Superior Inspiration",
          cantrip: "4",
          spell: "22",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "3",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "1",
          bardic_die: "D12",
        },
        {
          level: "19th",
          profBonus: "+6",
          feature: "Epic Boon",
          cantrip: "4",
          spell: "22",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "3",
          sixth: "2",
          seventh: "1",
          eight: "1",
          ninth: "1",
          bardic_die: "D12",
        },
        {
          level: "20th",
          profBonus: "+6",
          feature: "Words of Creation",
          cantrip: "4",
          spell: "22",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "3",
          sixth: "2",
          seventh: "2",
          eight: "1",
          ninth: "1",
          bardic_die: "D12",
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
