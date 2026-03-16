<template>
  <div class="center mt-16">
    <v-card v-for="race in compRace.race" :key="race.name">
      <v-card-text>
        <span style="white-space: pre-wrap" v-html="race.desc"></span>
        <br /><br />
        <h2>{{ race.name }} Traits</h2>
      </v-card-text>
      <v-card-text>
        <b>Type:</b> {{ race.type }} <br />
        <b>Size:</b> {{ race.size }} <br />
        <b>Speed:</b> {{ race.speed }}
      </v-card-text>
      <v-card-text v-for="trait in race.feats" :key="trait.name">
        <b>{{ trait.name }}.</b> {{ trait.desc }}

        <div v-if="trait.table" class="mt-3">
          <v-table density="compact">
            <thead>
              <tr>
                <th v-for="(val, key) in trait.table[0][0]" :key="key">
                  {{ key.charAt(0).toUpperCase() + key.slice(1) }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in trait.table[0]" :key="index">
                <td v-for="(val, key) in row" :key="key">{{ val }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    compRace: function () {
      for (let i = 0; i < this.races.length; i++) {
        if (this.races[i].name == this.url) {
          return this.races[i];
        }
      }
      return "nothing";
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),
      races: [
        {
          name: "aasimar",
          race: [
            {
              name: "Aasimar",
              desc: "Aasimar are mortals who carry a spark of the Upper Planes within their souls. Whether descended from an angelic being or infused with celestial power, they can fan that spark to bring light, healing, and heavenly fury. Aasimar can arise among any population of mortals. They resemble their parents but live for up to 160 years and have features that hint at their celestial heritage, such as metallic freckles, luminous eyes, a halo, or skin tones of silver, opalescent green, or coppery red.",
              type: "Humanoid",
              size: "Medium (about 4–7 feet tall) or Small (about 2–4 feet tall), chosen when you select this species",
              speed: "30 feet",
              feats: [
                {
                  name: "Celestial Resistance",
                  desc: "You have Resistance to Necrotic damage and Radiant damage.",
                },
                {
                  name: "Darkvision",
                  desc: "You have Darkvision with a range of 60 feet.",
                },
                {
                  name: "Healing Hands",
                  desc: "As a Magic action, you can touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains a number of Hit Points equal to the total rolled. Once you use this trait, you can't use it again until you finish a Long Rest.",
                },
                {
                  name: "Light Bearer",
                  desc: "You know the Light cantrip. Charisma is your spellcasting ability for it.",
                },
                {
                  name: "Celestial Revelation",
                  desc: "When you reach character level 3, choose one of the revelation options below. Thereafter you can use a Bonus Action to unleash the celestial energy within yourself, transforming for 1 minute or until you end it as a Bonus Action. Once you use this trait, you can't use it again until you finish a Long Rest.",
                },
                {
                  name: "Celestial Revelation: Heavenly Wings",
                  desc: "You sprout spectral wings. Until the transformation ends, you have a Fly Speed equal to your Speed.",
                },
                {
                  name: "Celestial Revelation: Inner Radiance",
                  desc: "Searing light temporarily radiates from your eyes and mouth. Until the transformation ends, you shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes Radiant damage equal to your Proficiency Bonus.",
                },
                {
                  name: "Celestial Revelation: Necrotic Shroud",
                  desc: "Your eyes briefly become pools of darkness, and flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you must succeed on a Charisma saving throw (DC 8 + your Charisma modifier + your Proficiency Bonus) or have the Frightened condition until the end of your next turn. For the transformation's duration, once per turn when you deal damage to a creature, you can deal extra Necrotic damage equal to your Proficiency Bonus.",
                },
              ],
            },
          ],
        },
        {
          name: "dragonborn",
          race: [
            {
              name: "Dragonborn",
              desc: "The ancestors of Dragonborn hatched from the eggs of chromatic and metallic dragons. One story holds that these eggs were blessed by the dragon gods Bahamut and Tiamat, who wanted to populate the multiverse with people who embodied the virtues of dragonkind. Dragonborn walk proudly through a world that greets them with fearful incomprehension.",
              type: "Humanoid",
              size: "Medium (about 5–7 feet tall)",
              speed: "30 feet",
              feats: [
                {
                  name: "Draconic Ancestry",
                  desc: "Your lineage stems from a dragon progenitor. Choose the kind of dragon from the Draconic Ancestors table. Your choice affects your Breath Weapon and Damage Resistance traits as well as your appearance.",
                  table: [
                    [
                      { dragon: "Black", damage: "Acid" },
                      { dragon: "Blue", damage: "Lightning" },
                      { dragon: "Brass", damage: "Fire" },
                      { dragon: "Bronze", damage: "Lightning" },
                      { dragon: "Copper", damage: "Acid" },
                      { dragon: "Gold", damage: "Fire" },
                      { dragon: "Green", damage: "Poison" },
                      { dragon: "Red", damage: "Fire" },
                      { dragon: "Silver", damage: "Cold" },
                      { dragon: "White", damage: "Cold" },
                    ],
                  ],
                },
                {
                  name: "Breath Weapon",
                  desc: "When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose each time). Each creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry. On a successful save, a creature takes half as much damage. This damage increases by 1d10 when you reach character levels 5 (2d10), 11 (3d10), and 17 (4d10). You can use this Breath Weapon a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
                },
                {
                  name: "Damage Resistance",
                  desc: "You have Resistance to the damage type determined by your Draconic Ancestry trait.",
                },
                {
                  name: "Darkvision",
                  desc: "You have Darkvision with a range of 60 feet.",
                },
                {
                  name: "Draconic Flight",
                  desc: "When you reach character level 5, you can channel draconic magic to give yourself temporary flight. As a Bonus Action, you sprout spectral wings on your back that last for 10 minutes or until you retract the wings (no action required) or have the Incapacitated condition. During that time, you have a Fly Speed equal to your Speed. Once you use this trait, you can't use it again until you finish a Long Rest.",
                },
              ],
            },
          ],
        },
        {
          name: "dwarf",
          race: [
            {
              name: "Dwarf",
              desc: "Dwarves are defined by their ancestral connections to mountains and the deep earth. When Moradin the Soulforger created Dwarves, he worked with stone and precious metals, and that origin still shows in their durability and resilience. Dwarves tend to be stocky, standing between 4 and 5 feet tall, with broad builds that make them exceptionally tough.",
              type: "Humanoid",
              size: "Medium (about 4–5 feet tall)",
              speed: "30 feet",
              feats: [
                {
                  name: "Darkvision",
                  desc: "You have Darkvision with a range of 120 feet.",
                },
                {
                  name: "Dwarven Resilience",
                  desc: "You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition.",
                },
                {
                  name: "Dwarven Toughness",
                  desc: "Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level.",
                },
                {
                  name: "Stonecunning",
                  desc: "As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked. You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
                },
              ],
            },
          ],
        },
        {
          name: "elf",
          race: [
            {
              name: "Elf",
              desc: "Created by the god Corellon, the first Elves could change their forms at will. They lost this ability after the betrayal of Lolth, and were cursed to have fixed forms. Elves have pointed ears and lack facial and body hair. They live for around 750 years and don't sleep, instead entering a trancelike meditative state. Three lineages exist: Drow, who typically dwell in the Underdark; High Elves, infused with Feywild magic; and Wood Elves, who carry the magic of primeval forests.",
              type: "Humanoid",
              size: "Medium (about 5–6 feet tall)",
              speed: "30 feet",
              feats: [
                {
                  name: "Darkvision",
                  desc: "You have Darkvision with a range of 60 feet.",
                },
                {
                  name: "Elven Lineage",
                  desc: "You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage. When you reach character levels 3 and 5, you learn a higher-level spell as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability when you finish a Long Rest. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose when you select the lineage).",
                  table: [
                    [
                      {
                        lineage: "Drow",
                        level1:
                          "Darkvision increases to 120 ft. You know the Dancing Lights cantrip.",
                        level3: "Faerie Fire",
                        level5: "Darkness",
                      },
                      {
                        lineage: "High Elf",
                        level1:
                          "You know the Prestidigitation cantrip. Whenever you finish a Long Rest, you can replace that cantrip with a different cantrip from the Wizard spell list.",
                        level3: "Detect Magic",
                        level5: "Misty Step",
                      },
                      {
                        lineage: "Wood Elf",
                        level1:
                          "Your Speed increases to 35 feet. You also know the Druidcraft cantrip.",
                        level3: "Longstrider",
                        level5: "Pass Without Trace",
                      },
                    ],
                  ],
                },
                {
                  name: "Fey Ancestry",
                  desc: "You have Advantage on saving throws you make to avoid or end the Charmed condition.",
                },
                {
                  name: "Keen Senses",
                  desc: "You have proficiency in the Insight, Perception, or Survival skill (choose one).",
                },
                {
                  name: "Trance",
                  desc: "You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
                },
              ],
            },
          ],
        },
        {
          name: "gnome",
          race: [
            {
              name: "Gnome",
              desc: "Gnomes are magical folk created by gods of invention, illusions, and life underground. The earliest Gnomes were fashioned from the magic of gemstones buried in the earth, and their connection to that magic endures. Gnomes tend to be short and wiry, standing between 3 and 4 feet tall, and are inquisitive beings with a love of tinkering and discovery.",
              type: "Humanoid",
              size: "Small (about 3–4 feet tall)",
              speed: "30 feet",
              feats: [
                {
                  name: "Darkvision",
                  desc: "You have Darkvision with a range of 60 feet.",
                },
                {
                  name: "Gnomish Cunning",
                  desc: "You have Advantage on Intelligence, Wisdom, and Charisma saving throws.",
                },
                {
                  name: "Gnomish Lineage: Forest Gnome",
                  desc: "You know the Minor Illusion cantrip. You also always have the Speak with Animals spell prepared. You can cast it without a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest. You can also use any spell slots you have to cast the spell.",
                },
                {
                  name: "Gnomish Lineage: Rock Gnome",
                  desc: "You know the Mending and Prestidigitation cantrips. In addition, you can spend 10 minutes casting Prestidigitation to create a Tiny clockwork device (AC 5, 1 HP), such as a toy, fire starter, or music box. The device produces one chosen effect from Prestidigitation whenever a creature uses a Bonus Action to activate it. You can have three such devices in existence at a time; each falls apart 8 hours after creation or when you dismantle it as a Utilize action.",
                },
              ],
            },
          ],
        },
        {
          name: "goliath",
          race: [
            {
              name: "Goliath",
              desc: "Goliaths are distantly descended from giants and have inherited a fraction of their size and strength. Stones, sky, and wind are as much a part of Goliaths as flesh and blood. Their resilience and competitive nature make them natural adventurers. They stand between 7 and 8 feet tall and are generally regarded as imposing.",
              type: "Humanoid",
              size: "Medium (about 7–8 feet tall)",
              speed: "35 feet",
              feats: [
                {
                  name: "Giant Ancestry: Cloud's Jaunt (Cloud Giant)",
                  desc: "As a Bonus Action, you magically teleport up to 30 feet to an unoccupied space you can see. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
                },
                {
                  name: "Giant Ancestry: Fire's Burn (Fire Giant)",
                  desc: "When you hit a target with an attack roll and deal damage to it, you can also deal 1d10 Fire damage to that target. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
                },
                {
                  name: "Giant Ancestry: Frost's Chill (Frost Giant)",
                  desc: "When you hit a target with an attack roll and deal damage to it, you can also deal 1d6 Cold damage to that target and reduce its Speed by 10 feet until the start of your next turn. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
                },
                {
                  name: "Giant Ancestry: Hill's Tumble (Hill Giant)",
                  desc: "When you hit a Large or smaller creature with an attack roll and deal damage to it, you can give that target the Prone condition. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
                },
                {
                  name: "Giant Ancestry: Stone's Endurance (Stone Giant)",
                  desc: "When you take damage, you can take a Reaction to roll 1d12. Add your Constitution modifier to the number rolled and reduce the damage by that total. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
                },
                {
                  name: "Giant Ancestry: Storm's Thunder (Storm Giant)",
                  desc: "When you take damage from a creature within 60 feet of you, you can take a Reaction to deal 1d8 Thunder damage to that creature. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
                },
                {
                  name: "Large Form",
                  desc: "Starting at character level 5, you can change your size to Large as a Bonus Action if you're in a big enough space. This transformation lasts for 10 minutes or until you end it (no action required). For that duration, you have Advantage on Strength checks, and your Speed increases by 10 feet. Once you use this trait, you can't use it again until you finish a Long Rest.",
                },
                {
                  name: "Powerful Build",
                  desc: "You have Advantage on any ability check you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity.",
                },
              ],
            },
          ],
        },
        {
          name: "halfling",
          race: [
            {
              name: "Halfling",
              desc: "Halflings are small, nimble folk who cherish the comforts of home but are pulled by wanderlust and a love of adventure. Practical and resourceful, they have a knack for slipping out of danger and finding their way into good fortune. They stand about 2 to 3 feet tall and are often mistaken for human children, though their hairy feet and cheerful demeanor quickly set them apart.",
              type: "Humanoid",
              size: "Small (about 2–3 feet tall)",
              speed: "30 feet",
              feats: [
                {
                  name: "Brave",
                  desc: "You have Advantage on saving throws you make to avoid or end the Frightened condition.",
                },
                {
                  name: "Halfling Nimbleness",
                  desc: "You can move through the space of any creature that is a size larger than you, but you can't stop in the same space.",
                },
                {
                  name: "Luck",
                  desc: "When you roll a 1 on the d20 of a D20 Test, you can reroll the die, and you must use the new roll.",
                },
                {
                  name: "Naturally Stealthy",
                  desc: "You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you.",
                },
              ],
            },
          ],
        },
        {
          name: "human",
          race: [
            {
              name: "Human",
              desc: "Humans are the most adaptable and widespread of all species in the multiverse. Their ambition, curiosity, and restless drive have allowed them to build great empires and spread to every corner of the known world. Unlike other species, Humans have no single homeland and no singular defining trait — they are united by their sheer diversity and their hunger to grow, explore, and achieve.",
              type: "Humanoid",
              size: "Medium (about 4–7 feet tall) or Small (about 2–4 feet tall), chosen when you select this species",
              speed: "30 feet",
              feats: [
                {
                  name: "Resourceful",
                  desc: "You gain Heroic Inspiration whenever you finish a Long Rest.",
                },
                {
                  name: "Skillful",
                  desc: "You gain proficiency in one skill of your choice.",
                },
                {
                  name: "Versatile",
                  desc: "You gain an Origin feat of your choice. Skilled is recommended.",
                },
              ],
            },
          ],
        },
        {
          name: "orc",
          race: [
            {
              name: "Orc",
              desc: "Orcs trace their creation to Gruumsh, the mighty god of slaughter and storms, who poured fury and hunger into their hearts. Even those Orcs who turn away from Gruumsh's cruelty carry his gifts: a relentless will to push forward and a body that refuses to surrender. Orcs are powerfully built humanoids standing over 6 feet tall, with prominent tusks and deep-set eyes.",
              type: "Humanoid",
              size: "Medium (about 6–7 feet tall)",
              speed: "30 feet",
              feats: [
                {
                  name: "Adrenaline Rush",
                  desc: "You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Short or Long Rest.",
                },
                {
                  name: "Darkvision",
                  desc: "You have Darkvision with a range of 120 feet.",
                },
                {
                  name: "Relentless Endurance",
                  desc: "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once you use this trait, you can't do so again until you finish a Long Rest.",
                },
              ],
            },
          ],
        },
        {
          name: "tiefling",
          race: [
            {
              name: "Tiefling",
              desc: "Tieflings are either born in the Lower Planes or have fiendish ancestors who originated there. A tiefling's fiendish traits can be a source of pride or shame — and sometimes both. Three fiendish legacies exist: the Abyssal legacy tied to demons and chaos; the Chthonic legacy linked to yugoloths and night hags; and the Infernal legacy descending from devils.",
              type: "Humanoid",
              size: "Medium (about 4–7 feet tall) or Small (about 3–4 feet tall), chosen when you select this species",
              speed: "30 feet",
              feats: [
                {
                  name: "Darkvision",
                  desc: "You have Darkvision with a range of 60 feet.",
                },
                {
                  name: "Fiendish Legacy",
                  desc: "You are the recipient of a legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of the chosen legacy. When you reach character levels 3 and 5, you learn a higher-level spell as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability when you finish a Long Rest. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose when you select the legacy).",
                  table: [
                    [
                      {
                        legacy: "Abyssal",
                        level1:
                          "Resistance to Poison damage. You also know the Poison Spray cantrip.",
                        level3: "Ray of Sickness",
                        level5: "Hold Person",
                      },
                      {
                        legacy: "Chthonic",
                        level1:
                          "Resistance to Necrotic damage. You also know the Chill Touch cantrip.",
                        level3: "False Life",
                        level5: "Ray of Enfeeblement",
                      },
                      {
                        legacy: "Infernal",
                        level1:
                          "Resistance to Fire damage. You also know the Fire Bolt cantrip.",
                        level3: "Hellish Rebuke",
                        level5: "Darkness",
                      },
                    ],
                  ],
                },
                {
                  name: "Otherworldly Presence",
                  desc: "You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy trait.",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.center {
  width: 50%;
}
</style>
