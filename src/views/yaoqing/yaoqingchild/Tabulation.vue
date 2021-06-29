<template>
  <div class="atable">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="序号" width="100">
      </el-table-column>

      <el-table-column prop="name" label="公众号" width="120">
      </el-table-column>

      <el-table-column prop="province" label="活动名称" width="80">
      </el-table-column>

      <el-table-column prop="city" label="等级限制" width="80">
      </el-table-column>

      <el-table-column prop="address" label="活动标签" width="220">
      </el-table-column>

      <el-table-column prop="zip" label="活动时间" width="120">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small" @click="btn">编辑</el-button>
        </template>
      </el-table-column>

      <el-table-column prop="zip" label="活动状态" width="80">
      </el-table-column>

      <el-table-column prop="zip" label="创建人" width="80"> </el-table-column>

      <el-table-column prop="zip" label="创建时间" width="100">
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
          date: "1",
          name: "丸美MARUBI",
          province: "老带新",
          city: "VIP会员",
          address: "邀请有礼 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
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
  position: relative;
  top: 220px;
  margin: -5px 20px;
}

/* /deep/ .el-table__header-wrapper {
  height: 30px;
}

/deep/ .el-table__row {
  height: 30px;
} */
</style>