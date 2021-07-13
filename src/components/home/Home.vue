<template>
  <div id="home">
    <carte-menu />
    <showing>
      <tabb />
      <homepage />
    </showing>
    <!-- <showing>
      <tabb />
      <homepage />
    </showing> -->
  </div>
</template>

<script>
import CarteMenu from "@/components/CarteMenu.vue";

import Showing from "../Showing.vue";
import Tabb from "../Tabb.vue";
import Homepage from "../../views/fuyou/child/Homepage.vue";
export default {
  name: "App",
  components: {
    CarteMenu,
    Showing,
    Tabb,
    Homepage,
  },
};
</script>

<style scoped>
#home {
  margin: 0;
  padding: 0;
  height: 100vh;
  margin: 0 auto;
}
</style>
