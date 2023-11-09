<template>
  <v-app class="d-flex align-items-center">
    <div class="mb-5">
      <v-app-bar elevation="3">
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          @click="home()"
          icon="mdi-home"
        ></v-app-bar-nav-icon>
        <v-app-bar-title>
          {{ navTitle.replace("_", " ").toUpperCase() }}
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn @click="races()" icon="mdi-account"></v-btn>
        <v-btn @click="classes()" icon="mdi-axe"></v-btn>
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
      if (this.$route.href == undefined) {
        return "Home";
      } else {
        return this.$route.href.split("/").pop();
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
