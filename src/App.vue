<template>
  <v-app class="d-flex align-items-center">
    <div class="mb-5">
      <v-app-bar elevation="3">
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text>
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-btn @click="goTo('wiki/races')">
                <v-icon>mdi-account</v-icon>
                <v-tooltip activator="parent" location="right">Races</v-tooltip>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="goTo('wiki/classes')">
                <v-icon>mdi-sword-cross</v-icon>
                <v-tooltip activator="parent" location="right"
                  >Classes</v-tooltip
                >
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="goTo('wiki/spells')">
                <v-icon>mdi-auto-fix</v-icon>
                <v-tooltip activator="parent" location="right"
                  >Spells</v-tooltip
                >
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="goTo('wiki/backgrounds')">
                <v-icon>mdi-map-marker-radius </v-icon>
                <v-tooltip activator="parent" location="right"
                  >Backgrounds</v-tooltip
                >
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="goTo('wiki/feats')">
                <v-icon>mdi-star-circle-outline</v-icon>
                <v-tooltip activator="parent" location="right">Feats</v-tooltip>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="goTo('wiki/items')">
                <v-icon>mdi-bag-personal</v-icon>
                <v-tooltip activator="parent" location="right">Items</v-tooltip>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn size="x-large" @click="goTo('')">
          <v-icon>mdi-home</v-icon>
          <v-tooltip activator="parent" location="bottom">Home</v-tooltip>
        </v-btn>
        <v-app-bar-title class="xs">
          {{ navTitle.replace("_", " ") }}
        </v-app-bar-title>
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
        return lastPart
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }
    },
  },
  data() {
    return {};
  },

  methods: {
    goTo(page) {
      router.push("/" + page);
    },
  },
};
</script>

<style></style>
