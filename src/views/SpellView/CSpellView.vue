<template>
  <div class="center mt-15">
    <v-card>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one">Item One</v-tab>
        <v-tab value="two">Item Two</v-tab>
        <v-tab value="three">Item Three</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <v-table>
              <thead>
                <tr>
                  <th class="text-center">Name</th>
                  <th class="text-center">School</th>
                  <th class="text-center">Cast time</th>
                  <th class="text-center">Range</th>
                  <th class="text-center">Duration</th>
                  <th class="text-center">Components</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="spell in cSpells" :key="spell.name">
                  <td>{{ spell.name }}</td>
                  <td class="text-center">{{ spell.school }}</td>
                  <td class="text-center">{{ spell.castTime }}</td>
                  <td class="text-center">{{ spell.range }}</td>
                  <td class="text-center">{{ spell.duration }}</td>
                  <td class="text-center">{{ spell.components }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>

          <v-window-item value="two"> Two </v-window-item>

          <v-window-item value="three"> Three </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    tab: null,

    cSpells: [
      {
        name: "aaa",
        school: "s1",
        castTime: "c1",
        range: "r1",
        duration: "d1",
        components: "V",
      },
    ],
  }),
};
</script>
