<template>
  <v-app class="d-flex align-items-center">
    <div class="mb-5">
      <v-app-bar elevation="3">
        <v-spacer></v-spacer>
        <v-btn size="x-large" @click="home()">
          <v-icon>mdi-home</v-icon>
          <v-tooltip activator="parent" location="bottom">Home</v-tooltip>
        </v-btn>
        <v-app-bar-title>
          {{ navTitle.replace("_", " ") }}
        </v-app-bar-title>
        <v-btn @click="races()">
          <v-icon size="x-large">mdi-account</v-icon>
          <v-tooltip activator="parent" location="bottom">Races</v-tooltip>
        </v-btn>
        <v-btn @click="classes()">
          <v-icon size="x-large">mdi-axe</v-icon>
          <v-tooltip activator="parent" location="bottom">Classes</v-tooltip>
        </v-btn>
        <v-btn @click="classes()">
          <v-icon size="x-large">mdi-auto-fix</v-icon>
          <v-tooltip activator="parent" location="bottom">Spells</v-tooltip>
        </v-btn>
        <v-btn @click="classes()">
          <v-icon size="x-large">mdi-account-star</v-icon>
          <v-tooltip activator="parent" location="bottom"
            >Backgrounds</v-tooltip
          >
        </v-btn>
        <v-btn @click="classes()">
          <v-icon size="x-large">mdi-feather</v-icon>
          <v-tooltip activator="parent" location="bottom">Feats</v-tooltip>
        </v-btn>
        <v-spacer></v-spacer>
      </v-app-bar>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import router from "@/router";

export default {
  name: "App",
  computed: {
    navTitle: function () {
      if (this.$route.path === "/") {
        return "Home";
      } else {
        const lastPart = this.$route.href.split("/").pop();
        return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
      }
    },
  },
  data() {
    return {};
  },

  methods: {
    home() {
      router.push("/");
    },

    classes() {
      router.push("/wiki/classes");
    },

    races() {
      router.push("/wiki/races");
    },
  },
};
</script>

<style></style>
