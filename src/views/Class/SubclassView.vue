<template>
  <div>{{ sub }}</div>
</template>

<script>
export default {
  data() {
    return {
      sub: this.$route.href.split("/").pop(),
      barbarian: [
        {
          level: "Leve",
        },
      ],
    };
  },
};
</script>
