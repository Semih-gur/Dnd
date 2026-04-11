<template>
  <div class="center mt-15">
    <v-row justify="center" row-height="5">
      <v-col
        class="ml-15"
        v-for="items in items"
        :key="items.id"
        xl="2"
        lg="3"
        md="4"
      >
        <v-card
          @click="goTo(items.label)"
          height="300"
          width="300"
          class="text-center"
        >
          <v-card-title> {{ items.label }}</v-card-title>
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
      router.push("/wiki/items/" + label.replace(" ", "_").toLowerCase());
    },
  },

  data: () => ({
    reveal: false,
    items: [
      {
        id: 0,
        label: "Weapons",
      },
      {
        id: 1,
        label: "Armors",
      },
      {
        id: 2,
        label: "Potions",
      },
      {
        id: 3,
        label: "Magic Items",
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
