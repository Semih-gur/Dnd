<template>
    <div class="center">
      <v-row  justify="center" row-height="5">
        <v-col class="mr-n5" v-for="(race,index) in races"  :key="race.id" lg="3" md="4">
          <v-card @click="goTo(race.label)" height="300" width="300" class="text-center">
            <v-card-title @mouseover="mouseOver(index)" @mouseout="mouseOver(index)" > {{ race.label }}</v-card-title>
            <v-img @mouseover="mouseOver(index)" @mouseout="mouseOver(index)"  src="../assets/image.png"></v-img>
            <v-expand-transition>
              <v-card class="v-card--reveal" v-if="race.active">
                <v-card-text>{{ race.desc}}</v-card-text>
                <v-card-text>{{ race.bonus }}</v-card-text>
              </v-card>
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
      },
  
    },
  
      
    }
  
  
  
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