<template>
  <div>
    <carte-menu />
    <showing>
      <tabb />
      <active-record />
    </showing>
  </div>
</template>
<script>
import Showing from "@/components/Showing.vue";
import Tabb from "@/components/Tabb.vue";
import ActiveRecord from "./childrecord/ActiveRecord.vue";
import Tabulation from "../child/Tabulation.vue";
import Paging from "../../../components/Paging.vue";
import CarteMenu from "../../../components/CarteMenu.vue";

export default {
  components: { Showing, Tabb, ActiveRecord, Tabulation, Paging, CarteMenu },
  name: "Record",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
};
</script>
<style scoped>
</style>