<template>
  <div class="tabb">
    <div class="tabtop"><span>首页×</span><span>营销中心×</span></div>
    <div class="tabtop">
      <span>营销中心</span><span>{{ msg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabb",
  data() {
    return {
      msg: "付邮试用",
      tab0: true,
      tab1: true,
      tab2: true,
    };
  },
  methods: {
    handleTabRemove(name) {
      this["tab" + name] = false;
    },
  },
};
</script>

<style scoped>
.tabb {
  width: 1485px;
  height: 75px;
  background-color: rgb(245, 247, 250);
}

.tabtop {
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  padding: 8px 5px;
}
span {
  font-size: 12px;
  margin: 20px 10px;
}
</style>


