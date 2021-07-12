<template>
  <div id="app">
    <register />

    <!-- <router-view /> -->
  </div>
</template>

<script>
// import Probation from "./views/fuyou/Probation.vue";
// import CarteMenu from "./components/CarteMenu.vue";
import Register from "./views/Register.vue";
export default {
  name: "App",
  components: {
    // Probation,
    // CarteMenu,
    Register,
  },
};
</script>

<style scoped>
/* #app {
  margin: 0;
  padding: 0;
  height: 100vh;
  margin: 0 auto;
} */
</style>
