<template>
  <div id="app">
    <carte-menu />

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Probation from "./views/fuyou/Probation.vue";
import CarteMenu from "./components/CarteMenu.vue";
export default {
  name: "App",
  components: {
    Probation,
    CarteMenu,
  },
};
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  margin: 0 auto;
}
</style>
