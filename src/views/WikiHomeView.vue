<template>
  <div class="center">
    <v-row justify="center" row-height="5">
      <v-col cols="3">
        <v-card @click="classes()" class="text-center">
          <v-card-title>Classes</v-card-title>
          <v-img src="../assets/image.png"></v-img>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card @click="races()" class="text-center">
            <v-card-title>Races</v-card-title>
            <v-img src="../assets/image.png"></v-img> </v-card
        ></v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card @click="spells()" class="text-center">
            <v-card-title>Spells</v-card-title>
            <v-img src="../assets/image.png"></v-img> </v-card
        ></v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card @click="bg()" class="text-center">
            <v-card-title>Backgrounds</v-card-title>
            <v-img src="../assets/image.png"></v-img> </v-card
        ></v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card class="text-center">
            <v-card-title>Feats</v-card-title>
            <v-img src="../assets/image.png"></v-img> </v-card
        ></v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card class="text-center">
            <v-card-title>Items</v-card-title>
            <v-img src="../assets/image.png"></v-img> </v-card
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    bg() {
      router.push("wiki/backgrounds");
    },

    classes() {
      router.push("wiki/classes");
    },

    races() {
      router.push("/wiki/races");
    },

    spells() {
      router.push("/wiki/spells");
    },
  },
};
</script>

<style>
.center {
  width: 50%;
  margin: auto;
}
</style>
