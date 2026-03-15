<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Paladin Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Strength and Charisma</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D10 per Paladin level</v-col>
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
            >Choose 2: Athletics, Insight, Intimidation, Medicine, Persuasion,
            or Religion</v-col
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
            >Choose A or B: (A) Chain Mail, Shield, Longsword, 6 Javelins, Holy
            Symbol, Priest's Pack, and 9 GP; or (B) 150 GP</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Paladin</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Paladin Traits table.</li>
        <li>
          Gain the Paladin's level 1 features, which are listed in the Paladin
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>
          Gain the following traits from the Core Paladin Traits table: Hit
          Point Die, proficiency with Martial weapons, and training with Light
          and Medium armor and Shields.
        </li>
        <li>
          Gain the Paladin's level 1 features, which are listed in the Paladin
          Features table. See the multiclassing rules to determine your
          available spell slots.
        </li>
      </div>
    </div>

    <!-- Summary table -->
    <div class="bg-grey-darken-4 center pa-5">
      <h2>Paladin Class Features</h2>
    </div>
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Channel Divinity</th>
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
            <td class="text-center">{{ item.channelDivinity }}</td>
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
                  <h2 class="elevation-10 pa-5">Lay on Hands</h2>
                  <br />
                  <p>
                    Your blessed touch can heal wounds. You have a pool of
                    healing power that replenishes when you take a Long Rest.
                    With that pool, you can restore a total number of Hit Points
                    equal to five times your Paladin level.
                  </p>
                  <br />
                  <p>
                    As a Bonus Action, you can touch a creature (which could be
                    yourself) and draw power from the pool to restore a number
                    of Hit Points to that creature, up to the maximum amount
                    remaining in your pool.
                  </p>
                  <br />
                  <p>
                    You can also expend 5 Hit Points from the pool to remove the
                    Poisoned condition from the creature; those points don't
                    also restore Hit Points to the creature.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Spellcasting</h2>
                  <br />
                  <p>
                    You have learned to cast spells through prayer, meditation,
                    and devotion. Charisma is your spellcasting ability for your
                    Paladin spells, and you can use a Holy Symbol as a
                    Spellcasting Focus.
                  </p>
                  <br />
                  <p>
                    To start, choose two level 1 Paladin spells. Heroism and
                    Searing Smite are recommended. The number of spells on your
                    list increases as you gain Paladin levels, as shown in the
                    Prepared Spells column of the Paladin Features table.
                  </p>
                  <br />
                  <p>
                    Whenever you finish a Long Rest, you can replace one spell
                    on your list with another Paladin spell for which you have
                    spell slots.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Weapon Mastery</h2>
                  <br />
                  <p>
                    Your training with weapons allows you to use the mastery
                    properties of two kinds of weapons of your choice with which
                    you have proficiency, such as Longswords and Javelins.
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
                  <h2 class="elevation-10 pa-5">Fighting Style</h2>
                  <br />
                  <p>
                    You gain a Fighting Style feat of your choice. Instead of
                    choosing one of those feats, you can choose the option
                    below.
                  </p>
                  <br />
                  <p>
                    <b>Blessed Warrior.</b> You learn two Cleric cantrips of
                    your choice. Guidance and Sacred Flame are recommended. The
                    chosen cantrips count as Paladin spells for you, and
                    Charisma is your spellcasting ability for them. Whenever you
                    gain a Paladin level, you can replace one of these cantrips
                    with another Cleric cantrip.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Paladin's Smite</h2>
                  <br />
                  <p>
                    You always have the Divine Smite spell prepared. In
                    addition, you can cast it without expending a spell slot,
                    but you must finish a Long Rest before you can cast it in
                    this way again.
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
                  <h2 class="elevation-10 pa-5">Channel Divinity</h2>
                  <br />
                  <p>
                    You can channel divine energy directly from the Outer
                    Planes, using it to fuel magical effects. You start with one
                    such effect: Divine Sense. Other Paladin features give
                    additional Channel Divinity options.
                  </p>
                  <br />
                  <p>
                    You can use Channel Divinity twice. You regain one expended
                    use when you finish a Short Rest, and all expended uses when
                    you finish a Long Rest. You gain an additional use at
                    Paladin level 11.
                  </p>
                  <br />
                  <p>
                    <b>Divine Sense.</b> As a Bonus Action, you open your
                    awareness to detect Celestials, Fiends, and Undead. For the
                    next 10 minutes or until you have the Incapacitated
                    condition, you know the location of any creature of those
                    types within 60 feet of yourself and its creature type. You
                    also detect any consecrated or desecrated places or objects
                    within the same radius.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Paladin Subclass</h2>
                  <br />
                  <p>
                    You gain a Paladin subclass of your choice. A subclass is a
                    specialization that grants you features at certain Paladin
                    levels. For the rest of your career, you gain each of your
                    subclass's features that are of your Paladin level or lower.
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
                  <p class="text-center">Oath of {{ sub.title }}</p>
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
                    again at Paladin levels 8, 12, and 16.
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
                  <h2 class="elevation-10 pa-5">Faithful Steed</h2>
                  <br />
                  <p>
                    You can call on the aid of an otherworldly steed. You always
                    have the Find Steed spell prepared.
                  </p>
                  <br />
                  <p>
                    You can also cast the spell once without expending a spell
                    slot, and you regain the ability to do so when you finish a
                    Long Rest.
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
                  <h2 class="elevation-10 pa-5">Aura of Protection</h2>
                  <br />
                  <p>
                    You radiate a protective, unseeable aura in a 10-foot
                    Emanation that originates from you. The aura is inactive
                    while you have the Incapacitated condition.
                  </p>
                  <br />
                  <p>
                    You and your allies in the aura gain a bonus to saving
                    throws equal to your Charisma modifier (minimum bonus of
                    +1).
                  </p>
                  <br />
                  <p>
                    If another Paladin is present, a creature can benefit from
                    only one Aura of Protection at a time; the creature chooses
                    which aura while in them.
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
                  <h2 class="elevation-10 pa-5">Abjure Foes</h2>
                  <br />
                  <p>
                    As a Magic action, you can expend one use of this class's
                    Channel Divinity to overwhelm foes with awe. As you present
                    your Holy Symbol or weapon, you can target a number of
                    creatures equal to your Charisma modifier (minimum of one)
                    that you can see within 60 feet of yourself.
                  </p>
                  <br />
                  <p>
                    Each target must succeed on a Wisdom saving throw or have
                    the Frightened condition for 1 minute or until it takes any
                    damage. While Frightened in this way, a target can do only
                    one of the following on its turns: move, take an action, or
                    take a Bonus Action.
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
                  <h2 class="elevation-10 pa-5">Aura of Courage</h2>
                  <br />
                  <p>
                    You and your allies have Immunity to the Frightened
                    condition while in your Aura of Protection. If a Frightened
                    ally enters the aura, that condition has no effect on that
                    ally while there.
                  </p>
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
                  <h2 class="elevation-10 pa-5">Radiant Strikes</h2>
                  <br />
                  <p>
                    Your strikes now carry supernatural power. When you hit a
                    target with an attack roll using a Melee weapon or an
                    Unarmed Strike, the target takes an extra 1d8 Radiant
                    damage.
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
                  <h2 class="elevation-10 pa-5">Spell Slot Increase</h2>
                  <br />
                  <p>
                    You gain access to 4th-level spell slots, as shown in the
                    Paladin Features table, increasing your magical power and
                    the number of spells you can prepare.
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
                  <h2 class="elevation-10 pa-5">Restoring Touch</h2>
                  <br />
                  <p>
                    When you use Lay On Hands on a creature, you can also remove
                    one or more of the following conditions from the creature:
                    Blinded, Charmed, Deafened, Frightened, Paralyzed, or
                    Stunned. You must expend 5 Hit Points from the healing pool
                    of Lay On Hands for each condition you remove; those points
                    don't also restore Hit Points to the creature.
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
                  <h2 class="elevation-10 pa-5">Spell Slot Increase</h2>
                  <br />
                  <p>
                    You gain access to 5th-level spell slots, as shown in the
                    Paladin Features table, unlocking the most powerful Paladin
                    spells.
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
                  <h2 class="elevation-10 pa-5">Aura Expansion</h2>
                  <br />
                  <p>Your Aura of Protection is now a 30-foot Emanation.</p>
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
                    for which you qualify. Boon of Truesight is recommended.
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
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose.</p>
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
        .push("/wiki/classes/paladin/" + label.replace(" ", "_").toLowerCase())
        .then(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },

  data() {
    return {
      subclasses: [
        { title: "Devotion" },
        { title: "Glory" },
        { title: "the Ancients" },
        { title: "Vengeance" },
      ],
      icons: ["star", "trophy", "leaf", "gavel"],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Lay on Hands, Spellcasting, Weapon Mastery",
          channelDivinity: "—",
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
          feature: "Fighting Style, Paladin's Smite",
          channelDivinity: "—",
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
          feature: "Channel Divinity, Paladin Subclass",
          channelDivinity: "2",
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
          channelDivinity: "2",
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
          feature: "Extra Attack, Faithful Steed",
          channelDivinity: "2",
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
          feature: "Aura of Protection",
          channelDivinity: "2",
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
          channelDivinity: "2",
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
          channelDivinity: "2",
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
          feature: "Abjure Foes",
          channelDivinity: "2",
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
          feature: "Aura of Courage",
          channelDivinity: "2",
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
          feature: "Radiant Strikes",
          channelDivinity: "3",
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
          channelDivinity: "3",
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
          feature: "Spell Slot Increase",
          channelDivinity: "3",
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
          feature: "Restoring Touch",
          channelDivinity: "3",
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
          channelDivinity: "3",
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
          channelDivinity: "3",
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
          feature: "Spell Slot Increase",
          channelDivinity: "3",
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
          feature: "Aura Expansion",
          channelDivinity: "3",
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
          channelDivinity: "3",
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
          feature: "Subclass Feature",
          channelDivinity: "3",
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
