<template>
  <div class="center mt-16">
    <v-card v-if="feat">
      <v-card-text v-if="feat.preq != null"
        ><strong><i>Prerequisite: </i></strong>{{ feat.preq }}</v-card-text
      >
      <v-card-text v-for="a in feat.abilites" :key="a.name"
        ><strong>{{ a.aName }}</strong> {{ a.aDesc }}</v-card-text
      >
    </v-card>
    <v-card v-else>
      <v-card-title>Feat not found</v-card-title>
    </v-card>
  </div>
</template>

<script>
import featlist from "@/views/feats.json";

export default {
  methods: {
    capitalize(str) {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),
      featlist: featlist,
    };
  },
  computed: {
    feat: function () {
      for (let i = 0; i < this.featlist.length; i++) {
        for (let j = 0; j < this.featlist[i].feats.length; j++) {
          if (this.featlist[i].feats[j].name === this.url) {
            return this.featlist[i].feats[j];
          }
        }
      }
      return "nothing";
    },
  },
};
</script>

<style scoped>
.center {
  width: 50%;
}
</style>
