<template>
  <div>
    <carte-menu />
    <showing>
      <tabb />
      <make />
    </showing>
  </div>
</template>

<script>
import Showing from "@/components/Showing.vue";
import Tabb from "@/components/Tabb.vue";
import Make from "./Make.vue";
import CarteMenu from "../../../components/CarteMenu.vue";

export default {
  components: { Tabb, Make, Showing, CarteMenu },
  name: "Nproject",
};
</script>

<style scoped>
</style>