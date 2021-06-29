<template>
  <showing>
    <tabb />
    <active-record />
    <tabulation />
    <paging />
  </showing>
</template>
<script>
import Showing from "@/components/Showing.vue";
import Tabb from "@/components/Tabb.vue";
import ActiveRecord from "./childrecord/ActiveRecord.vue";
import Tabulation from "../child/Tabulation.vue";
import Paging from "../../../components/Paging.vue";

export default {
  components: { Showing, Tabb, ActiveRecord, Tabulation, Paging },
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