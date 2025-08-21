<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Druid Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Wisdom</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D8 per Druid level</v-col>
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
            >Choose 2: Arcana, Animal Handling, Insight, Medicine, Nature,
            Perception, Religion, or Survival</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Weapon Proficiencies</b></v-col>
          <v-col class="mr-10">Simple weapons</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Tool Proficiencies</b></v-col>
          <v-col class="mr-10">Herbalism Kit</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Armor Training</b></v-col>
          <v-col class="mr-10">Light armor and Shields</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Starting Equipment</b></v-col>
          <v-col class="mr-10"
            >Choose A or B: (A) Leather Armor, Shield, Sickle, Druidic Focus
            (Quarterstaff), Explorer's Pack, Herbalism Kit, and 9 GP; or (B) 50
            GP
          </v-col>
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Druid</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Druid Traits table.</li>
        <li>
          Gain the Druid’s level 1 features, which are listed in the Druid
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>
          Gain the following traits from the Core Druid Traits table: Hit Point
          Die and training with Light armor and Shields.
        </li>
        <li>
          Gain the Druid’s level 1 features, which are listed in the Druid
          Features table. See the multiclassing rules in multiclassing to
          determine your available spell slots.
        </li>
      </div>
    </div>
    <!-- Summary table of the class -->
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <th class="text-center" colspan="5"></th>
          <th class="text-center" colspan="7">Spell Slots Known</th>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Channel Divinity</th>
            <th class="text-center">Cantrip Known</th>
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
          <tr v-for="item in levels" :key="item.level">
            <td class="text-center">{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.wildShape }}</td>
            <td class="text-center">{{ item.cantrip }}</td>
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
                  <h2 class="elevation-10 pa-5">Spellcasting</h2>
                  <br />
                  <p>
                    You have learned to cast spells through studying the
                    mystical forces of nature. See chapter 7 for the rules on
                    spellcasting. The information below details how you use
                    those rules with Druid spells, which appear on the Druid
                    spell list later in the class’s description.
                  </p>
                  <br />
                  <p>
                    <b>Cantrips.</b> You know two cantrips of your choice from
                    the Druid spell list. Druidcraft and Produce Flame are
                    recommended.
                  </p>
                  <br />
                  <p>
                    Whenever you gain a Druid level, you can replace one of your
                    cantrips with another cantrip of your choice from the Druid
                    spell list.
                  </p>
                  <br />
                  <p>
                    When you reach Druid levels 4 and 10, you learn another
                    cantrip of your choice from the Druid spell list, as shown
                    in the Cantrips column of the Druid Features table.
                  </p>
                  <br />
                  <p>
                    <b>Spell Slots. </b>The Druid Features table shows how many
                    spell slots you have to cast your level 1+ spells. You
                    regain all expended slots when you finish a Long Rest.
                  </p>
                  <br />
                  <p>
                    <b>Prepared Spells of Level 1+. </b>ou prepare the list of
                    level 1+ spells that are available for you to cast with this
                    feature. To start, choose four level 1 spells from the Druid
                    spell list. Animal Friendship, Cure Wounds, Faerie Fire, and
                    Thunderwave are recommended.
                  </p>
                  <br />
                  <p>
                    The number of spells on your list increases as you gain
                    Druid levels, as shown in the Prepared Spells column of the
                    Druid Features table. Whenever that number increases, choose
                    additional spells from the Druid spell list until the number
                    of spells on your list matches the number on the table. The
                    chosen spells must be of a level for which you have spell
                    slots. For example, if you’re a level 3 Druid, your list of
                    prepared spells can include six spells of levels 1 and 2 in
                    any combination.
                  </p>
                  <br />
                  <p>
                    If another Druid feature gives you spells that you always
                    have prepared, those spells don’t count against the number
                    of spells you can prepare with this feature, but those
                    spells otherwise count as Druid spells for you.
                  </p>
                  <br />
                  <p>
                    <b>Changing Your Prepared Spells.</b> WWhenever you finish a
                    Long Rest, you can change your list of prepared spells,
                    replacing any of the spells with other Druid spells for
                    which you have spell slots.
                  </p>
                  <br />
                  <p>
                    <b>Spellcasting Ability. </b>Wisdom is your spellcasting
                    ability for your Druid spells.
                  </p>
                  <br />
                  <p>
                    <b>Spellcasting Focus. </b>You can use a Druidic Focus as a
                    Spellcasting Focus for your Druid spells.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Druidic</h2>
                  <br />
                  <p>
                    You know Druidic, the secret language of Druids. While
                    learning this ancient tongue, you also unlocked the magic of
                    communicating with animals; you always have the Speak with
                    Animals spell prepared.
                  </p>
                  <br />
                  <p>
                    You can use Druidic to leave hidden messages. You and others
                    who know Druidic automatically spot such a message. Others
                    spot the message’s presence with a successful DC 15
                    Intelligence (Investigation) check but can’t decipher it
                    without magic.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Primal Order</h2>
                  <br />
                  <p>
                    You have dedicated yourself to one of the following sacred
                    roles of your choice.
                  </p>
                  <br />
                  <p>
                    <b>Magician.</b> You know one extra cantrip from the Druid
                    spell list. In addition, your mystical connection to nature
                    gives you a bonus to your Intelligence (Arcana or Nature)
                    checks. The bonus equals your Wisdom modifier (minimum bonus
                    of +1).
                  </p>
                  <br />
                  <p>
                    <b>Warden. </b>Trained for battle, you gain proficiency with
                    Martial weapons and training with Medium armor.
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
                  <h2 class="elevation-10 pa-5">Wild Shape</h2>
                  <br />
                  <p>
                    The power of nature allows you to assume the form of an
                    animal. As a Bonus Action, you shape-shift into a Beast form
                    that you have learned for this feature (see “Known Forms”
                    below). You stay in that form for a number of hours equal to
                    half your Druid level or until you use Wild Shape again,
                    have the Incapacitated condition, or die. You can also leave
                    the form early as a Bonus Action.
                  </p>
                  <br />
                  <p>
                    <b>Number of Uses. </b>You can use Wild Shape twice. You
                    regain one expended use when you finish a Short Rest, and
                    you regain all expended uses when you finish a Long Rest.
                  </p>
                  <br />
                  <p>
                    You gain additional uses when you reach certain Druid
                    levels, as shown in the Wild Shape column of the Druid
                    Features table.
                  </p>
                  <br />
                  <p>
                    <b>Known Forms. </b> You know four Beast forms for this
                    feature, chosen from among Beast stat blocks that have a
                    maximum Challenge Rating of 1/4 and that lack a Fly Speed
                    (see appendix B for stat block options). The Rat, Riding
                    Horse, Spider, and Wolf are recommended. Whenever you finish
                    a Long Rest, you can replace one of your known forms with
                    another eligible form.
                  </p>
                  <br />
                  <p>
                    When you reach certain Druid levels, your number of known
                    forms and the maximum Challenge Rating for those forms
                    increases, as shown in the Beast Shapes table. In addition,
                    starting at level 8, you can adopt a form that has a Fly
                    Speed.
                  </p>
                  <br />
                  <p>
                    When choosing known forms, you may look in the Monster
                    Manual or elsewhere for eligible Beasts if the Dungeon
                    Master permits you to do so.
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
                  <h2 class="elevation-10 pa-5">Cleric Subclass</h2>
                  <br />
                  <p>
                    You gain a Cleric subclass of your choice. The Life Domain,
                    Light Domain, Trickery Domain, and War Domain subclasses are
                    detailed after this class’s description. A subclass is a
                    specialization that grants you features at certain Cleric
                    levels. For the rest of your career, you gain each of your
                    subclass’s features that are of your Cleric level or lower.
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
                    again at Cleric levels 8, 12, and 16.
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
                  <h2 class="elevation-10 pa-5">Sear Undead</h2>
                  <br />
                  <p>
                    Whenever you use Turn Undead, you can roll a number of d8s
                    equal to your Wisdom modifier (minimum of 1d8) and add the
                    rolls together. Each Undead that fails its saving throw
                    against that use of Turn Undead takes Radiant damage equal
                    to the roll’s total. This damage doesn’t end the turn
                    effect.
                  </p>
                  <br />
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
              <h2>Level 6</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Blessed Strikes</h2>
                  <br />
                  <p>
                    Divine power infuses you in battle. You gain one of the
                    following options of your choice (if you get either option
                    from a Cleric subclass in an older book, use only the option
                    you choose for this feature).
                  </p>
                  <br />
                  <p>
                    <b>Divine Strike. </b>Once on each of your turns when you
                    hit a creature with an attack roll using a weapon, you can
                    cause the target to take an extra 1d8 Necrotic or Radiant
                    damage (your choice).
                  </p>
                  <br />
                  <p>
                    <b>Potent Spellcasting. </b>Add your Wisdom modifier to the
                    damage you deal with any Cleric cantrip.
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
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify. You gain this feature
                    again at Cleric levels 8, 12, and 16.
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
                  <h2 class="elevation-10 pa-5">Divine Intervention</h2>
                  <br />
                  <p>
                    You can call on your deity or pantheon to intervene on your
                    behalf. As a Magic action, choose any Cleric spell of level
                    5 or lower that doesn’t require a Reaction to cast. As part
                    of the same action, you cast that spell without expending a
                    spell slot or needing Material components. You can’t use
                    this feature again until you finish a Long Rest.
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
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify. You gain this feature
                    again at Cleric levels 8, 12, and 16.
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
                  <h2 class="elevation-10 pa-5">Improved Blessed Strikes</h2>
                  <br />
                  <p>
                    The option you chose for Blessed Strikes grows more
                    powerful.
                  </p>
                  <br />
                  <p>
                    <b>Divine Strike. </b>The extra damage of your Divine Strike
                    increases to 2d8.
                  </p>
                  <br />
                  <p>
                    <b>otent Spellcasting. </b>When you cast a Cleric cantrip
                    and deal damage to a creature with it, you can give vitality
                    to yourself or another creature within 60 feet of yourself,
                    granting a number of Temporary Hit Points equal to twice
                    your Wisdom modifier.
                  </p>
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
                <v-col>
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify. You gain this feature
                    again at Cleric levels 8, 12, and 16.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 17</h2>
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

          <v-expansion-panel class="mb-10">
            <v-expansion-panel-title>
              <h2>Level 20</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Greater Divine Intervention</h2>
                  <br />
                  <p>
                    You can call on even more powerful divine intervention. When
                    you use your Divine Intervention feature, you can choose
                    Wish when you select a spell. If you do so, you can’t use
                    Divine Intervention again until you finish 2d4 Long Rests.
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
          title: "Land",
        },
        {
          title: "Moon",
        },
        {
          title: "Sea",
        },
        {
          title: "Stars",
        },
      ],
      icons: ["mountain-sun", "moon", "water", "star"],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Spellcasting, Druidic, Primal Order",
          wildShape: "-",
          cantrip: "2",
          first: "2",
          second: "-",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Wild Shape, Wild Companion",
          wildShape: "2",
          cantrip: "2",
          first: "3",
          second: "-",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Druid Subclass",
          wildShape: "2",
          cantrip: "2",
          first: "4",
          second: "2",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          wildShape: "2",
          cantrip: "3",
          first: "4",
          second: "3",
          third: "-",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Wild Resurgence",
          wildShape: "2",
          cantrip: "3",
          first: "4",
          second: "3",
          third: "2",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Subclass Feature",
          wildShape: "3",
          cantrip: "3",
          first: "4",
          second: "3",
          third: "3",
          fourth: "-",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Elemental Fury",
          wildShape: "3",
          cantrip: "3",
          first: "4",
          second: "3",
          third: "3",
          fourth: "1",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          wildShape: "3",
          cantrip: "3",
          first: "4",
          second: "3",
          third: "3",
          fourth: "2",
          fifth: "-",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "------",
          wildShape: "3",
          cantrip: "3",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "1",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Subclass Feature",
          wildShape: "3",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "-",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "------",
          wildShape: "3",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          wildShape: "3",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "-",
          eight: "-",
          ninth: "-",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "------",
          wildShape: "3",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "-",
          ninth: "-",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Subclass Feature",
          wildShape: "3",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "-",
          ninth: "-",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Improved Elemental Fury",
          wildShape: "3",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "-",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          wildShape: "3",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "-",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "------",
          wildShape: "4",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "2",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "1",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Beast Spells",
          wildShape: "4",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "3",
          sixth: "1",
          seventh: "1",
          eight: "1",
          ninth: "1",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          wildShape: "4",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "3",
          sixth: "2",
          seventh: "1",
          eight: "1",
          ninth: "1",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Archdruid",
          wildShape: "4",
          cantrip: "4",
          first: "4",
          second: "3",
          third: "3",
          fourth: "3",
          fifth: "3",
          sixth: "2",
          seventh: "2",
          eight: "1",
          ninth: "1",
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
