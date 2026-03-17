<template>
  <div class="center mt-15">
    <v-card>
      <v-tabs v-model="tab">
        <v-tab v-for="level in spellLevels" :key="level" :value="level">
          {{ level === "0" ? "Cantrips" : `Level ${level}` }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item
            v-for="level in spellLevels"
            :key="level"
            :value="level"
          >
            <v-table>
              <thead>
                <tr>
                  <th class="text-center">Name</th>
                  <th class="text-center">School</th>
                  <th class="text-center">Cast Time</th>
                  <th class="text-center">Range</th>
                  <th class="text-center">Duration</th>
                  <th class="text-center">Components</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="spell in getSpellsForLevel(level)" :key="spell.name">
                  <td>
                    {{ formatName(spell.name) }}
                    <v-tooltip activator="parent" width="80%" location="end">
                      <div>
                        <strong>{{ formatName(spell.name) }}</strong>
                      </div>
                      <div class="mt-1">{{ spell.effect }}</div>
                      <div v-if="spell.upgrade" class="mt-2 font-italic">
                        <strong>Higher Levels:</strong> {{ spell.upgrade }}
                      </div>
                    </v-tooltip>
                  </td>
                  <td class="text-center">{{ spell.school }}</td>
                  <td class="text-center">{{ spell.casting_time }}</td>
                  <td class="text-center">{{ spell.range }}</td>
                  <td class="text-center">{{ spell.duration }}</td>
                  <td class="text-center">{{ spell.components }}</td>
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
import allSpells from "@/views/SpellView/allSpells.json";

export default {
  data() {
    return {
      tab: "0",
      allSpells,
    };
  },

  computed: {
    className() {
      const raw = this.$route.params.className || "";
      return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
    },
    spellLevels() {
      return this.allSpells
        .filter((levelEntry) =>
          levelEntry.spells.some((spell) =>
            spell.class.includes(this.className),
          ),
        )
        .map((levelEntry) => levelEntry.level);
    },
  },

  methods: {
    getSpellsForLevel(level) {
      const levelEntry = this.allSpells.find((e) => e.level === level);
      if (!levelEntry) return [];
      return levelEntry.spells.filter((spell) =>
        spell.class.includes(this.className),
      );
    },

    formatName(name) {
      return name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
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
