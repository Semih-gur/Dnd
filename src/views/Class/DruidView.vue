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
                  <br />
                  <v-table>
                    <thead>
                      <th></th>
                      <tr>
                        <th class="text-center">Druid Level</th>
                        <th class="text-center">Known Forms</th>
                        <th class="text-center">Max CR</th>
                        <th class="text-center">Fly Speed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <p></p>
                      <tr v-for="item in wildshapeTable" :key="item.level">
                        <td class="text-center">{{ item.level }}</td>
                        <td class="text-center">{{ item.forms }}</td>
                        <td class="text-center">{{ item.cr }}</td>
                        <td class="text-center">{{ item.flySpeed }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <br />
                  <p>
                    <b>Rules While Shape-Shifted.</b>While in a form, you retain
                    your personality, memories, and ability to speak, and the
                    following rules apply:
                  </p>
                  <br />
                  <p><b>Temporary Hit Points. </b></p>
                  When you assume a Wild Shape form, you gain a number of
                  Temporary Hit Points equal to your Druid level.
                  <br />
                  <p>
                    <b>Game Statistics. </b>Your game statistics are replaced by
                    the Beast’s stat block, but you retain your creature type;
                    Hit Points; Hit Point Dice; Intelligence, Wisdom, and
                    Charisma scores; class features; languages; and feats. You
                    also retain your skill and saving throw proficiencies and
                    use your Proficiency Bonus for them, in addition to gaining
                    the proficiencies of the creature. If a skill or saving
                    throw modifier in the Beast’s stat block is higher than
                    yours, use the one in the stat block.
                  </p>
                  <br />
                  <p>
                    <b>No Spellcasting. </b>You can’t cast spells, but
                    shape-shifting doesn’t break your Concentration or otherwise
                    interfere with a spell you’ve already cast.
                  </p>
                  <br />
                  <p>
                    <b>Objects. </b>Your ability to handle objects is determined
                    by the form’s limbs rather than your own. In addition, you
                    choose whether your equipment falls in your space, merges
                    into your new form, or is worn by it. Worn equipment
                    functions as normal, but the DM decides whether it’s
                    practical for the new form to wear a piece of equipment
                    based on the creature’s size and shape. Your equipment
                    doesn’t change size or shape to match the new form, and any
                    equipment that the new form can’t wear must either fall to
                    the ground or merge with the form. Equipment that merges
                    with the form has no effect while you’re in that form.
                  </p>
                </v-col>
                <v-col>
                  <h2 class="elevation-10 pa-5">Wild Companion</h2>
                  <br />
                  <p>
                    You can summon a nature spirit that assumes an animal form
                    to aid you. As a Magic action, you can expend a spell slot
                    or a use of Wild Shape to cast the Find Familiar spell
                    without Material components.
                  </p>
                  <br />
                  <p>
                    When you cast the spell in this way, the familiar is Fey and
                    disappears when you finish a Long Rest.
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
                  <h2 class="elevation-10 pa-5">Druid Subclass</h2>
                  <br />
                  <p>
                    You gain a Druid subclass of your choice. The Circle of the
                    Land, Circle of the Moon, Circle of the Sea, and Circle of
                    the Stars subclasses are detailed after this class’s
                    description. A subclass is a specialization that grants you
                    features at certain Druid levels. For the rest of your
                    career, you gain each of your subclass’s features that are
                    of your Druid level or lower.
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
                  <p class="text-center">Circle of the {{ sub.title }}</p>
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
                    again at Druid levels 8, 12, and 16.
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
                  <h2 class="elevation-10 pa-5">Wild Resurgence</h2>
                  <br />
                  <p>
                    Once on each of your turns, if you have no uses of Wild
                    Shape left, you can give yourself one use by expending a
                    spell slot (no action required).
                  </p>
                  <br />
                  <p>
                    In addition, you can expend one use of Wild Shape (no action
                    required) to give yourself a level 1 spell slot, but you
                    can’t do so again until you finish a Long Rest.
                  </p>
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
                  <h2 class="elevation-10 pa-5">Elemental Fury</h2>
                  <br />
                  <p>
                    The might of the elements flows through you. You gain one of
                    the following options of your choice.
                  </p>
                  <br />
                  <p>
                    <b>Potent Spellcasting. </b>Add your Wisdom modifier to the
                    damage you deal with any Druid cantrip.
                  </p>
                  <br />
                  <p>
                    <b>Primal Strike. </b>Once on each of your turns when you
                    hit a creature with an attack roll using a weapon or a Beast
                    form’s attack in Wild Shape, you can cause the target to
                    take an extra 1d8 Cold, Fire, Lightning, or Thunder damage
                    (choose when you hit).
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
                    again at Druid levels 12, and 16.
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
                  <h2 class="elevation-10 pa-5">Subclass Feature</h2>
                  <br />
                  <p>You gain a new feature from the subclass you chose</p>
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
                    again at Druid 16.
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
              <v-row>
                <v-col>
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
              <v-row>
                <v-col>
                  <h2 class="elevation-10 pa-5">Improved Elemental Fury</h2>
                  <br />
                  <p>
                    The option you chose for Elemental Fury grows more powerful,
                    as detailed below.
                  </p>
                  <br />
                  <p>
                    <b>Potent Spellcasting. </b>When you cast a Druid cantrip
                    with a range of 10 feet or greater, the spell’s range
                    increases by 300 feet.
                  </p>
                  <br />
                  <p>
                    <b>Primal Strike. </b>The extra damage of your Primal Strike
                    increases to 2d8.
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
                    of your choice for which you qualify
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
                  <h2 class="elevation-10 pa-5">Beast Spells</h2>
                  <br />
                  <p>
                    While using Wild Shape, you can cast spells in Beast form,
                    except for any spell that has a Material component with a
                    cost specified or that consumes its Material component.
                  </p>
                  <br />
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
                    for which you qualify. Boon of Dimensional Travel is
                    recommended.
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
                  <h2 class="elevation-10 pa-5">Archdruid</h2>
                  <br />
                  <p>
                    The vitality of nature constantly blooms within you,
                    granting you the following benefits.
                  </p>
                  <br />
                  <p>
                    <b>Evergreen Wild Shape. </b>Whenever you roll Initiative
                    and have no uses of Wild Shape left, you regain one expended
                    use of it.
                  </p>
                  <br />
                  <p>
                    <b>Nature Magician. </b>You can convert uses of Wild Shape
                    into a spell slot (no action required). Choose a number of
                    your unexpended uses of Wild Shape and convert them into a
                    single spell slot, with each use contributing 2 spell
                    levels. For example, if you convert two uses of Wild Shape,
                    you produce a level 4 spell slot. Once you use this benefit,
                    you can’t do so again until you finish a Long Rest.
                  </p>
                  <br />
                  <p>
                    <b>Longevity. </b>The primal magic that you wield causes you
                    to age more slowly. For every ten years that pass, your body
                    ages only one year.
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
        "/wiki/classes/druid/" + label.replace(" ", "_").toLowerCase()
      );
    },
  },

  data() {
    return {
      wildshapeTable: [
        {
          level: "2",
          forms: "4",
          cr: "1/4",
          flySpeed: "No",
        },
        {
          level: "4",
          forms: "6",
          cr: "1/2",
          flySpeed: "No",
        },
        {
          level: "8",
          forms: "8",
          cr: "1",
          flySpeed: "Yes",
        },
      ],

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
