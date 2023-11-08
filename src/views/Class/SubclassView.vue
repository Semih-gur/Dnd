<template>
  <div class="center mt-15">
    <v-card v-for="sub in subClass.sub" :key="sub.lvl" class="">
      <v-card-title>Level {{ sub.lvl }}</v-card-title>
      <v-card-text >
        <h3>{{ sub.title }}</h3>
        <p class="pre-formatted">{{ sub.desc }} </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    subClass: function () {
      for (let index = 0; index < this.class.length; index++) {
        if (this.class[index].name == this.url) {
          return this.class[index];
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
            { lvl: "3", title:"Ancestral Protectors",desc:"Spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends." },
            { lvl: "6", title: "Spirit Shield", desc:"The guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.\n\nWhen you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level." },
            { lvl:"10",title:"Consult the Spirits",desc:"You gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.\n\nAfter you cast either spell in this way, you can't use this feature again until you finish a short or long rest."},
            { lvl:"14" ,title:"Vengeful Ancestors",desc:"Your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage that your Spirit Shield prevents."},
          
          ],
        },
        {
          name: "battlerager",
          sub: [
            { lvl: "3", title: "Battlerager Armor", desc:"You gain the ability to use spiked armor as a weapon.\r\rWhile you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.\n\nAdditionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds." },
            { lvl: "6", title: "Reckless Abandon", desc:"You use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends." },
            { lvl: "10", title: "Battlerager Charge", desc:"You can take the Dash action as a bonus action while you are raging." },
            { lvl: "14", title: "Spiked Retribution", desc:"When a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor." },
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