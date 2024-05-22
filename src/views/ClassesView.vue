<template>
  <div class="center mt-16">
    <v-row justify="center" row-height="5">
      <v-col
        v-for="(cclass, index) in classes"
        :key="cclass.id"
        class="ml-15"
        xl="2"
        lg="3"
        md="4"
      >
        <v-card
          @click="goTo(cclass.label)"
          height="300"
          width="300"
          class="text-center"
        >
          <v-card-title
            @mouseover="mouseOver(index)"
            @mouseout="mouseOver(index)"
          >
            {{ cclass.label }}</v-card-title
          >
          <v-img
            @mouseover="mouseOver(index)"
            @mouseout="mouseOver(index)"
            :src="cclass.art"
            alt="Class Art"
          ></v-img>
          <v-expand-transition>
            <v-card class="v-card--reveal" v-if="cclass.active">
              <v-card-text>{{ cclass.desc }}</v-card-text>
              <v-card-text>{{ cclass.pref }}</v-card-text>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    getImg() {},

    mouseOver(index) {
      this.classes[index].active = !this.classes[index].active;
    },

    goTo(label) {
      router.push("/wiki/classes/" + label.replace(" ", "_").toLowerCase());
    },
  },

  data: () => ({
    imgURL: "../assets/classes/barbarian.png",
    reveal: false,
    classes: [
      {
        id: 0,
        label: "Barbarian",
        desc: "A fierce warrior of primitive background who can enter a battle rage",
        pref: "Strenght / Constitution",
        art: require("../assets/classes/barbarian.png"),
      },
      {
        id: 1,
        label: "Bard",
        desc: "An inspiring magician whose power echoes the music of creation",
        pref: "Charisma",
        art: require("../assets/classes/bard.png"),
      },
      {
        id: 2,
        label: "Cleric",
        desc: "A priestly champion who wields divine magic in service of a higher power",
        pref: "Wisdom",
        art: require("../assets/classes/cleric.png"),
      },
      {
        id: 3,
        label: "Druid",
        desc: "A mage wielding the powers of nature— moonlight and plant growth, fire and lightning—and adopting animal forms",
        pref: "Wisdom",
        art: require("../assets/classes/druid.png"),
      },
      {
        id: 4,
        label: "Fighter",
        desc: "A master of martial combat, skilled with a variety of weapons and armor",
        pref: "Strength / Dexterity",
        art: require("../assets/classes/fighter.png"),
      },
      {
        id: 5,
        label: "Monk",
        desc: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
        pref: "Wisdom / Dexterity",
        art: require("../assets/classes/monk.png"),
      },
      {
        id: 6,
        label: "Paladin",
        desc: "A holy warrior bound to a sacred oath, harnessing power of divine",
        pref: "Strength / Charisma",
        art: require("../assets/classes/paladin.png"),
      },
      {
        id: 7,
        label: "Ranger",
        desc: "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
        pref: "Dexterity",
        art: require("../assets/classes/ranger.png"),
      },
      {
        id: 8,
        label: "Rogue",
        desc: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
        pref: "Dexterity",
        art: require("../assets/classes/rogue.png"),
      },
      {
        id: 9,
        label: "Sorcerer",
        desc: "A spell-caster who draws on inherent magic from a gift or bloodline",
        pref: "Charisma",
        art: require("../assets/classes/sorcerer.png"),
      },

      {
        id: 10,
        label: "Warlock",
        desc: "A wielder of magic that is derived from a bargain with an extra-planar entity",
        pref: "Charisma",
        art: require("../assets/classes/warlock.png"),
      },
      {
        id: 11,
        label: "Wizard",
        desc: "A scholarly magic-user capable of manipulating the structures of reality",
        pref: "Intelligence",
        art: require("../assets/classes/wizard.png"),
      },
    ],
  }),
};
</script>

<style>
.v-card--reveal {
  pointer-events: none;
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  height: 50%;
}
</style>
