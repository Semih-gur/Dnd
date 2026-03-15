<template>
  <div class="center mt-15">
    <v-row justify="center" row-height="5">
      <v-col
        class="ml-15"
        v-for="(species, index) in species"
        :key="species.id"
        xl="2"
        lg="3"
        md="4"
      >
        <v-card
          @click="goTo(species.label)"
          height="300"
          width="300"
          class="text-center"
        >
          <v-card-title
            @mouseover="mouseOver(index)"
            @mouseout="mouseOver(index)"
          >
            {{ species.label }}</v-card-title
          >
          <v-img
            @mouseover="mouseOver(index)"
            @mouseout="mouseOver(index)"
            src="../assets/image.png"
          ></v-img>
          <v-expand-transition>
            <v-card class="v-card--reveal" v-if="species.active">
              <v-card-text>{{ species.desc }}</v-card-text>
              <v-card-text>{{ species.bonus }}</v-card-text>
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
    mouseOver(index) {
      this.species[index].active = !this.species[index].active;
    },

    goTo(label) {
      router.push("/wiki/species/" + label.replace(" ", "_").toLowerCase());
    },
  },

  data: () => ({
    reveal: false,
    species: [
      {
        id: 0,
        label: "Aasimar",
        desc: "Blessed with a celestial heritage, Aasimar radiate inner light and wield divine power to heal allies and smite enemies with radiant energy.",
        bonus: "Healing Hands",
      },
      {
        id: 1,
        label: "Dragonborn",
        desc: "Born of draconic lineage, Dragonborn command elemental breath weapons and draconic wings, embodying the might of ancient dragons.",
        bonus: "Breath Weapon",
      },
      {
        id: 2,
        label: "Dwarf",
        desc: "Hardy and resilient folk forged by centuries in mountain halls, Dwarves resist poison and channel tremorsense through the stone beneath their feet.",
        bonus: "Stonecunning",
      },
      {
        id: 3,
        label: "Elf",
        desc: "Graceful and long-lived, Elves enter a meditative trance instead of sleeping and inherit unique magical gifts from their chosen lineage.",
        bonus: "Fey Ancestry",
      },
      {
        id: 4,
        label: "Gnome",
        desc: "Curious and inventive, Gnomes have an innate cleverness that grants them advantage on all Intelligence, Wisdom, and Charisma saving throws.",
        bonus: "Gnomish Cunning",
      },
      {
        id: 5,
        label: "Goliath",
        desc: "Descendants of giants, Goliaths stand above other races in size and strength, able to grow Large and draw power from their giant ancestry.",
        bonus: "Giant Ancestry",
      },
      {
        id: 6,
        label: "Halfling",
        desc: "Lucky and nimble, Halflings never suffer critical failures — when they roll a 1 on any d20 Test they can reroll and must use the new roll.",
        bonus: "Luck",
      },
      {
        id: 7,
        label: "Human",
        desc: "The most adaptable of all races, Humans gain an extra Origin feat at character creation, an extra skill proficiency, and Heroic Inspiration every Long Rest.",
        bonus: "Versatile",
      },
      {
        id: 8,
        label: "Orc",
        desc: "Powerful and fierce, Orcs can Dash as a Bonus Action to gain Temporary Hit Points, and once per Long Rest refuse to fall below 1 Hit Point.",
        bonus: "Relentless Endurance",
      },
      {
        id: 9,
        label: "Tiefling",
        desc: "Touched by infernal bloodlines, Tieflings choose a fiendish legacy that grants unique spells and resistance to Fire damage.",
        bonus: "Fiendish Legacy",
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
