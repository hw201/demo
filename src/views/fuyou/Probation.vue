<template>
  <showing>
    <tabb />

    <homepage />
    <!-- <tabulation /> -->
    <!-- <paging /> -->
  </showing>
</template>

<script>
import Showing from "@/components/Showing.vue";
import Tabb from "../../components/Tabb.vue";
import Tabulation from "./child/Tabulation.vue";
// import Paging from "@/components/Paging.vue";

import Homepage from "./child/Homepage.vue";
import Make from "./child/Make.vue";
import Paging from "../../components/Paging.vue";
export default {
  components: { Tabb, Homepage, Tabulation, Make, Showing, Paging },
  name: "Probation",
};
</script>

<style scoped>
</style>