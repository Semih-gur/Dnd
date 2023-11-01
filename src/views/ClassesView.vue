<template>
    <div class="center">
      <v-row  justify="center" row-height="5">
        <v-col class="mr-n5" v-for="(cclass,index) in classes"  :key="cclass.id" lg="3" md="4">
          <v-card @click="goTo(cclass.label)" height="300" width="300" class="text-center">
            <v-card-title @mouseover="mouseOver(index)" @mouseout="mouseOver(index)" > {{ cclass.label }}</v-card-title>
            <v-img @mouseover="mouseOver(index)" @mouseout="mouseOver(index)"  src="../assets/image.png"></v-img>
            <v-expand-transition>
              <v-card class="v-card--reveal" v-if="cclass.active">
                <v-card-text>{{ cclass.desc}}</v-card-text>
                <v-card-text>{{ cclass.bonus }}</v-card-text>
              </v-card>
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
      this.classes[index].active = !this.classes[index].active;
    },

    goTo(label){
      router.push("/wiki/classes/"+label.toLowerCase())
    }
  },

    data: () => ({
      reveal: false,
      classes:[
      {id:0,label:"Barbarian",desc:"Dolor excepteur tempor veniam dolore do do aute irure cillum tempor"},
      {id:1,label:"Bard",desc:"Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat"},
      {id:2,label:"Cleric",desc:"Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat"},
      {id:3,label:"Druid",desc:"Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat"},
      {id:4,label:"Monk",desc:"Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat"},
      {id:5,label:"Paladin",desc:"Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat"},
      {id:6,label:"Ranger",desc:"Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat"},
      {id:7,label:"Rogue",desc:"Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat"},
      {id:8,label:"Warlock",desc:"Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat"},
      {id:9,label:"Wizard",desc:"Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat"},
      ],

    }),
  

};
</script>
<style>


.v-card--reveal {
  
  pointer-events: none;
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  height: 50%;
}
</style>