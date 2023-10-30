<template>
  <div class="center">
    <v-row  justify="center" row-height="5">
      <v-col v-for="race in races" :key="race.id" cols="3">
        <v-card class="text-center">
          <v-card-title>{{ race.label }}</v-card-title>
          <v-img src="../assets/image.png"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import {ref} from 'vue'
export default{
  data() {
    return {
      races:ref([
  {id:0,label:"Dwarf"},
  {id:1,label:"Elf"},
  {id:2,label:"Goblin"},
  {id:3,label:"Human"},
  
])
    }
  },
}




</script>