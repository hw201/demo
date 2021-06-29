<template>
  <show-position>
    <tabb />

    <homepage />
    <cheack-all />
    <paging />
  </show-position>
</template>

<script>
import Paging from "../../components/Paging.vue";
import ShowPosition from "../../components/ShowPosition.vue";
import Tabb from "../../components/Tabb.vue";
import Homepage from "../fuyou/child/Homepage.vue";

import CheackAll from "./meirichild/CheackAll.vue";
export default {
  name: "Task",
  components: {
    ShowPosition,
    Tabb,
    Paging,
    Homepage,
    CheackAll,
  },
  data() {
    return {};
  },
};
</script>