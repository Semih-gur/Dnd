<template>
  <div class="center mt-16">
    <v-card v-if="background">
      <v-card-title>{{ capitalize(background.name) }}</v-card-title>
      <v-card-text> {{ background.flavor }} </v-card-text>

      <v-card-text>
        <b>Ability Scores: </b>{{ background.abilityScore }} <br /><br />
        <b>Feat: </b>{{ background.feat }} <br /><br />
        <b>Skill Proficiencies: </b>{{ background.skill }} <br /><br />
        <b>Tool Proficiency: </b>{{ background.tool }} <br /><br />
        <b>Equipment: </b>{{ background.equipment }}
      </v-card-text>
    </v-card>
    <v-card v-else>
      <v-card-title>Background not found</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    capitalize(str) {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },

  data() {
    const backgrounds = this.$route.path.startsWith("/dnd/5e/")
      ? require("@/views/dnd5e/backgrounds.json")
      : require("@/views/backgrounds.json");
    return {
      url: this.$route.href.split("/").pop(),
      backgrounds,
    };
  },
  computed: {
    background() {
      return this.backgrounds.find((bg) => bg.name === this.url) || null;
    },
  },
};
</script>

<style scoped>
.center {
  width: 50%;
}
</style>
