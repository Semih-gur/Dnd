<template>
  <div class="center mt-16">
    <v-card v-for="race in compRace.race" :key="race.lvl" class="">
      <v-card-title>{{ race.lvl }}</v-card-title>
      <v-card-text>
        <span style="white-space: pre-wrap" v-html="race.aScore"></span>
        <span style="white-space: pre-wrap" v-html="race.age"></span>
        <span style="white-space: pre-wrap" v-html="race.alignment"></span>
        <span style="white-space: pre-wrap" v-html="race.size"></span>
        <span style="white-space: pre-wrap" v-html="race.aScore"></span>
        <span
          v-for="abilities in race.feats"
          :key="abilities"
          style="white-space: pre-wrap"
          v-html="abilities.name"
        ></span>

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
                "<b>Ability Score Increase: </b> Your Strength score increases by 2, and your Charisma score increases by 1. \n\n",
              age: "<b>Age: </b> Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.\n\n",
              alignment:
                "<b>Alignment: </b>Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once.\n\n",
              size: "<b>Size: </b>Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.\n\n",
              speed: "<b>Speed: </b>Your base walking speed is 30 feet.\n\n",
              feats: [{ name: "aa\n\n" }, { name: "bb\n\n" }],
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
