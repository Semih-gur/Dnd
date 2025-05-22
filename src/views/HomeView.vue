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
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="text-center">
          <v-img class="align-center" src="../assets/cCreator.png"></v-img>
          <div class="text-overlay">
            <p class="text">Character Creator</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card @click="goWiki()" class="text-center">
          <v-img class="align-center" src="../assets/wiki.png"></v-img>
          <div class="text-overlay">
            <p class="text">Wiki</p>
          </div>
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
.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 10px;
}

.text {
  color: white;
  font-size: 32px;
  white-space: nowrap;
}

.title {
  width: 50%;
  align-self: center;
}

.center {
  width: 90%;
  margin: auto;
}
</style>
