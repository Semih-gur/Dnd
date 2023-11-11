<template>
  <div class="center mt-16">
    <v-card v-for="sub in subClass.sub" :key="sub.lvl" class="">
      <v-card-title>Level {{ sub.lvl }}</v-card-title>
      <v-card-text>
        <h3>{{ sub.title }}</h3>
        <p style="white-space: pre-wrap;">{{ sub.desc }}</p>
        <br>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    subClass: function () {
      for (let i = 0; i < this.class.length; i++) {
        if (this.class[i].name == this.url) {
          return this.class[i];
        }
      }
      return "nothing";
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),

      class: [
        {
          name: "ancestral_guardian",
          sub: [
            {
              lvl: "3",
              title: "Ancestral Protectors",
              desc: "Spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends.",
            },
            {
              lvl: "6",
              title: "Spirit Shield",
              desc: "The guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.\n\nWhen you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.",
            },
            {
              lvl: "10",
              title: "Consult the Spirits",
              desc: "You gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.\n\nAfter you cast either spell in this way, you can't use this feature again until you finish a short or long rest.",
            },
            {
              lvl: "14",
              title: "Vengeful Ancestors",
              desc: "Your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage that your Spirit Shield prevents.",
            },
          ],
        },
        {
          name: "battlerager",
          sub: [
            {
              lvl: "3",
              title: "Battlerager Armor",
              desc: "You gain the ability to use spiked armor as a weapon.\r\rWhile you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.\n\nAdditionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds.",
            },
            {
              lvl: "6",
              title: "Reckless Abandon",
              desc: "You use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends.",
            },
            {
              lvl: "10",
              title: "Battlerager Charge",
              desc: "You can take the Dash action as a bonus action while you are raging.",
            },
            {
              lvl: "14",
              title: "Spiked Retribution",
              desc: "When a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor.",
            },
          ],
        },
        {
          name: "beast",
          sub: [
            { lvl: "3", title: "Form of the Beast", desc: "Starting when you choose this path, when you enter your rage, you can transform, revealing the bestial power within you. Until the rage ends, you manifest a natural weapon. It counts as a simple melee weapon for you, and you add your Strength modifier to the attack and damage rolls when you attack with it, as normal.\n\nYou choose the weapon’s form each time you rage:\n\nBite: Your mouth transforms into a bestial muzzle or great mandibles (your choice). It deals 1d8 piercing damage on a hit. Once on each of your turns when you damage a creature with this bite, you regain a number of hit points equal to your proficiency bonus, provided you have less than half your hit points when you hit.\n\nClaws: Each of your hands transforms into a claw, which you can use as a weapon if it’s empty. It deals 1d6 slashing damage on a hit. Once on each of your turns when you attack with a claw using the Attack action, you can make one additional claw attack as part of the same action.\n\nTail: You grow a lashing, spiny tail, which deals 1d8 piercing damage on a hit and has the reach property. If a creature you can see within 10 feet of you hits you with an attack roll, you can use your reaction to swipe your tail and roll a d8, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss you." },
            { lvl: "6", title: "Bestial Soul", desc: "The feral power within you increases, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.\n\nYou can also alter your form to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish a short or long rest:\n\n--You gain a swimming speed equal to your walking speed, and you can breathe underwater.\n\n--You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.\n\n--When you jump, you can make a Strength (Athletics) check and extend your jump by a number of feet equal to the check’s total. You can make this special check only once per turn." },
            { lvl: "10", title: "Infectious Fury", desc: "When you hit a creature with your natural weapons while you are raging, the beast within you can curse your target with rabid fury. The target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the following effects (your choice):\n\n--The target must use its reaction to make a melee attack against another creature of your choice that you can see.\n\n--Target takes 2d12 psychic damage.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest." },
            { lvl: "14", title: "Call the Hunt", desc: "The beast within you grows so powerful that you can spread its ferocity to others and gain resilience from them joining your hunt.\n\nWhen you enter your rage, you can choose a number of other willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature). You gain 5 temporary hit points for each creature that accepts this feature. Until the rage ends, the chosen creatures can use the following benefit once on each of their turns: when the creature hits a target with an attack roll and deals damage to it, the creature can roll a d6 and gain a bonus to the damage equal to the number rolled.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest." },
          ],
        },
        {
          name:"berserker",
          sub:[
            {lvl:"3",title:"Frenzy",desc:"Starting when you choose this path, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion."},
            {lvl:"6",title:"Mindless Rage",desc:"You can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."},
            {lvl:"10",title:"Intimidating Presence",desc:"You can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.\n\nIf the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours."},
            {lvl:"14",title:"Retaliation",desc:"When you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature."},
            
          ]
        },
        { 
          name:"giant",
          sub:[
            {lvl:"3",title:"Giant’s Power",desc:"When you choose this path, you learn to speak, read, and write Giant or one other language of your choice if you already know Giant. Additionally, you learn a cantrip of your choice: either druidcraft or thaumaturgy. Wisdom is your spellcasting ability for this spell.",},
            {lvl:"3",title:"Giant’s Havoc",desc:"Your rages pull strength from the primal might of giants, transforming you into a hulking force of destruction. While raging, you gain the following benefits:\n\n--When you make a successful ranged attack with a thrown weapon using Strength, you can add your Rage Damage bonus to the attack’s damage roll.\n\n--Your reach increases by 5 feet, and if you are smaller than Large, you become Large, along with anything you are wearing. If there isn’t enough room for you to increase your size, your size doesn’t change.",},
            {lvl:"6",title:"Elemental Cleaver",desc:"Your bond with the elemental might of giants grows, and you learn to infuse weapons with primordial energy.\n\nWhen you enter your rage, you can choose one weapon that you are holding and infuse it with one of the following damage types: acid, cold, fire, thunder, or lightning. While you wield the infused weapon during your rage, the weapon’s damage type changes to the chosen type, it deals an extra 1d6 damage of the chosen type when it hits, and it gains the thrown property, with a normal range of 20 feet and a long range of 60 feet. If you throw the weapon, it reappears in your hand the instant after it hits or misses a target. The infused weapon’s benefits are suppressed while a creature other than you wields it.\n\nWhile raging and holding the infused weapon, you can use a bonus action to change the infused weapon’s current damage type to another one from the damage type options above.",},
            {lvl:"10",title:"Mighty Impel",desc:"Your connection to giant strength allows you to hurl both allies and enemies on the battlefield. As a bonus action while raging, you can choose one Medium or smaller creature within your reach and move it to an unoccupied space you can see within 30 feet of yourself. An unwilling creature must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + your Strength modifier) to avoid the effect.\n\nIf, at the end of this movement, the thrown creature isn’t on a surface or liquid that can support it, the creature falls, taking damage as normal and landing prone.",},
            {lvl:"14",title:"Demiurgic Colossus",desc:"The primordial power of your rage intensifies. When you rage, your reach increases by 10 feet, your size can increase to Large or Huge (your choice), and you can use your Mighty Impel to move creatures that are Large or smaller.\n\nn addition, the extra damage dealt by your Elemental Cleaver feature increases to 2d6.",},
          ]
        },
        {
          name:"storm_herald",
          sub:[
            {lvl:"3",title:"Storm Aura",desc:"When you select this path at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.\n\nYour aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.\n\nIf your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.\n\nDesert: When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.\n\nSea: When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to 2d6 at 10th level, 3d6 at 15th level, and 4d6 at 20th level.\n\nTundra: When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level."},
            {lvl:"6",title:"",desc:""},
            {lvl:"",title:"",desc:""},
            {lvl:"",title:"",desc:""},
          ]
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
