<template>
  <div class="center mt-15">
    <v-card v-for="sub in subClass" :key="sub.id">
      <v-card-text>
         {{ sub.name }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>


export default {
  

  data() {
    return {
      url: this.$route.href.split("/").pop(),
      computed:{
          subClass:function(){
            return this.barbarian.filter(i => i.name==this.url)
          }
      },

      barbarian: [

      {index:1},
      {name:"ancestral_guardian" ,content:[
        {level:"Level 3", title:"Ancestral Protectors", desc:"Spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends."}
      ]
      },
      
      {battlerager:[]},
      {beast:[]}	,
      {berserker:[]}	,
      {storm_herald:[]}	,
      {totem_warrior:[]}	,
      {wild_magic:[]}	,
      {zealot:[]},
      ],
    };
  },
};
</script>
