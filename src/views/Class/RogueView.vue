<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Rogue Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Dexterity</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D8 per Rogue level</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Saving Throw Proficiencies</b></v-col>
          <v-col class="mr-10">Dexterity and Intelligence</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Skill Proficiencies</b></v-col>
          <v-col class="mr-10"
            >Choose 4: Acrobatics, Athletics, Deception, Insight, Intimidation,
            Investigation, Perception, Persuasion, Sleight of Hand, or
            Stealth</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Weapon Proficiencies</b></v-col>
          <v-col class="mr-10"
            >Simple weapons and Martial weapons that have the Finesse or Light
            property</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Tool Proficiencies</b></v-col>
          <v-col class="mr-10">Thieves' Tools</v-col>
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
            >Choose A or B: (A) Leather Armor, 2 Daggers, Shortsword, Shortbow,
            20 Arrows, Quiver, Thieves' Tools, Burglar's Pack, and 8 GP; or (B)
            100 GP</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Rogue</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Rogue Traits table.</li>
        <li>
          Gain the Rogue's level 1 features, which are listed in the Rogue
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>
          Gain the following traits from the Core Rogue Traits table: Hit Point
          Die, proficiency in one skill of your choice from the Rogue's skill
          list, proficiency with Thieves' Tools, and training with Light armor.
        </li>
        <li>
          Gain the Rogue's level 1 features, which are listed in the Rogue
          Features table.
        </li>
      </div>
    </div>

    <!-- Summary table -->
    <div class="bg-grey-darken-4 center pa-5">
      <h2>Rogue Class Features</h2>
    </div>
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Sneak Attack</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in levels" :key="item.level">
            <td class="text-center">{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.sneakAttack }}</td>
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
                  <h2 class="elevation-10 pa-5">Expertise</h2>
                  <br />
                  <p>
                    You gain Expertise in two of your skill proficiencies of
                    your choice. Sleight of Hand and Stealth are recommended if
                    you have proficiency in them.
                  </p>
                  <br />
                  <p>
                    At Rogue level 6, you gain Expertise in two more of your
                    skill proficiencies of your choice.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Sneak Attack</h2>
                  <br />
                  <p>
                    You know how to strike subtly and exploit a foe's
                    distraction. Once per turn, you can deal an extra 1d6 damage
                    to one creature you hit with an attack roll if you have
                    Advantage on the roll and the attack uses a Finesse or a
                    Ranged weapon. The extra damage's type is the same as the
                    weapon's type.
                  </p>
                  <br />
                  <p>
                    You don't need Advantage on the attack roll if at least one
                    of your allies is within 5 feet of the target, the ally
                    doesn't have the Incapacitated condition, and you don't have
                    Disadvantage on the attack roll.
                  </p>
                  <br />
                  <p>
                    The extra damage increases as you gain Rogue levels, as
                    shown in the Sneak Attack column of the Rogue Features
                    table.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Thieves' Cant</h2>
                  <br />
                  <p>
                    You picked up various languages in the communities where you
                    plied your roguish talents. You know Thieves' Cant and one
                    other language of your choice.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Weapon Mastery</h2>
                  <br />
                  <p>
                    Your training with weapons allows you to use the mastery
                    properties of two kinds of weapons of your choice with which
                    you have proficiency, such as Daggers and Shortbows.
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
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Cunning Action</h2>
                  <br />
                  <p>
                    Your quick thinking and agility allow you to move and act
                    quickly. On your turn, you can take one of the following
                    actions as a Bonus Action: Dash, Disengage, or Hide.
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
                  <h2 class="elevation-10 pa-5">Rogue Subclass</h2>
                  <br />
                  <p>
                    You gain a Rogue subclass of your choice. A subclass is a
                    specialization that grants you features at certain Rogue
                    levels. For the rest of your career, you gain each of your
                    subclass's features that are of your Rogue level or lower.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Steady Aim</h2>
                  <br />
                  <p>
                    As a Bonus Action, you give yourself Advantage on your next
                    attack roll on the current turn. You can use this feature
                    only if you haven't moved during this turn, and after you
                    use it, your Speed is 0 until the end of the current turn.
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
                    again at Rogue levels 8, 10, 12, and 16.
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
                  <h2 class="elevation-10 pa-5">Cunning Strike</h2>
                  <br />
                  <p>
                    You have developed cunning ways to use your Sneak Attack.
                    When you deal Sneak Attack damage, you can add one of the
                    following Cunning Strike effects. Each effect has a die cost
                    — the number of Sneak Attack damage dice you must forgo to
                    add the effect.
                  </p>
                  <br />
                  <p>
                    If a Cunning Strike effect requires a saving throw, the DC
                    equals 8 plus your Dexterity modifier and Proficiency Bonus.
                  </p>
                  <br />
                  <p>
                    <b>Poison (Cost: 1d6).</b> You add a toxin to your strike,
                    forcing the target to make a Constitution saving throw. On a
                    failed save, the target has the Poisoned condition for 1
                    minute. Requires a Poisoner's Kit on your person.
                  </p>
                  <br />
                  <p>
                    <b>Trip (Cost: 1d6).</b> If the target is Large or smaller,
                    it must succeed on a Dexterity saving throw or have the
                    Prone condition.
                  </p>
                  <br />
                  <p>
                    <b>Withdraw (Cost: 1d6).</b> Immediately after the attack,
                    you move up to half your Speed without provoking Opportunity
                    Attacks.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Uncanny Dodge</h2>
                  <br />
                  <p>
                    When an attacker that you can see hits you with an attack
                    roll, you can use your Reaction to halve the attack's damage
                    against you (round down).
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

          <!-- Level 7 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 7</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Evasion</h2>
                  <br />
                  <p>
                    You can nimbly dodge out of the way of certain dangers. When
                    you are subjected to an effect that allows you to make a
                    Dexterity saving throw to take only half damage, you instead
                    take no damage if you succeed on the saving throw and only
                    half damage if you fail.
                  </p>
                  <br />
                  <p>
                    You can't use this feature if you have the Incapacitated
                    condition.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Reliable Talent</h2>
                  <br />
                  <p>
                    Whenever you make an ability check that uses one of your
                    skill or tool proficiencies, you can treat a d20 roll of 9
                    or lower as a 10.
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

          <!-- Level 9 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 9</h2>
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

          <!-- Level 10 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 10</h2>
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

          <!-- Level 11 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 11</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Improved Cunning Strike</h2>
                  <br />
                  <p>
                    You can use up to two Cunning Strike effects when you deal
                    Sneak Attack damage, paying the die cost for each effect.
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
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose.</p>
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
                  <h2 class="elevation-10 pa-5">Devious Strikes</h2>
                  <br />
                  <p>
                    You've practiced new ways to use your Sneak Attack
                    deviously. The following effects are now among your Cunning
                    Strike options.
                  </p>
                  <br />
                  <p>
                    <b>Daze (Cost: 2d6).</b> The target must succeed on a
                    Constitution saving throw, or on its next turn, it can do
                    only one of the following: move or take an action or a Bonus
                    Action.
                  </p>
                  <br />
                  <p>
                    <b>Knock Out (Cost: 6d6).</b> The target must succeed on a
                    Constitution saving throw, or it has the Unconscious
                    condition for 1 minute or until it takes any damage. The
                    Unconscious target can repeat the save at the end of each of
                    its turns, ending the effect on itself on a success.
                  </p>
                  <br />
                  <p>
                    <b>Obscure (Cost: 3d6).</b> The target must succeed on a
                    Dexterity saving throw, or it has the Blinded condition
                    until the end of its next turn.
                  </p>
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
                  <h2 class="elevation-10 pa-5">Slippery Mind</h2>
                  <br />
                  <p>
                    Your cunning mind is exceptionally difficult to control. You
                    gain proficiency in Wisdom and Charisma saving throws.
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
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 17</h2>
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

          <!-- Level 18 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 18</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Elusive</h2>
                  <br />
                  <p>
                    You are so evasive that attackers rarely gain the upper hand
                    against you. No attack roll can have Advantage against you
                    unless you have the Incapacitated condition.
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
                    for which you qualify. Boon of the Night Spirit is
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
                  <h2 class="elevation-10 pa-5">Stroke of Luck</h2>
                  <br />
                  <p>
                    You have an uncanny knack for succeeding when you need to.
                    If you fail a d20 Test, you can turn the roll into a 20.
                  </p>
                  <br />
                  <p>
                    Once you use this feature, you can't use it again until you
                    finish a Short Rest or a Long Rest.
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
        .push("/wiki/classes/rogue/" + label.replace(" ", "_").toLowerCase())
        .then(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },

  data() {
    return {
      subclasses: [
        { title: "Arcane Trickster" },
        { title: "Assassin" },
        { title: "Soulknife" },
        { title: "Thief" },
      ],
      icons: ["hat-wizard", "skull", "brain", "mask"],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Expertise, Sneak Attack, Thieves' Cant, Weapon Mastery",
          sneakAttack: "1d6",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Cunning Action",
          sneakAttack: "1d6",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Rogue Subclass, Steady Aim",
          sneakAttack: "2d6",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement",
          sneakAttack: "2d6",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Cunning Strike, Uncanny Dodge",
          sneakAttack: "3d6",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Expertise",
          sneakAttack: "3d6",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Evasion, Reliable Talent",
          sneakAttack: "4d6",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          sneakAttack: "4d6",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Subclass Feature",
          sneakAttack: "5d6",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          sneakAttack: "5d6",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Improved Cunning Strike",
          sneakAttack: "6d6",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          sneakAttack: "6d6",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Subclass Feature",
          sneakAttack: "7d6",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Devious Strikes",
          sneakAttack: "7d6",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Slippery Mind",
          sneakAttack: "8d6",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          sneakAttack: "8d6",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Subclass Feature",
          sneakAttack: "9d6",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Elusive",
          sneakAttack: "9d6",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          sneakAttack: "10d6",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Stroke of Luck",
          sneakAttack: "10d6",
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
