<template>
  <div class="center mt-16">
    <v-row justify="center" row-height="5">
      <v-col
        class="ml-15"
        v-for="cspell in classes"
        :key="cspell.id"
        cols="2"
        xl="2"
        lg="3"
        md="4"
      >
        <v-card
          @click="goTo(cspell.label)"
          height="300"
          width="300"
          class="text-center"
        >
          <v-card-title> {{ cspell.label }}</v-card-title>
          <v-img :src="cspell.art" alt="Class Art"></v-img>
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
        art: require("@/assets/classes/bard.png"),
      },
      {
        id: 2,
        label: "Cleric",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
        art: require("@/assets/classes/cleric.png"),
      },
      {
        id: 3,
        label: "Druid",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
        art: require("@/assets/classes/druid.png"),
      },
      {
        id: 5,
        label: "Monk",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
        art: require("@/assets/classes/monk.png"),
      },
      {
        id: 6,
        label: "Paladin",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
        art: require("@/assets/classes/paladin.png"),
      },
      {
        id: 7,
        label: "Ranger",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
        art: require("@/assets/classes/ranger.png"),
      },

      {
        id: 9,
        label: "Sorcerer",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
        art: require("@/assets/classes/sorcerer.png"),
      },
      {
        id: 10,
        label: "Warlock",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
        art: require("@/assets/classes/warlock.png"),
      },
      {
        id: 11,
        label: "Wizard",
        desc: "Cupidatat proident ut Lorem mollit incididunt consectetur cupidatat",
        bonus: "+2 Str",
        art: require("@/assets/classes/wizard.png"),
      },
    ],
  }),
};
</script>

<style></style>
