<template>
  <div class="title mt-15">
    <h1 class="text-center">Beholder's Tavern</h1>
    <br />
    <p class="text-center">
      Welcome to Beholder's Tavern where we want to help you with your Dungeons
      and Dragons 5th Edition needs. From character creation to information
      about classes, races, spells and more.
    </p>
    <br />
    <p class="text-center">Continue your journey by clicking images below:</p>
  </div>
  <div class="center">
    <v-row justify="center" row-height="5">
      <v-col cols="3">
        <v-card class="text-center">
          <v-img class="align-center" src="../assets/cCreator.png"
            ><h1>Character Creator</h1></v-img
          >
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card @click="goWiki()" class="text-center">
          <v-img class="align-center" src="../assets/wiki.png"
            ><h1>Wiki</h1></v-img
          >
          {{ BookOpenText }}
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    goWiki() {
      router.push("/wiki");
    },
    goChar() {
      router.push("/ccreator");
    },
  },
};
</script>

<style>
.title {
  width: 50%;
  align-self: center;
}

.center {
  width: 90%;
  margin: auto;
}
</style>
