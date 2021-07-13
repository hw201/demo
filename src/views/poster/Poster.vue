<template>
  <div>
    <carte-menu />
    <showing>
      <tabb />
      <Postermanage />
    </showing>
  </div>
</template>

<script>
import Showing from "@/components/Showing.vue";
import Tabb from "@/components/Tabb.vue";

import Postermanage from "./posterchild/Postermanage.vue";
import CarteMenu from "../../components/CarteMenu.vue";

export default {
  components: { Tabb, Showing, Postermanage, CarteMenu },
  name: "Poster",
};
</script>

<style scoped>
</style>