<template>
  <v-app class="d-flex align-items-center">
    <v-app-bar  scroll-behavior="collapse" scroll-threshold="50"  elevation="3"> 
      <v-app-bar-nav-icon icon="mdi-home"></v-app-bar-nav-icon>
      <v-app-bar-title>
        
      </v-app-bar-title>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
     
    };
  },
};
</script>

<style>

</style>
