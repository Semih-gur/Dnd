<template>
  <div class="center">
    <v-row  justify="center" row-height="5">
      <v-col v-for="(race,index) in races"  :key="race.id" cols="3">
        <v-card   height="300" width="300" class="text-center">
          <v-card-title @mouseover="mouseOver(index)" @mouseout="mouseOver(index)" > {{ race.label }}</v-card-title>
          <v-img @mouseover="mouseOver(index)" @mouseout="mouseOver(index)"  src="../assets/image.png"></v-img>
          <v-expand-transition>
            <v-card class="v-card--reveal" v-if="race.active">This is a secret</v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>

export default {
  methods:{
    mouseOver(index){
      this.races[index].active = !this.races[index].active;
    }
  },

    data: () => ({
      reveal: false,
      races:[
      {id:0,label:"Dragonborn"},
      {id:1,label:"Dwarf"},
      {id:2,label:"Elf"},
      {id:3,label:"Gnome"},
      {id:3,label:"Half-Elf"},
      {id:3,label:"Halfling"},
      {id:3,label:"Half-Orc"},
      {id:3,label:"Tiefling"},
      ]

    }),
  }



</script>

<style>

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  height: 50%;
}
</style>