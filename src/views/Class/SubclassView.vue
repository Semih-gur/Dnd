<template>
  <div class="center mt-16">
    <v-card v-for="subClass in subClass.sub" :key="subClass.lvl" class="">
      <v-card-title>{{ subClass.lvl }}</v-card-title>
      <v-card-text>
        <h3>{{ subClass.title }}</h3>
        <span style="white-space: pre-wrap" v-html="subClass.desc"></span>
        <div v-if="subClass.spell != null">
          <br />
          <v-table
            class="mb-10"
            v-for="items in subClass.spell"
            :key="items.level"
          >
            <thead>
              <th v-for="item in items" :key="item.level">
                {{ item.element }}
              </th>
              <tr>
                <th class="text-center">Level</th>
                <th class="text-center">Prepared Spells</th>
              </tr>
            </thead>
            <tbody>
              <p></p>
              <tr v-for="item in items" :key="item.level">
                <td class="tableRow">{{ item.level }}</td>
                <td class="tableRow">{{ item.spells }}</td>
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

.tableRow {
  width: 50%;
  text-align: center;
}
</style>
