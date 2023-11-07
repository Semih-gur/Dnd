<template>
  <v-app class="d-flex align-items-center">
    <div class="mb-5">
      <v-app-bar scroll-behavior="collapse" scroll-threshold="50" elevation="3">
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          @click="home()"
          icon="mdi-home"
        ></v-app-bar-nav-icon>
        <v-breadcrumbs :items="['1', '2', '3']"></v-breadcrumbs>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn @click="races()" icon="mdi-account"></v-btn>
        <v-btn @click="classes()" icon="mdi-axe"></v-btn>
        <v-app-bar-title> </v-app-bar-title>
      </v-app-bar>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import router from "@/router";

export default {
  name: "App",
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
  data() {
    return {};
  },
};
</script>

<style></style>
