<template>
  <div class="center">
    <v-row  justify="center" row-height="5">
      <v-col v-for="(race,index) in races"  :key="race.id" cols="3">
        <v-card @click="goTo(race.label)" height="300" width="300" class="text-center">
          <v-card-title @mouseover="mouseOver(index)" @mouseout="mouseOver(index)" > {{ race.label }}</v-card-title>
          <v-img @mouseover="mouseOver(index)" @mouseout="mouseOver(index)"  src="../assets/image.png"></v-img>
          <v-expand-transition>
            <v-card class="v-card--reveal" v-if="race.active">Nisi eu exercitation aliqua officia eu ut aliquip non reprehenderit mollit. Cillum enim magna esse in ullamco excepteur Lorem. Sint non sunt et ullamco veniam incididunt. Voluptate ipsum mollit laboris aute officia ea officia sint. Occaecat laborum laboris duis labore culpa eu consectetur enim enim veniam sunt deserunt. Culpa commodo ut voluptate magna.</v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import router from "@/router";

export default {
  
  methods:{
    mouseOver(index){
      this.races[index].active = !this.races[index].active;
    },

    goTo(label){
      router.push("/wiki/races/"+label.toLowerCase())
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