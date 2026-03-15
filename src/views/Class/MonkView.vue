<template>
  <div class="mt-15">
    <div class="bg-grey-darken-4 center pa-5">
      <h2 class="mb-5">Core Monk Traits</h2>

      <div class="mb-10">
        <v-row>
          <v-col cols="2"><b>Primary Ability</b></v-col>
          <v-col class="mr-10">Dexterity and Wisdom</v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Hit Point Die</b></v-col>
          <v-col class="mr-10">D8 per Monk level</v-col>
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
            >Choose 2: Acrobatics, Athletics, History, Insight, Religion, or
            Stealth</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Weapon Proficiencies</b></v-col>
          <v-col class="mr-10"
            >Simple weapons and Martial weapons with the Light property</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="2"><b>Tool Proficiencies</b></v-col>
          <v-col class="mr-10"
            >Choose one type of Artisan's Tools or Musical Instrument</v-col
          >
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
            >Choose A or B: (A) Spear, 5 Daggers, Artisan's Tools or Musical
            Instrument, Explorer's Pack, and 11 GP; or (B) 50 GP</v-col
          >
          <v-divider></v-divider>
        </v-row>
        <h2 class="mt-10">Becoming a Monk</h2>
        <h3 class="mt-5">As a Level 1 Character</h3>
        <li>Gain all the traits in the Core Monk Traits table.</li>
        <li>
          Gain the Monk's level 1 features, which are listed in the Monk
          Features table.
        </li>
        <h3 class="mt-5">As a Multiclass Character</h3>
        <li>
          Gain the following traits from the Core Monk Traits table: Hit Point
          Die.
        </li>
        <li>
          Gain the Monk's level 1 features, which are listed in the Monk
          Features table.
        </li>
      </div>
    </div>

    <!-- Summary table -->
    <div class="bg-grey-darken-4 center pa-5">
      <h2>Monk Class Features</h2>
    </div>
    <div style="width: 1525px" class="center">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Level</th>
            <th class="text-center">Proficiency Bonus</th>
            <th class="text-center">Unlocked</th>
            <th class="text-center">Focus Points</th>
            <th class="text-center">Martial Arts Die</th>
            <th class="text-center">Unarmored Movement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in levels" :key="item.level">
            <td class="text-center">{{ item.level }}</td>
            <td class="text-center">{{ item.profBonus }}</td>
            <td class="text-center">{{ item.feature }}</td>
            <td class="text-center">{{ item.focusPoints }}</td>
            <td class="text-center">{{ item.martialArtsDie }}</td>
            <td class="text-center">{{ item.unarmoredMovement }}</td>
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
                  <h2 class="elevation-10 pa-5">Martial Arts</h2>
                  <br />
                  <p>
                    Your practice of martial arts gives you mastery of combat
                    styles that use your Unarmed Strike and Monk Weapons, which
                    are Simple Melee weapons and Martial Melee weapons with the
                    Light property. You gain the following benefits while
                    unarmed or wielding only Monk Weapons and not wearing armor
                    or wielding a Shield.
                  </p>
                  <br />
                  <p>
                    <b>Bonus Unarmed Strike.</b> You can make one Unarmed Strike
                    as a Bonus Action.
                  </p>
                  <br />
                  <p>
                    <b>Dexterous Attacks.</b> You can use your Dexterity
                    modifier instead of your Strength modifier for the attack
                    and damage rolls of your Unarmed Strikes and Monk Weapons.
                    When you use the Grapple or Shove option of your Unarmed
                    Strike, you can also use your Dexterity modifier to
                    determine the save DC.
                  </p>
                  <br />
                  <p>
                    <b>Martial Arts Die.</b> You can roll 1d6 in place of the
                    normal damage of your Unarmed Strike or Monk Weapons. This
                    die changes as you gain Monk levels, as shown in the Martial
                    Arts Die column of the Monk Features table.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Unarmored Defense</h2>
                  <br />
                  <p>
                    While you aren't wearing armor or wielding a Shield, your
                    base Armor Class equals 10 plus your Dexterity and Wisdom
                    modifiers.
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
                  <h2 class="elevation-10 pa-5">Monk's Focus</h2>
                  <br />
                  <p>
                    Your focus and martial training allow you to harness a well
                    of extraordinary energy within yourself, represented by
                    Focus Points. Your Monk level determines the number you
                    have, as shown in the Focus Points column of the Monk
                    Features table. You can expend these points to fuel the
                    features below.
                  </p>
                  <br />
                  <p>
                    <b>Flurry of Blows.</b> You can expend 1 Focus Point to make
                    two Unarmed Strikes as a Bonus Action.
                  </p>
                  <br />
                  <p>
                    <b>Patient Defense.</b> You can take the Disengage action as
                    a Bonus Action. Alternatively, you can expend 1 Focus Point
                    to take both the Disengage and Dodge actions as a Bonus
                    Action.
                  </p>
                  <br />
                  <p>
                    <b>Step of the Wind.</b> You can take the Dash action as a
                    Bonus Action. Alternatively, you can expend 1 Focus Point to
                    take both the Disengage and Dash actions as a Bonus Action,
                    and your jump distance is doubled for the turn.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Unarmored Movement</h2>
                  <br />
                  <p>
                    Your speed increases by 10 feet while you aren't wearing
                    armor or wielding a Shield. This bonus increases when you
                    reach certain Monk levels, as shown in the Unarmored
                    Movement column of the Monk Features table.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Uncanny Metabolism</h2>
                  <br />
                  <p>
                    When you roll Initiative, you can regain all expended Focus
                    Points. When you do so, roll your Martial Arts die, and
                    regain a number of Hit Points equal to your Monk level plus
                    the number rolled.
                  </p>
                  <br />
                  <p>
                    Once you use this feature, you can't use it again until you
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
                  <h2 class="elevation-10 pa-5">Deflect Attacks</h2>
                  <br />
                  <p>
                    You can use your Reaction to deflect a melee or ranged
                    attack against you that deals Bludgeoning, Piercing, or
                    Slashing damage. When you do so, the total damage you take
                    from the attack is reduced by 1d10 plus your Dexterity
                    modifier plus your Monk level.
                  </p>
                  <br />
                  <p>
                    If you reduce the damage to 0, you can expend 1 Focus Point
                    to redirect some of the attack's force. Choose a creature
                    you can see within 5 feet of yourself if the attack was
                    melee, or within 60 feet if ranged. That creature must
                    succeed on a Dexterity saving throw or take damage equal to
                    two rolls of your Martial Arts die plus your Dexterity
                    modifier (same type as the original attack).
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Monk Subclass</h2>
                  <br />
                  <p>
                    You gain a Monk subclass of your choice. A subclass is a
                    specialization that grants you features at certain Monk
                    levels. For the rest of your career, you gain each of your
                    subclass's features that are of your Monk level or lower.
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
                  <p class="text-center">Warrior of {{ sub.title }}</p>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Level 4 -->
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 4</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Ability Score Improvement</h2>
                  <br />
                  <p>
                    You gain the Ability Score Improvement feat or another feat
                    of your choice for which you qualify. You gain this feature
                    again at Monk levels 8, 12, and 16.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Slow Fall</h2>
                  <br />
                  <p>
                    You can use your Reaction when you fall to reduce any damage
                    you take from the fall by an amount equal to five times your
                    Monk level.
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
                  <h2 class="elevation-10 pa-5">Stunning Strike</h2>
                  <br />
                  <p>
                    Once per turn when you hit a creature with a Monk Weapon or
                    an Unarmed Strike, you can expend 1 Focus Point to attempt a
                    stunning strike. The target must make a Constitution saving
                    throw. On a failed save, the target has the Stunned
                    condition until the start of your next turn. On a successful
                    save, the target takes Force damage equal to a roll of your
                    Martial Arts die plus your Wisdom modifier.
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
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose.</p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Empowered Strikes</h2>
                  <br />
                  <p>
                    Whenever you deal damage with your Unarmed Strike, it can
                    deal your choice of Force damage or its normal damage type.
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
                    When you're subjected to an effect that allows you to make a
                    Dexterity saving throw to take only half damage, you instead
                    take no damage if you succeed on the saving throw and only
                    half damage if you fail.
                  </p>
                  <br />
                  <p>
                    You don't benefit from this feature if you have the
                    Incapacitated condition.
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
          <v-expansion-panel expand v-model="panel">
            <v-expansion-panel-title>
              <h2>Level 9</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Acrobatic Movement</h2>
                  <br />
                  <p>
                    While you aren't wearing armor or wielding a Shield, you
                    gain the ability to move along vertical surfaces and across
                    liquids on your turn without falling during the move.
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
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose.</p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Heightened Focus</h2>
                  <br />
                  <p>
                    Your Flurry of Blows, Patient Defense, and Step of the Wind
                    gain the following improvements.
                  </p>
                  <br />
                  <p>
                    <b>Flurry of Blows.</b> You can expend 1 Focus Point to make
                    three Unarmed Strikes instead of two.
                  </p>
                  <br />
                  <p>
                    <b>Patient Defense.</b> When you expend a Focus Point to use
                    Patient Defense, you gain a number of Temporary Hit Points
                    equal to two rolls of your Martial Arts die.
                  </p>
                  <br />
                  <p>
                    <b>Step of the Wind.</b> When you expend a Focus Point to
                    use Step of the Wind, you can choose a willing creature
                    within 5 feet of yourself that is Large or smaller. You move
                    the creature with you until the end of your turn. The
                    creature's movement doesn't provoke Opportunity Attacks.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Self-Restoration</h2>
                  <br />
                  <p>
                    Through sheer force of will, you can remove one of the
                    following conditions from yourself at the end of each of
                    your turns: Charmed, Frightened, or Poisoned.
                  </p>
                  <br />
                  <p>
                    In addition, forgoing food and drink doesn't give you levels
                    of Exhaustion.
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
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 13</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Deflect Energy</h2>
                  <br />
                  <p>
                    You can now use your Deflect Attacks feature against attacks
                    that deal any damage type, not just Bludgeoning, Piercing,
                    or Slashing.
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

          <!-- Level 15 -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 15</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Perfect Focus</h2>
                  <br />
                  <p>
                    When you roll Initiative and have fewer than 4 Focus Points,
                    you regain Focus Points equal to 4 minus the number you
                    have.
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
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2>Level 18</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col cols="6">
                  <h2 class="elevation-10 pa-5">Superior Defense</h2>
                  <br />
                  <p>
                    At the start of your turn, you can expend 3 Focus Points to
                    bolster yourself against harm for 1 minute or until you have
                    the Incapacitated condition. During that time, you have
                    Resistance to all damage except Force damage.
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
                    for which you qualify. Boon of Irresistible Offense is
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
                  <h2 class="elevation-10 pa-5">Body and Mind</h2>
                  <br />
                  <p>
                    You have honed your body and mind to new heights. Your
                    Dexterity and Wisdom scores each increase by 4, to a maximum
                    of 25.
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
        .push("/wiki/classes/monk/" + label.replace(" ", "_").toLowerCase())
        .then(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },

  data() {
    return {
      subclasses: [
        { title: "Mercy" },
        { title: "Shadow" },
        { title: "the Elements" },
        { title: "the Open Hand" },
      ],
      icons: ["hand-holding-heart", "moon", "tornado", "hand-fist"],
      panel: [0],
      levels: [
        {
          level: "1",
          profBonus: "+2",
          feature: "Martial Arts, Unarmored Defense",
          focusPoints: "—",
          martialArtsDie: "1d6",
          unarmoredMovement: "+0 ft.",
        },
        {
          level: "2",
          profBonus: "+2",
          feature: "Monk's Focus, Unarmored Movement, Uncanny Metabolism",
          focusPoints: "2",
          martialArtsDie: "1d6",
          unarmoredMovement: "+10 ft.",
        },
        {
          level: "3",
          profBonus: "+2",
          feature: "Deflect Attacks, Monk Subclass",
          focusPoints: "3",
          martialArtsDie: "1d6",
          unarmoredMovement: "+10 ft.",
        },
        {
          level: "4",
          profBonus: "+2",
          feature: "Ability Score Improvement, Slow Fall",
          focusPoints: "4",
          martialArtsDie: "1d6",
          unarmoredMovement: "+10 ft.",
        },
        {
          level: "5",
          profBonus: "+3",
          feature: "Extra Attack, Stunning Strike",
          focusPoints: "5",
          martialArtsDie: "1d8",
          unarmoredMovement: "+10 ft.",
        },
        {
          level: "6",
          profBonus: "+3",
          feature: "Empowered Strikes, Subclass Feature",
          focusPoints: "6",
          martialArtsDie: "1d8",
          unarmoredMovement: "+15 ft.",
        },
        {
          level: "7",
          profBonus: "+3",
          feature: "Evasion",
          focusPoints: "7",
          martialArtsDie: "1d8",
          unarmoredMovement: "+15 ft.",
        },
        {
          level: "8",
          profBonus: "+3",
          feature: "Ability Score Improvement",
          focusPoints: "8",
          martialArtsDie: "1d8",
          unarmoredMovement: "+15 ft.",
        },
        {
          level: "9",
          profBonus: "+4",
          feature: "Acrobatic Movement",
          focusPoints: "9",
          martialArtsDie: "1d8",
          unarmoredMovement: "+15 ft.",
        },
        {
          level: "10",
          profBonus: "+4",
          feature: "Heightened Focus, Self-Restoration, Subclass Feature",
          focusPoints: "10",
          martialArtsDie: "1d8",
          unarmoredMovement: "+20 ft.",
        },
        {
          level: "11",
          profBonus: "+4",
          feature: "Subclass Feature",
          focusPoints: "11",
          martialArtsDie: "1d10",
          unarmoredMovement: "+20 ft.",
        },
        {
          level: "12",
          profBonus: "+4",
          feature: "Ability Score Improvement",
          focusPoints: "12",
          martialArtsDie: "1d10",
          unarmoredMovement: "+20 ft.",
        },
        {
          level: "13",
          profBonus: "+5",
          feature: "Deflect Energy",
          focusPoints: "13",
          martialArtsDie: "1d10",
          unarmoredMovement: "+20 ft.",
        },
        {
          level: "14",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          focusPoints: "14",
          martialArtsDie: "1d10",
          unarmoredMovement: "+25 ft.",
        },
        {
          level: "15",
          profBonus: "+5",
          feature: "Perfect Focus",
          focusPoints: "15",
          martialArtsDie: "1d10",
          unarmoredMovement: "+25 ft.",
        },
        {
          level: "16",
          profBonus: "+5",
          feature: "Ability Score Improvement",
          focusPoints: "16",
          martialArtsDie: "1d10",
          unarmoredMovement: "+25 ft.",
        },
        {
          level: "17",
          profBonus: "+6",
          feature: "Subclass Feature",
          focusPoints: "17",
          martialArtsDie: "1d12",
          unarmoredMovement: "+25 ft.",
        },
        {
          level: "18",
          profBonus: "+6",
          feature: "Superior Defense",
          focusPoints: "18",
          martialArtsDie: "1d12",
          unarmoredMovement: "+30 ft.",
        },
        {
          level: "19",
          profBonus: "+6",
          feature: "Epic Boon",
          focusPoints: "19",
          martialArtsDie: "1d12",
          unarmoredMovement: "+30 ft.",
        },
        {
          level: "20",
          profBonus: "+6",
          feature: "Body and Mind",
          focusPoints: "20",
          martialArtsDie: "1d12",
          unarmoredMovement: "+30 ft.",
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
