<template>
  <div class="center mt-15">
    <v-card>
      <v-card-text> </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      url: this.$route.href.split("/").pop(),

      ancestral_guardian: [{ lvl: "ag" }],
      battlerager: [{ lvl: "battle" }],
    };
  },
};
</script>
