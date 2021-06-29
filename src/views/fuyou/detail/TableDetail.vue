<template>
  <show-position>
    <div>{{ msg }}</div>
  </show-position>
</template>

<script>
import ShowPosition from "../../../components/ShowPosition.vue";
export default {
  components: { ShowPosition },

  data() {
    return {
      msg: "jjj",
    };
  },
};
</script>

<style>
</style>