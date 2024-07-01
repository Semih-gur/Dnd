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
    <div class="center mb-5">
      <v-card>
        <v-row>
          <v-col></v-col>
          <v-col cols="10" class="text-center ml-5">Spell Slots</v-col>
        </v-row>
        <v-row>
          <v-col col="1" class="text-center tableText"> Level </v-col>
          <v-col col="1" class="text-center tableText">
            Proficiency Bonus
          </v-col>
          <v-col col="1" class="text-center tableText"> Unlocked </v-col>
          <v-col col="1" class="text-center tableText"> Cantrips Known </v-col>
          <v-col col="1" class="text-center tableText"> Spells Known </v-col>
          <v-col col="1" class="text-center tableText"> 1 </v-col>
          <v-col col="1" class="text-center tableText"> 2 </v-col>
          <v-col col="1" class="text-center tableText"> 3 </v-col>
          <v-col col="1" class="text-center tableText"> 4 </v-col>
          <v-col col="1" class="text-center tableText"> 5 </v-col>
          <v-col col="1" class="text-center tableText"> 6 </v-col>
          <v-col col="1" class="text-center tableText"> 7 </v-col>
          <v-col col="1" class="text-center tableText"> 8 </v-col>
          <v-col col="1" class="text-center tableText"> 9 </v-col>
        </v-row>
        <v-divider class="mb-3 mt-2"></v-divider>

        <v-card v-for="item in levels" :key="item.level">
          <div>
            <v-row class="card" @click="clicked(item.level)">
              <v-col col="1" class="tableText">
                {{ item.level }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.profBonus }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.feature }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.cantrip }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.spell }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.first }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.second }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.third }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.fourth }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.fifth }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.sixth }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.seventh }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.eight }}
              </v-col>
              <v-col col="1" class="text-center tableText">
                {{ item.ninth }}
              </v-col>
            </v-row>

            <v-divider></v-divider>
            <v-row class="dropdown" v-if="clickedRow == 1 && item.level == 1">
              <v-col>
                <h2 class="elevation-10 pa-5">Bardic Inspiration</h2>
                <br />
                You can inspire others through stirring words or music. To do
                so, you use a bonus action on your turn to choose one creature
                other than yourself within 60 feet of you who can hear you. That
                creature gains one Bardic Inspiration die, a d6. <br /><br />
                Once within the next 10 minutes, the creature can roll the die
                and add the number rolled to one ability check, attack roll, or
                saving throw it makes. The creature can wait until after it
                rolls the d20 before deciding to use the Bardic Inspiration die,
                but must decide before the DM says whether the roll succeeds or
                fails. Once the Bardic Inspiration die is rolled, it is lost. A
                creature can have only one Bardic Inspiration die at a time.
                <br /><br />
                You can use this feature a number of times equal to your
                Charisma modifier (a minimum of once). You regain any expended
                uses when you finish a long rest. Your Bardic Inspiration die
                changes when you reach certain levels in this class.
                <br /><br />
                The die becomes a d8 at 5th level, a d10 at 10th level, and a
                d12 at 15th level.
              </v-col>
              <v-col>
                <h2 class="elevation-10 pa-5">Spell Casting</h2>
                <br />
                Charisma is your spellcasting ability for your bard spells.
                <br /><br />
                <b> Spell save DC</b> = 8 + your proficiency bonus + your
                Charisma modifier <br /><br />
                <b>Spell attack modifier</b> = your proficiency bonus + your
                Charisma modifier <br /><br />
                You know two cantrips of your choice from the bard spell list.
                You learn additional bard cantrips of your choice at higher
                levels, as shown in the Cantrips Known column of the Bard table.
                <br /><br />
                You know four 1st-level spells of your choice from the bard
                spell list. <br /><br />
              </v-col>
            </v-row>
            <v-row class="dropdown" v-if="clickedRow == 2 && item.level == 2">
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
                  Beginning at 2nd level, you can use soothing music or oration
                  to help revitalize your wounded allies during a short rest. If
                  you or any friendly creatures who can hear your performance
                  regain hit points at the end of the short rest by spending one
                  or more Hit Dice, each of those creatures regains an extra 1d6
                  hit points. <br /><br />
                  The extra Hit Points increase when you reach certain levels in
                  this class: to 1d8 at 9th level, to 1d10 at 13th level, and to
                  1d12 at 17th level.
                </p>
              </v-col>
            </v-row>

            <div class="dropdown" v-if="clickedRow == 3 && item.level == 3">
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
                  <p>
                    At 3rd level, choose two of your skill proficiencies. Your
                    proficiency bonus is doubled for any ability check you make
                    that uses either of the chosen proficiencies.
                  </p>
                  <br /><br />
                  <p>
                    At 10th level, you can choose another two skill
                    proficiencies to gain this benefit.
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
                  When you reach 4th level, and again at 8th, 12th, 16th, and
                  19th level, you can increase one ability score of your choice
                  by 2, or you can increase two ability scores of your choice by
                  1. As normal, you can't increase an ability score above 20
                  using this feature.
                </p>
              </v-col>
              <v-col>
                <h2 class="elevation-10 pa-5">Bardic Versatility (Optional)</h2>
                <br />
                <p>
                  Whenever you reach a level in this class that grants the
                  Ability Score Improvement feature, you can do one of the
                  following, representing a change in focus as you use your
                  skills and magic:
                </p>
                <br />
                <ul>
                  <li>
                    Replace one of the skills you chose for the Expertise
                    feature with one of your other skill proficiencies that
                    isn't benefiting from Expertise.
                  </li>
                  <li>
                    Replace one cantrip you learned from this class's
                    Spellcasting feature with another cantrip from the bard
                    spell list.
                  </li>
                </ul>
              </v-col>
            </v-row>
            <v-row class="dropdown" v-if="clickedRow == 5 && item.level == 5">
              <v-col cols="6">
                <h2 class="elevation-10 pa-5">Font of Inspiration</h2>
                <br />
                <p>
                  Beginning when you reach 5th level, you regain all of your
                  expended uses of Bardic Inspiration when you finish a short or
                  long rest.
                </p>
                <br />
              </v-col>
            </v-row>
            <v-row
              class="d-flex justify-center dropdown"
              v-if="clickedRow == 6 && item.level == 6"
            >
              <v-col cols="6">
                <h2 class="elevation-10 pa-5">Countercharm</h2>
                <br />
                <p>
                  At 6th level, you gain the ability to use musical notes or
                  words of power to disrupt mind-influencing effects. As an
                  action, you can start a performance that lasts until the end
                  of your next turn. During that time, you and any friendly
                  creatures within 30 feet of you have advantage on saving
                  throws against being frightened or charmed. A creature must be
                  able to hear you to gain this benefit. The performance ends
                  early if you are incapacitated or silenced or if you
                  voluntarily end it (no action required).
                </p>
              </v-col>
            </v-row>

            <v-row class="dropdown" v-if="clickedRow == 10 && item.level == 10">
              <v-col cols="6">
                <h2 class="elevation-10 pa-5">Magical Secrets</h2>
                <br />
                <p>
                  By 10th level, you have plundered magical knowledge from a
                  wide spectrum of disciplines. Choose two spells from any
                  classes, including this one. A spell you choose must be of a
                  level you can cast, as shown on the Bard table, or a cantrip.
                  <br /><br />The chosen spells count as bard spells for you and
                  are included in the number in the Spells Known column of the
                  Bard table. <br /><br />You learn two additional spells from
                  any classes at 14th level and again at 18th level.
                </p>
              </v-col>
            </v-row>

            <v-row
              class="d-flex justify-center dropdown"
              v-if="clickedRow == 20 && item.level == 20"
            >
              <v-col cols="6">
                <h2 class="elevation-10 pa-5">Superior Inspiration</h2>
                <br />
                <p>
                  At 20th level, when you roll initiative and have no uses of
                  Bardic Inspiration left, you regain one use.
                </p>
              </v-col>
            </v-row>
          </div>
        </v-card>
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
        "/wiki/classes/bard/" + label.replace(" ", "_").toLowerCase()
      );
    },
  },

  data() {
    return {
      clickedRow: "",

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
        "plus",
        "comment",
        "hand-sparkles",
        "book",
        "ghost",
        "cloud-bolt",
        "khanda",
        "user-secret",
      ],
      panel: [0],
      levels: [
        {
          level: "1",
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
          level: "2",
          profBonus: "+2",
          feature: "Jack of All Trades, Song of Rest (d6),",
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
          level: "3",
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
          level: "4",
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
          level: "5",
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
          level: "6",
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
          level: "7",
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
          level: "8",
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
          level: "9",
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
          level: "10",
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
          level: "11",
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
          level: "12",
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
          level: "13",
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
          level: "14",
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
          level: "15",
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
          level: "16",
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
          level: "17",
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
          level: "18",
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
          level: "19",
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
          level: "20",
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

<style scoped>
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
  text-align: center;
  margin: 10px;
  max-width: 6%;
  min-width: 6%;
  padding: 5px;
}

.center {
  width: 95%;
}
</style>
