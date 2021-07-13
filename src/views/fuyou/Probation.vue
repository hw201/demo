<template>
  <div>
    <carte-menu />
    <showing>
      <tabb />
      <homepage />
    </showing>
  </div>
</template>

<script>
import Showing from "@/components/Showing.vue";
import Tabb from "../../components/Tabb.vue";

import Homepage from "./child/Homepage.vue";
import CarteMenu from "../../components/CarteMenu.vue";

export default {
  components: { Tabb, Homepage, Showing, CarteMenu },
  name: "Probation",
};
</script>

<style scoped>
</style>