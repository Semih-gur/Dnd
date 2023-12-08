<template>
  <div class="center mt-16">
    <v-row justify="center" row-height="5">
      <v-col v-for="cspell in classes" :key="cspell.id" lg="3" md="4">
        <v-card
          @click="goTo(cspell.label)"
          height="300"
          width="300"
          class="text-center"
        >
          <v-card-title> {{ cspell.label }}</v-card-title>
          <v-img src="../../assets/image.png"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    goTo(label) {
      router.push("/wiki/spells/" + label.replace(" ", "_").toLowerCase());
    },
  },

  data: () => ({
    classes: [
      {
        id: 1,
        label: "Bard",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
      },
      {
        id: 2,
        label: "Cleric",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
      },
      {
        id: 3,
        label: "Druid",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
      },
      {
        id: 5,
        label: "Monk",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
      },
      {
        id: 6,
        label: "Paladin",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
      },
      {
        id: 7,
        label: "Ranger",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
      },

      {
        id: 9,
        label: "Sorcerer",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
      },
      {
        id: 10,
        label: "Warlock",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
      },
      {
        id: 11,
        label: "Wizard",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
      },
    ],
  }),
};
</script>

<style></style>
