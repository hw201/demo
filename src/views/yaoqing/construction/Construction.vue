<template>
  <show-position>
    <tabb />
    <cut />
  </show-position>
</template>

<script>
import ShowPosition from "../../../components/ShowPosition.vue";
import Tabb from "../../../components/Tabb.vue";
import Cut from "./childcut/Cut.vue";
export default {
  components: { ShowPosition, Tabb, Cut },
};
</script>

<style>
</style>