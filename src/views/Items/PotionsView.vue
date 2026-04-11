<template>
  <div class="center mt-15">
    <v-card>
      <v-tabs v-model="tab">
        <v-tab
          v-for="category in potions"
          :key="category.type"
          :value="category.type"
        >
          {{ formatName(category.type) }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item
            v-for="category in potions"
            :key="category.type"
            :value="category.type"
          >
            <v-table>
              <thead>
                <tr>
                  <th class="text-center">Name</th>
                  <th class="text-center">Rarity</th>
                  <th class="text-center">Effect</th>
                  <th class="text-center">Weight</th>
                  <th class="text-center">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="weapon in category.items" :key="weapon.name">
                  <td>{{ weapon.name }}</td>
                  <td class="text-center">{{ weapon.rarity }}</td>
                  <td class="text-center">{{ weapon.effect }}</td>
                  <td class="text-center">{{ weapon.weight }}</td>
                  <td class="text-center">{{ weapon.cost }}</td>
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
import potions from "./potions.json";

export default {
  data() {
    return {
      tab: potions[0].type,
      potions,
    };
  },

  methods: {
    formatName(type) {
      return type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    },
  },
};
</script>

<style scoped>
.center {
  width: 80%;
  margin: 0 auto;
}
</style>
