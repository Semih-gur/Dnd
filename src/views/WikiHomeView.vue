<template>
  <div class="center mt-16">
    <v-row justify="center" row-height="5">
      <v-col cols="3">
        <v-card @click="goTo('classes')" class="text-center">
          <v-card-title>Classes</v-card-title>
          <v-img src="../assets/wikiPage/class.png"></v-img>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card @click="goTo('races')" class="text-center">
            <v-card-title>Races</v-card-title>
            <v-img src="../assets/wikiPage/spells.png"></v-img> </v-card
        ></v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card @click="goTo('spells')" class="text-center">
            <v-card-title>Spells</v-card-title>
            <v-img src="../assets/wikiPage/spells.png"></v-img> </v-card
        ></v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card @click="goTo('backgrounds')" class="text-center">
            <v-card-title>Backgrounds</v-card-title>
            <v-img src="../assets/wikiPage/backgrounds.png"></v-img> </v-card
        ></v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card @click="goTo('feats')" class="text-center">
            <v-card-title>Feats</v-card-title>
            <v-img src="../assets/wikiPage/quill.png"></v-img> </v-card
        ></v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="text-center"
          ><v-card class="text-center">
            <v-card-title>Items</v-card-title>
            <v-img src="../assets/wikiPage/items.png"></v-img> </v-card
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    goTo(page) {
      router.push("wiki/" + page);
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
