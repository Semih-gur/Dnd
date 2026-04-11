<template>
  <div class="center mt-15">
    <v-card>
      <v-tabs v-model="tab">
        <v-tab
          v-for="category in weapons"
          :key="category.type"
          :value="category.type"
        >
          {{ formatName(category.type) }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item
            v-for="category in weapons"
            :key="category.type"
            :value="category.type"
          >
            <v-table>
              <thead>
                <tr>
                  <th class="text-center">Name</th>
                  <th class="text-center">Armor Class</th>
                  <th class="text-center">Strength Requirement</th>
                  <th class="text-center">Stealth</th>
                  <th class="text-center">Weight</th>
                  <th class="text-center">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="weapon in category.items" :key="weapon.name">
                  <td>{{ weapon.name }}</td>
                  <td class="text-center">{{ weapon.ac }}</td>
                  <td class="text-center">{{ weapon.strength }}</td>
                  <td class="text-center">{{ weapon.stealth }}</td>
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
import weapons from "./armors.json";

export default {
  data() {
    return {
      tab: weapons[0].type,
      weapons,
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
