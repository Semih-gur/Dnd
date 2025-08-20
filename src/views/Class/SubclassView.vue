<template>
  <div class="center mt-16">
    <v-card v-for="sub in subClass.sub" :key="sub.lvl" class="">
      <v-card-title>{{ sub.lvl }}</v-card-title>
      <v-card-text>
        <h3>{{ sub.title }}</h3>
        <span style="white-space: pre-wrap" v-html="sub.desc"></span>
        <div v-if="sub.spell != null">
          <br />
          <v-table>
            <thead>
              <th></th>
              <tr>
                <th class="text-center">Level</th>
                <th class="text-center">Prepared Spells</th>
              </tr>
            </thead>
            <tbody>
              <p></p>
              <tr v-for="item in sub.spell" :key="item.level">
                <td class="text-center">{{ item.level }}</td>
                <td class="text-center">{{ item.spells }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
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
