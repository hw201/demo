<template>
  <showing>
    <tabb />
    <Postermanage />
  </showing>
</template>

<script>
import Showing from "@/components/Showing.vue";
import Tabb from "@/components/Tabb.vue";

import Postermanage from "./posterchild/Postermanage.vue";

export default {
  components: { Tabb, Showing, Postermanage },
  name: "Poster",
};
</script>

<style scoped>
</style>