<template>
  <div class="center mt-16">
    <v-card v-for="sub in subClass.sub" :key="sub.lvl" class="">
      <v-card-title>{{ sub.lvl }}</v-card-title>
      <v-card-text>
        <h3>{{ sub.title }}</h3>
        <span style="white-space: pre-wrap" v-html="sub.desc"></span>
        <br />
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
          name: "lore",
          sub: [
            { lvl: "", title: "", desc: "" },
            { lvl: "", title: "", desc: "" },
            { lvl: "", title: "", desc: "" },
            { lvl: "", title: "", desc: "" },
          ],
        },
        {
          name: "lore",
          sub: [
            { lvl: "", title: "", desc: "" },
            { lvl: "", title: "", desc: "" },
            { lvl: "", title: "", desc: "" },
            { lvl: "", title: "", desc: "" },
          ],
        },
        {
          name: "swords",
          sub: [
            {
              lvl: "Level 3",
              title: "Bonus Proficiencies",
              desc: "When you join the College of Swords at 3rd level, you gain proficiency with medium armor and the scimitar.\nIf you’re proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your bard spells.",
            },
            {
              lvl: "",
              title: "Fighting Style",
              desc: "At 3rd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.\n<ul><li><strong>Dueling:</strong></li></ul>",
            },
            { lvl: "", title: "", desc: "" },
            { lvl: "", title: "", desc: "" },
          ],
        },
        {
          name: "spirits",
          sub: [
            {
              lvl: "Level 3",
              title: "Guiding Whispers",
              desc: "At 3rd level, you can reach out to spirits to guide you and others. You learn the Guidance cantrip, which doesn’t count against the number of bard cantrips you know. For you, it has a range of 60 feet when you cast it.",
            },
            {
              lvl: "",
              title: "Spiritual Focus",
              desc: "At 3rd level, you employ tools that aid you in channeling spirits, be they historical figures or fictional archetypes. You can use the following objects as a spellcasting focus for your bard spells: a candle, crystal ball, skull, spirit board, or tarokka deck.\nStarting at 6th level, when you cast a bard spell that deals damage or restores hit points through the Spiritual Focus, roll a d6, and you gain a bonus to one damage or healing roll of the spell equal to the number rolled.",
            },
            { lvl: "", title: "", desc: "" },
            { lvl: "", title: "", desc: "" },
          ],
        },
        {
          name: "lore",
          sub: [
            {
              lvl: "Level 3",
              title: "Bonus Proficiencies",
              desc: "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.",
            },
            {
              lvl: "",
              title: "Cutting Words",
              desc: "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.",
            },
            {
              lvl: "Level 6",
              title: "Additional Magical Secrets",
              desc: "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.",
            },
            {
              lvl: "Level 14",
              title: "Peerless Skill",
              desc: "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.",
            },
          ],
        },
        {
          name: "glamour",
          sub: [
            {
              lvl: "Level 3",
              title: "Mantle of Inspiration",
              desc: "When you join the College of Glamour at 3rd level, you gain the ability to weave a song of fey magic that imbues your allies with vigor and speed.\n\nAs a bonus action, you can expend one use of your Bardic Inspiration to grant yourself a wondrous appearance. When you do so, choose a number of creatures you can see and who can see you within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one). Each of them gains 5 temporary hit points. When a creature gains these temporary hit points, it can immediately use its reaction to move up to its speed, without provoking opportunity attacks.\n\nThe number of temporary hit points increases when you reach certain levels in this class, increasing to 8 at 5th level, 11 at 10th level, and 14 at 15th level.",
            },
            {
              lvl: "",
              title: "Enthralling Performance",
              desc: "Starting at 3rd level, you can charge your performance with seductive, fey magic.\n\nIf you perform for at least 1 minute, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be charmed by you. While charmed in this way, the target idolizes you, it speaks glowingly of you to anyone who speaks to it, and it hinders anyone who opposes you, avoiding violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies.\n\nIf a target succeeds on its saving throw, the target has no hint that you tried to charm it.\n\nOnce you use this feature, you can’t use it again until you finish a short or long rest.",
            },
            {
              lvl: "Level 6",
              title: "Mantle of Majesty",
              desc: "At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you cast Command, without expending a spell slot, and you take on an appearance of unearthly beauty for 1 minute or until your concentration ends (as if you were concentrating on a spell). During this time, you can cast Command as a bonus action on each of your turns, without expending a spell slot.\n\nAny creature charmed by you automatically fails its saving throw against the Command you cast with this feature.\n\nOnce you use this feature, you can’t use it again until you finish a long rest.",
            },
            {
              lvl: "Level 14",
              title: "Unbreakable Majesty",
              desc: "At 14th level, your appearance permanently gains an otherworldly aspect that makes you look more lovely and fierce.\n\nIn addition, as a bonus action, you can assume a magically majestic presence for 1 minute or until you are incapacitated. For the duration, whenever any creature tries to attack you for the first time on a turn, the attacker must make a Charisma saving throw against your spell save DC. On a failed save, it can't attack you on this turn, and it must choose a new target for its attack or the attack is wasted. On a successful save, it can attack you on this turn, but it has disadvantage on any saving throw it makes against your spells on your next turn.\n\nOnce you assume this majestic presence, you can't do so again until you finish a short or long rest.",
            },
          ],
        },
        {
          name: "eloquence",
          sub: [
            {
              lvl: "Level 3",
              title: "Silver Tongue",
              desc: "Starting at 3rd level, you are a master at saying the right thing at the right time. When you make a Charisma (Persuasion) or Charisma (Deception) check, you can treat a d20 roll of 9 or lower as a 10.",
            },
            {
              lvl: "",
              title: "Unsettling Words",
              desc: "Also at 3rd level, you can spin words laced with magic that unsettle a creature and cause it to doubt itself. As a bonus action, you can expend one use of your Bardic Inspiration and choose one creature you can see within 60 feet of you. Roll the Bardic Inspiration die. The creature must subtract the number rolled from the next saving throw it makes before the start of your next turn.",
            },
            {
              lvl: "Level 6",
              title: "Unfailing Inspiration",
              desc: "At 6th level, your inspiring words are so persuasive that others feel driven to succeed. When a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll fails, the creature can keep the Bardic Inspiration die.",
            },
            {
              lvl: "",
              title: "Universal Speech",
              desc: "Also at 6th level, you have gained the ability to make your speech intelligible to any creature. As an action, choose one or more creatures within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). The chosen creatures can magically understand you, regardless of the language you speak, for 1 hour.\n\nOnce you use this feature, you can't use it again until you finish a long rest, unless you expend a spell slot to use it again.",
            },
            {
              lvl: "Level 14",
              title: "Infectious Inspiration",
              desc: "At 14th level, when you successfully inspire someone, the power of your eloquence can now spread to someone else. When a creature within 60 feet of you adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll succeeds, you can use your reaction to encourage a different creature (other than yourself) that can hear you within 60 feet of you, giving it a Bardic Inspiration die without expending any of your Bardic Inspiration uses.\n\nYou can use this reaction a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
            },
          ],
        },
        {
          name: "creation",
          sub: [
            {
              lvl: "Level 3",
              title: "Mote of Potential",
              desc: "When you join the College of Creation at 3rd level, whenever you give a creature a Bardic Inspiration die, you can utter a note from the Song of Creation to create a Tiny mote of potential, which orbits within 5 feet of that creature. The mote is intangible and invulnerable, and it lasts until the Bardic Inspiration die is lost. The mote looks like a musical note, a star, a flower, or another symbol of art or life that you choose.\n\nWhen the creature uses the Bardic Inspiration die, the mote provides an additional effect based on whether the die benefits an ability check, an attack roll, or a saving throw, as detailed below:\n\n<b>Ability Check:</b> When the creature rolls the Bardic Inspiration die to add it to an ability check, the creature can roll the Bardic Inspiration die again and choose which roll to use, as the mote pops and emits colorful, harmless sparks for a moment.\n\n<b>Attack Roll:</b> Immediately after the creature rolls the Bardic Inspiration die to add it to an attack roll against a target, the mote thunderously shatters. The target and each creature of your choice that you can see within 5 feet of it must succeed on a Constitution saving throw against your spell save DC or take thunder damage equal to the number rolled on the Bardic Inspiration die.\n\n<b>Saving Throw:</b> Immediately after the creature rolls the Bardic Inspiration die and adds it to a saving throw, the mote vanishes with the sound of soft music, causing the creature to gain temporary hit points equal to the number rolled on the Bardic Inspiration die plus your Charisma modifier (minimum of 1 temporary hit point). ",
            },
            {
              lvl: "",
              title: "Performance of Creation",
              desc: "Also at 3rd level, as an action, you can channel the magic of the Song of Creation to create one nonmagical item of your choice in an unoccupied space within 10 feet of you. The item must appear on a surface or in a liquid that can support it. The gp value of the item can't be more than 20 times your bard level, and the item must be Medium or smaller. The item glimmers softly, and a creature can faintly hear music when touching it. The created item disappears after a number of hours equal to your proficiency bonus. For examples of items you can create, see the equipment chapter of the Player's Handbook.\n\nOnce you create an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to use this feature again. You can have only one item created by this feature at a time; if you use this action and already have an item from this feature, the first one immediately vanishes.\n\nThe size of the item you can create with this feature increases by one size category when you reach 6th level (Large) and 14th level (Huge).",
            },
            {
              lvl: "Level 6",
              title: "Animating Performance",
              desc: "By 6th level, as an action, you can animate one Large or smaller nonmagical item within 30 feet of you that isn’t being worn or carried. The animate item uses the Dancing Item stat block, which uses your proficiency bonus (PB), The item is friendly to you and your companions and obeys your commands. It lives for 1 hour, until it is reduced to 0 hit points, or until you die.\n\nIn combat, the item shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the item can take any action of its choice, not just Dodge.\n\nWhen you use your Bardic Inspiration feature, you can command the item as part of the same bonus action you use for Bardic Inspiration.\n\nOnce you animate an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use this feature again. You can have only one item animated by this feature at a time; if you use this action and already have a dancing item from this feature, the first one immediately becomes inanimate.",
            },
            {
              lvl: "",
              title: "",
              desc: "<h3>Dancing Item</h3>\n<b>Armor Class:</b> 16(Natural Armor)\n<b>Hit Points:</b> 10 + 5 times your bard level\n<b>Speed:</b> 30ft.. fly 30ft.",
            },
            {
              lvl: "Level 14",
              title: "Creative Crescendo",
              desc: "At 14th level, when you use your Performance of Creation feature, you can create more than one item at once. The number of items equals your Charisma modifier (minimum of two items). If you create an item that would exceed that number, you choose which of the previously created items disappears. Only one of these items can be of the maximum size you can create; the rest must be Small or Tiny.\n\nYou are no longer limited by gp value when creating items with Performance of Creation.",
            },
          ],
        },
        {
          name: "ancestral_guardian",
          sub: [
            {
              lvl: "Level 3",
              title: "Ancestral Protectors",
              desc: "Spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends.",
            },
            {
              lvl: "Level 6",
              title: "Spirit Shield",
              desc: "The guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.\n\nWhen you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.",
            },
            {
              lvl: "Level 10",
              title: "Consult the Spirits",
              desc: "You gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.\n\nAfter you cast either spell in this way, you can't use this feature again until you finish a short or long rest.",
            },
            {
              lvl: "Level 14",
              title: "Vengeful Ancestors",
              desc: "Your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage that your Spirit Shield prevents.",
            },
          ],
        },
        {
          name: "battlerager",
          sub: [
            {
              lvl: "Level 3",
              title: "Battlerager Armor",
              desc: "You gain the ability to use spiked armor as a weapon.\r\rWhile you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.\n\nAdditionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds.",
            },
            {
              lvl: "Level 6",
              title: "Reckless Abandon",
              desc: "You use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends.",
            },
            {
              lvl: "Level 10",
              title: "Battlerager Charge",
              desc: "You can take the Dash action as a bonus action while you are raging.",
            },
            {
              lvl: "Level 14",
              title: "Spiked Retribution",
              desc: "When a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor.",
            },
          ],
        },
        {
          name: "beast",
          sub: [
            {
              lvl: "Level 3",
              title: "Form of the Beast",
              desc: "Starting when you choose this path, when you enter your rage, you can transform, revealing the bestial power within you. Until the rage ends, you manifest a natural weapon. It counts as a simple melee weapon for you, and you add your Strength modifier to the attack and damage rolls when you attack with it, as normal.\n\nYou choose the weapon’s form each time you rage:\n\nBite: Your mouth transforms into a bestial muzzle or great mandibles (your choice). It deals 1d8 piercing damage on a hit. Once on each of your turns when you damage a creature with this bite, you regain a number of hit points equal to your proficiency bonus, provided you have less than half your hit points when you hit.\n\nClaws: Each of your hands transforms into a claw, which you can use as a weapon if it’s empty. It deals 1d6 slashing damage on a hit. Once on each of your turns when you attack with a claw using the Attack action, you can make one additional claw attack as part of the same action.\n\nTail: You grow a lashing, spiny tail, which deals 1d8 piercing damage on a hit and has the reach property. If a creature you can see within 10 feet of you hits you with an attack roll, you can use your reaction to swipe your tail and roll a d8, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss you.",
            },
            {
              lvl: "Level 6",
              title: "Bestial Soul",
              desc: "The feral power within you increases, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.\n\nYou can also alter your form to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish a short or long rest:\n\n--You gain a swimming speed equal to your walking speed, and you can breathe underwater.\n\n--You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.\n\n--When you jump, you can make a Strength (Athletics) check and extend your jump by a number of feet equal to the check’s total. You can make this special check only once per turn.",
            },
            {
              lvl: "Level 10",
              title: "Infectious Fury",
              desc: "When you hit a creature with your natural weapons while you are raging, the beast within you can curse your target with rabid fury. The target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the following effects (your choice):\n\n--The target must use its reaction to make a melee attack against another creature of your choice that you can see.\n\n--Target takes 2d12 psychic damage.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
            },
            {
              lvl: "Level 14",
              title: "Call the Hunt",
              desc: "The beast within you grows so powerful that you can spread its ferocity to others and gain resilience from them joining your hunt.\n\nWhen you enter your rage, you can choose a number of other willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature). You gain 5 temporary hit points for each creature that accepts this feature. Until the rage ends, the chosen creatures can use the following benefit once on each of their turns: when the creature hits a target with an attack roll and deals damage to it, the creature can roll a d6 and gain a bonus to the damage equal to the number rolled.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
            },
          ],
        },
        {
          name: "berserker",
          sub: [
            {
              lvl: "Level 3",
              title: "Frenzy",
              desc: "Starting when you choose this path, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
            },
            {
              lvl: "Level 6",
              title: "Mindless Rage",
              desc: "You can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
            },
            {
              lvl: "Level 10",
              title: "Intimidating Presence",
              desc: "You can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.\n\nIf the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.",
            },
            {
              lvl: "Level 14",
              title: "Retaliation",
              desc: "When you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.",
            },
          ],
        },
        {
          name: "giant",
          sub: [
            {
              lvl: "Level 3",
              title: "Giant’s Power",
              desc: "When you choose this path, you learn to speak, read, and write Giant or one other language of your choice if you already know Giant. Additionally, you learn a cantrip of your choice: either druidcraft or thaumaturgy. Wisdom is your spellcasting ability for this spell.",
            },
            {
              lvl: "Level 3",
              title: "Giant’s Havoc",
              desc: "Your rages pull strength from the primal might of giants, transforming you into a hulking force of destruction. While raging, you gain the following benefits:\n\n--When you make a successful ranged attack with a thrown weapon using Strength, you can add your Rage Damage bonus to the attack’s damage roll.\n\n--Your reach increases by 5 feet, and if you are smaller than Large, you become Large, along with anything you are wearing. If there isn’t enough room for you to increase your size, your size doesn’t change.",
            },
            {
              lvl: "Level 6",
              title: "Elemental Cleaver",
              desc: "Your bond with the elemental might of giants grows, and you learn to infuse weapons with primordial energy.\n\nWhen you enter your rage, you can choose one weapon that you are holding and infuse it with one of the following damage types: acid, cold, fire, thunder, or lightning. While you wield the infused weapon during your rage, the weapon’s damage type changes to the chosen type, it deals an extra 1d6 damage of the chosen type when it hits, and it gains the thrown property, with a normal range of 20 feet and a long range of 60 feet. If you throw the weapon, it reappears in your hand the instant after it hits or misses a target. The infused weapon’s benefits are suppressed while a creature other than you wields it.\n\nWhile raging and holding the infused weapon, you can use a bonus action to change the infused weapon’s current damage type to another one from the damage type options above.",
            },
            {
              lvl: "Level 10",
              title: "Mighty Impel",
              desc: "Your connection to giant strength allows you to hurl both allies and enemies on the battlefield. As a bonus action while raging, you can choose one Medium or smaller creature within your reach and move it to an unoccupied space you can see within 30 feet of yourself. An unwilling creature must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + your Strength modifier) to avoid the effect.\n\nIf, at the end of this movement, the thrown creature isn’t on a surface or liquid that can support it, the creature falls, taking damage as normal and landing prone.",
            },
            {
              lvl: "Level 14",
              title: "Demiurgic Colossus",
              desc: "The primordial power of your rage intensifies. When you rage, your reach increases by 10 feet, your size can increase to Large or Huge (your choice), and you can use your Mighty Impel to move creatures that are Large or smaller.\n\nn addition, the extra damage dealt by your Elemental Cleaver feature increases to 2d6.",
            },
          ],
        },
        {
          name: "storm_herald",
          sub: [
            {
              lvl: "Level 3",
              title: "Storm Aura",
              desc: "When you select this path at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.\n\nYour aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.\n\nIf your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.\n\n<b>Desert:</b> When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.\n\n<b>Sea:</b> When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to 2d6 at 10th level, 3d6 at 15th level, and 4d6 at 20th level.\n\n<b>Tundra:</b> When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.",
            },
            {
              lvl: "Level 6",
              title: "Storm Soul",
              desc: "The storm grants you benefits even when your aura isn't active. The benefits are based on the environment you chose for your Storm Aura.\n\n<b>Desert</b>: You gain resistance to fire damage, and you don’t suffer the effects of extreme heat, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch a flammable object that isn't being worn or carried by anyone else and set it on fire.\n\n<b>Sea</b>: You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet.\n\n<b>Tundra:</b> You gain resistance to cold damage, and you don’t suffer the effects of extreme cold, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch water and turn a 5-foot cube of it into ice, which melts after 1 minute. This action fails if a creature is in the cube.",
            },
            {
              lvl: "Level 10",
              title: "Shielding Storm",
              desc: "You learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura.",
            },
            {
              lvl: "Level 14",
              title: "Raging Storm",
              desc: "The power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura.\n\n<b>Desert</b>. Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to half your Barbarian level.\n\n<b>Sea</b>: When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked prone, as if struck by a wave.\n\n<b>Tundra:</b> Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn, as magical frost covers it.",
            },
          ],
        },
        {
          name: "totem_warrior",
          sub: [
            {
              lvl: "Level 3",
              title: "Spirit Seeker",
              desc: "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the <a>Beast Sense</a> and <a>Speak With Animals </a>spells, but only as rituals",
            },
            {
              lvl: "",
              title: "AA",
              desc: "",
            },
            { lvl: "Level 10", title: "", desc: "" },
            {
              lvl: "Level 14",
              title: "",
              desc: "<p> aaaa <p>",
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
