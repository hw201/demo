<template>
  <div class="tabb">
    <div class="tabtop"><span>首页×</span><span>营销中心×</span></div>
    <div class="tabtop">
      <span>营销中心</span><span>{{ msg }}</span>
      <a class="out" @click="logout"
        ><i class="el-icon-switch-button">退出</i></a
      >
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
    logout() {
      this.$confirm("确认退出？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "已退出",
          });
          this.$router.push({ path: "/views" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
          });
        });
    },
  },
};
</script>

<style scoped>
.out {
  position: relative;
  right: -1250px;
  font-size: 18px;
  color: black;
}
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


