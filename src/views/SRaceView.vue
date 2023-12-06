<template>
  <div class="center mt-16">
    <v-card v-for="race in compRace.race" :key="race.lvl" class="">
      <v-card-title>{{ race.lvl }}</v-card-title>
      <v-card-text>
        <h3>{{ race.age }}</h3>
        <span style="white-space: pre-wrap" v-html="race.aScore"></span>
        <br />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    compRace: function () {
      for (let i = 0; i < this.races.length; i++) {
        if (this.races[i].name == this.url) {
          return this.races[i];
        }
      }
      return "nothing";
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),
      races: [
        {
          name: "dragonborn",
          race: [
            {
              aScore:
                "<b>Ability Score Increase:</b> Your Strength score increases by 2, and your Charisma score increases by 1.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.center {
  width: 50%;
}
</style>
