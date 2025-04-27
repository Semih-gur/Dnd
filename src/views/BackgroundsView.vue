<template>
  <div class="center mt-15">
    <v-card>
      <v-card-text>
        <v-table>
          <tbody>
            <tr v-for="bg in backgrounds" :key="bg.name">
              <td>
                <p @click="goTo(bg.name)">{{ capitalize(bg.name) }}</p>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import router from "@/router";
import backgrounds from "@/views/backgrounds.json";
export default {
  methods: {
    capitalize(str) {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    goTo(label) {
      router.push("/wiki/backgrounds/" + label.replace(" ", "_").toLowerCase());
    },
  },

  data() {
    return {
      url: this.$route.href.split("/").pop(),
      backgrounds,
    };
  },
};
</script>
