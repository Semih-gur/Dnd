<template>
  <div class="center mt-16">
    <v-card v-for="sub in subClass.sub" :key="sub.lvl" class="">
      <v-card-title>{{ sub.lvl }}</v-card-title>
      <v-card-text>
        <h3>{{ sub.title }}</h3>
        <span style="white-space: pre-wrap" v-html="sub.desc"></span>
        <br />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import subClasses from "./subClasses.json";
export default {
  computed: {
    subClass: function () {
      for (let i = 0; i < this.class.length; i++) {
        if (this.class[i].name == this.url) {
          return this.class[i];
        }
      }
      return "nothing";
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),
      class: subClasses,
    };
  },
};
</script>

<style scoped>
.center {
  width: 50%;
}
</style>
