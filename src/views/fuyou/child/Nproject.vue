<template>
  <showing>
    <tabb />
    <make />
  </showing>
</template>

<script>
import Showing from "@/components/Showing.vue";
import Tabb from "@/components/Tabb.vue";
import Make from "./Make.vue";

export default {
  components: { Tabb, Make, Showing },
  name: "Nproject",
};
</script>

<style scoped>
</style>