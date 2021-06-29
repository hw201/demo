<template>
  <div class="atable">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="num" label="序号" width="90">
      </el-table-column>

      <el-table-column prop="wechatMpId" label="公众号" width="120">
      </el-table-column>

      <el-table-column prop="activityTitle" label="活动标题" width="110">
      </el-table-column>

      <el-table-column prop="awardType" label="礼品类型" width="100">
      </el-table-column>

      <el-table-column prop="awardName" label="礼品名称" width="100">
      </el-table-column>

      <el-table-column prop="mainProduct" label="是否主推" width="100">
      </el-table-column>

      <el-table-column prop="zip" label="申领总数量" width="120">
      </el-table-column>

      <el-table-column prop="zip" label="已申领数量" width="120">
      </el-table-column>

      <el-table-column prop="costPoint" label="所需积分" width="100">
      </el-table-column>

      <el-table-column prop="costMoney" label="所需金额" width="100">
      </el-table-column>

      <el-table-column prop="levels" label="等级限制" width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

  <script>
export default {
  name: "Tabulation",

  data() {
    return {
      tableData: [
        {
          num: 1,
          // name:"丸美MARUBI"
          wechatMpId: "",
          // province: "老带新",活动标题
          activityTitle: "",
          // city: "VIP会员",
          awardType: "",
          // address: "邀请有礼 1518 弄",
          awardName: "",
          // zip: 200333,
          mainProduct: false,
          costPoint: "",
          costMoney: "",
          levels: "",
          zip: "",
        },
      ],
    };
  },
  methods: {
    btn() {
      this.$router.push("/childprofile");
    },
    handleClick(row) {
      this.$router.push("/detail");
    },
  },
};
</script>

<style scoped>
.atable {
  text-align: center;
  position: relative;
  top: 370px;
  margin: 30px 20px;
}
/deep/.el-table__header {
  width: 100%;
}
/deep/.el-table__body {
  width: 100%;
}
</style>

