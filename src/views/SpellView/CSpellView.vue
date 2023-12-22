<template>
  <div class="center mt-15">
    <v-card>
      <v-tabs v-model="tab">
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
                  <td>
                    {{ spell.name }}
                    <v-tooltip activator="parent" width="80%" location="end">
                      Pariatur velit ad amet Lorem ullamco non ex qui. Ex
                      commodo proident do eu consequat commodo amet magna nisi
                      labore deserunt dolore elit. Laborum magna do tempor
                      mollit. Ea quis aliqua culpa nisi quis commodo fugiat
                      ipsum magna tempor Lorem deserunt consectetur.
                    </v-tooltip>
                  </td>
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
import router from "@/router";

export default {
  methods: {
    class() {
      router.push("/");
    },
  },

  data: () => ({
    tab: null,

    cSpells: [
      {
        name: "Fireball",
        school: "Evocation",
        castTime: "Action",
        range: "120ft / 20ft radius",
        duration: "-",
        components: "V,S,M",
      },
      {
        name: "Bone Chill",
        school: "Necromancy",
        castTime: "Action",
        range: "Touch",
        duration: "-",
        components: "V,S",
      },
      {
        name: "Healing Word",
        school: "Evocation",
        castTime: "Bonus Action",
        range: "30ft",
        duration: "-",
        components: "V,S,M",
      },
    ],
  }),
};
</script>
