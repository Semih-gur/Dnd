<template>
  <h1 class="text-center">Dragonborne Tavern</h1>
  <div class="center">
    <v-row justify="center" row-height="5">
      <v-col cols="3">
        <v-card class="text-center">
          <v-img class="align-center" src="../assets/image.png"
            ><h1>Character Creator</h1></v-img
          >
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card @click="goWiki()" class="text-center">
          <v-img class="align-center" src="../assets/image.png"
            ><h1>Wiki</h1></v-img
          >
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
.center {
  width: 90%;
  margin: auto;
}
</style>
