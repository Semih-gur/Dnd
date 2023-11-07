<template>
  <div class="center mt-15">
    <v-card>
      <v-card-text v-for="sub in subClass.sub" :key="sub.lvl">
        {{ sub.lvl }}</v-card-text
      >
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    subClass: function () {
      for (let index = 0; index < this.class.length; index++) {
        if (this.class[index].name == this.url) {
          return this.class[index];
        }
      }
      return "nothing";
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),

      class: [
        {
          name: "ancestral_guardian",
          sub: [
            { lvl: "1", desc: "ag" },
            { lvl: "2", desc: "ag" },
          ],
        },
        {
          name: "battlerager",
          sub: [
            { lvl: "1", desc: "br" },
            { lvl: "2", desc: "br" },
          ],
        },
      ],
    };
  },
};
</script>
