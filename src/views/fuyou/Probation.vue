<template>
  <showing>
    <tabb />
    <homepage />
  </showing>
</template>

<script>
import Showing from "@/components/Showing.vue";
import Tabb from "../../components/Tabb.vue";

import Homepage from "./child/Homepage.vue";

export default {
  components: { Tabb, Homepage, Showing },
  name: "Probation",
};
</script>

<style scoped>
</style>