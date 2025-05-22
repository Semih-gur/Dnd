<template>
  <div class="center mt-15">
    <v-card>
      <v-tabs v-model="tab">
        <v-tab value="one">Origin Feats</v-tab>
        <v-tab value="two">General Feats</v-tab>
        <v-tab value="three">Fighting Style Feats</v-tab>
        <v-tab value="four">Epic Boon Feats</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <v-table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row" v-for="o in origin" :key="o.name">
                  <td @click="goTo(o.name)">{{ capitalize(o.name) }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>

          <v-window-item value="two">
            <v-table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row" v-for="g in general" :key="g.name">
                  <td @click="goTo(g.name)">{{ capitalize(g.name) }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>

          <v-window-item value="three">
            <v-table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row" v-for="f in fightStyle" :key="f.name">
                  <td @click="goTo(f.name)">{{ capitalize(f.name) }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>
          <v-window-item value="four">
            <v-table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row" v-for="e in epic" :key="e.name">
                  <td @click="goTo(e.name)">{{ capitalize(e.name) }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import router from "@/router";
import feats from "@/views/feats.json";
export default {
  computed: {
    origin: function () {
      for (let i = 0; i < this.feats.length; i++) {
        if (this.feats[i].typ == "origin") {
          return this.feats[i].feats;
        }
      }
      return "nothing";
    },

    general: function () {
      for (let i = 0; i < this.feats.length; i++) {
        if (this.feats[i].typ == "general") {
          return this.feats[i].feats;
        }
      }
      return "nothing";
    },
    fightStyle: function () {
      for (let i = 0; i < this.feats.length; i++) {
        if (this.feats[i].typ == "fightStyle") {
          return this.feats[i].feats;
        }
      }
      return "nothing";
    },
    epic: function () {
      for (let i = 0; i < this.feats.length; i++) {
        if (this.feats[i].typ == "epic") {
          return this.feats[i].feats;
        }
      }
      return "nothing";
    },
  },

  methods: {
    capitalize(str) {
      if (!str) return "";
      return str
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },

    goTo(label) {
      router.push("/wiki/feats/" + label.replace(" ", "_").toLowerCase());
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),
      feats,
      tab: null,
    };
  },
};
</script>

<style scoped>
.center {
  width: 50%;
}

.row {
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}
.row:hover {
  background-color: #424242;
}
</style>
