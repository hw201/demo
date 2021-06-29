<template>
  <show-position>
    <tabb />

    <inviting />
    <tabulation />
    <paging />
  </show-position>
</template>

<script>
import Paging from "../../components/Paging.vue";
import ShowPosition from "../../components/ShowPosition.vue";
import Tabb from "../../components/Tabb.vue";

import Tabulation from "./yaoqingchild/Tabulation.vue";
import Inviting from "./yaoqingchild/Inviting.vue";
export default {
  components: { ShowPosition, Tabb, Inviting, Paging, Tabulation },
};
</script>

<style>
</style>