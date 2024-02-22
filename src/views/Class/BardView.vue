<template>
  <div class="mt-15">
    <!-- Summary table of the class -->
    <div class="center">
      <v-table>
        <thead>
          <th class="text-center" colspan="5"></th>
          <th class="text-center" colspan="7">Spell Slots Known</th>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Cantrip Known</th>
            <th class="text-center">Spells Known</th>
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
            <td>{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
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

      <div class="bg-grey-darken-4 center pa-5">
        <h2>Spell Casting</h2>
        <p>
          You have learned to untangle and reshape the fabric of reality in
          harmony with your wishes and music. Your spells are part of your vast
          repertoire, magic that you can tune to different situations.
        </p>
        <br />
        <h3>Cantrips</h3>
        <p>
          You know two cantrips of your choice from the bard spell list. You
          learn additional bard cantrips of your choice at higher levels, as
          shown in the Cantrips Known column of the Bard table.
        </p>
        <br />
        <h3>Spell Slots</h3>
        <br />
        <p>
          The Bard table shows how many spell slots you have to cast your bard
          spells of 1st level and higher. To cast one of these spells, you must
          expend a slot of the spell's level or higher. You regain all expended
          spell slots when you finish a long rest. For example, if you know the
          1st-level spell Cure Wounds and have a 1st-level and a 2nd-level spell
          slot available, you can cast Cure Wounds using either slot.
        </p>
        <br />
        <h3>Spells Known of 1st Level and Higher</h3>
        <br />
        <p>
          You know four 1st-level spells of your choice from the bard spell
          list.
        </p>
        <br />
        <p>
          The Spells Known column of the Bard table shows when you learn more
          bard spells of your choice. Each of these spells must be of a level
          for which you have spell slots, as shown on the table. For instance,
          when you reach 3rd level in this class, you can learn one new spell of
          1st or 2nd level.
        </p>
        <br />
        <p>
          Additionally, when you gain a level in this class, you can choose one
          of the bard spells you know and replace it with another spell from the
          bard spell list, which also must be of a level for which you have
          spell slots.
        </p>
        <br />
        <h2>Spellcasting Ability</h2>
        <br />
        <p>
          Charisma is your spellcasting ability for your bard spells. Your magic
          comes from the heart and soul you pour into the performance of your
          music or oration. You use your Charisma whenever a spell refers to
          your spellcasting ability. In addition, you use your Charisma modifier
          when setting the saving throw DC for a bard spell you cast and when
          making an attack roll with one.
        </p>
        <br />

        <p>
          <strong>Spell Save DC </strong> = 8 + your proficiency bonus + your
          Charisma modifier
        </p>

        <br />
        <p>
          <strong>Spell Attack Modifier </strong> = your proficiency bonus +
          your Charisma modifier
        </p>
        <br />
        <h2>Ritual Casting</h2>
        <br />
        <p>
          You can cast any bard spell you know as a ritual if that spell has the
          ritual tag.
        </p>
        <br />
        <h2>Spellcasting Focus</h2>
        <br />
        <p>
          You can use a musical instrument (found in chapter 5) as a
          spellcasting focus for your bard spells.
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
                  <h2 class="elevation-10 pa-5">Bardic Inspiration</h2>
                  <br />
                  <p>
                    You can inspire others through stirring words or music. To
                    do so, you use a <b>bonus action</b> on your turn to choose
                    one creature other than yourself within 60 feet of you who
                    can hear you. That creature gains one Bardic Inspiration
                    die, a d6.
                  </p>
                  <br />
                  <p>
                    Once within the next 10 minutes, the creature can roll the
                    die and add the number rolled to one ability check, attack
                    roll, or saving throw it makes. The creature can wait until
                    after it rolls the d20 before deciding to use the Bardic
                    Inspiration die, but must decide before the DM says whether
                    the roll succeeds or fails. Once the Bardic Inspiration die
                    is rolled, it is lost. A creature can have only one Bardic
                    Inspiration die at a time.
                  </p>
                  <br />
                  <p>
                    You can use this feature a number of times equal to your
                    Charisma modifier (a minimum of once). You regain any
                    expended uses when you finish a long rest.
                  </p>
                  <p>
                    Your Bardic Inspiration die changes when you reach certain
                    levels in this class. The die becomes a d8 at 5th level, a
                    d10 at 10th level, and a d12 at 15th level.
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
                  <h2 class="elevation-10 pa-5">Jack of All Trades</h2>
                  <br />
                  <p>
                    Starting at 2nd level, you can add half your proficiency
                    bonus, rounded down, to any ability check you make that
                    doesn't already include your proficiency bonus.
                  </p>
                  <br />
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Song of Rest</h2>
                  <br />
                  <p>
                    Beginning at 2nd level, you can use soothing music or
                    oration to help revitalize your wounded allies during a
                    short rest. If you or any friendly creatures who can hear
                    your performance regain hit points at the end of the short
                    rest by spending one or more Hit Dice, each of those
                    creatures regains an extra 1d6 hit points.
                  </p>
                  <br />
                  <p>
                    The extra Hit Points increase when you reach certain levels
                    in this class: to 1d8 at 9th level, to 1d10 at 13th level,
                    and to 1d12 at 17th level.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">
                    Magical Inspiration (Optional)
                  </h2>
                  <br />
                  <p>
                    At 2nd level, if a creature has a Bardic Inspiration die
                    from you and casts a spell that restores hit points or deals
                    damage, the creature can roll that die and choose a target
                    affected by the spell. Add the number rolled as a bonus to
                    the hit points regained or the damage dealt. The Bardic
                    Inspiration die is then lost.
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
                  <h2 class="elevation-10 pa-5">Bard College</h2>
                  <br />
                  <p>
                    At 3rd level, you delve into the advanced techniques of a
                    bard college of your choice. Your choice grants you features
                    at 3rd level and again at 6th and 14th level.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Expertise</h2>
                  <br />
                  <p>
                    At 3rd level, choose two of your skill proficiencies. Your
                    proficiency bonus is doubled for any ability check you make
                    that uses either of the chosen proficiencies.
                  </p>
                  <br />
                  <p>
                    At 10th level, you can choose another two skill
                    proficiencies to gain this benefit.
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
                    Your speed increases by 10 feet while you aren't wearing
                    heavy armor
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
          title: "Creation",
        },
        {
          title: "Eloquence",
        },
        {
          title: "Glamour",
        },
        {
          title: "Lore",
        },
        {
          title: "Spirits",
        },
        {
          title: "Swords",
        },
        {
          title: "Valor",
        },
        {
          title: "Whispers",
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
          level: "1st",
          profBonus: "+2",
          feature: "Spellcasting, Bardic Inspiration (d6)",
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
        },
        {
          level: "2nd",
          profBonus: "+2",
          feature:
            "Jack of All Trades, Song of Rest (d6), Magical Inspiration (Optional)",
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
        },
        {
          level: "3rd",
          profBonus: "+2",
          feature: "Bard College, Expertise",
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
        },
        {
          level: "4th",
          profBonus: "+2",
          feature: "Ability Score Improvement, Bardic Versatility (Optional)",
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
        },
        {
          level: "5th",
          profBonus: "+3",
          feature: "Bardic Inspiration (d8), Font of Inspiration",
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
        },
        {
          level: "6th",
          profBonus: "+3",
          feature: "Countercharm, Bard College feature",
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
        },
        {
          level: "7th",
          profBonus: "+3",
          feature: "",
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
        },
        {
          level: "8th",
          profBonus: "+3",
          feature: "Ability Score Improvement, Bardic Versatility (Optional)",
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
        },
        {
          level: "9th",
          profBonus: "+4",
          feature: "Song of Rest (d8)",
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
        },
        {
          level: "10th",
          profBonus: "+4",
          feature: "Bardic Inspiration (d10), Expertise, Magical Secrets",
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
        },
        {
          level: "12th",
          profBonus: "+4",
          feature: "Ability Score Improvement, Bardic Versatility (Optional)",
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
        },
        {
          level: "14th",
          profBonus: "+5",
          feature: "Magical Secrets, Bard College feature",
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
        },
        {
          level: "15th",
          profBonus: "+5",
          feature: "Bardic Inspiration (d12)",
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
        },
        {
          level: "16th",
          profBonus: "+5",
          feature: "Ability Score Improvement, Bardic Versatility (Optional)",
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
        },
        {
          level: "17th",
          profBonus: "+6",
          feature: "Song of Rest (d12)",
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
        },
        {
          level: "18th",
          profBonus: "+6",
          feature: "Magical Secrets",
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
        },
        {
          level: "19th",
          profBonus: "+6",
          feature: "Ability Score Improvement, Bardic Versatility (Optional)",
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
        },
        {
          level: "20th",
          profBonus: "+6",
          feature: "Superior Inspiration",
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
