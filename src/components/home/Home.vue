<template>
  <div id="app">
    <carte-menu />
    <!-- <keep-alive>
      <router-view />
    </keep-alive> -->
    <router-view />
  </div>
</template>

<script>
import CarteMenu from "@/components/CarteMenu.vue";
export default {
  name: "App",
  components: {
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
