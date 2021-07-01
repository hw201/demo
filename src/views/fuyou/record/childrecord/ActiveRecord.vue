<template>
  <div class="caidan">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      style="margin: 10px 0px"
      ref="ruleForm"
    >
      <div class="tb">
        <div class="one">
          <el-form-item label="公众号" prop="wechatMpId">
            <el-select
              v-model="formInline.wechatMpId"
              placeholder="丸美"
              class="inputs"
            >
              <el-option label="丸美" value="1"></el-option>
              <el-option label="春纪" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="注册手机号" prop="phone">
            <el-input
              v-model="formInline.phone"
              placeholder="单行输入"
              class="inputs"
            ></el-input>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="活动名称" prop="designation">
            <el-input
              v-model="formInline.designation"
              placeholder="请输入"
              class="inputs"
            ></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="tb">
        <div class="one">
          <el-form-item label="申领次数" prop="medal">
            <el-input
              v-model="formInline.medal"
              placeholder="单行输入"
              class="inputs"
            ></el-input>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="订单状态" prop="indent">
            <el-select v-model="formInline.indent" class="inputs">
              <el-option label="已发货" value="1"></el-option>
              <el-option label="已完成" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="申请时间" prop="ApplicationDate">
            <el-input
              v-model="formInline.ApplicationDate"
              class="inputs"
            ></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="tb">
        <div class="one">
          <el-form-item label="审核状态" prop="audit">
            <el-select v-model="formInline.audit" class="inputs">
              <el-option label="通过" value="true"></el-option>
              <el-option label="未通过" value="false"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="allbtn">
        <el-form-item class="btn">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" class="chong" @click="resetForm"
            >重置</el-button
          >
        </el-form-item>
      </div>
    </el-form>

    <div class="xinjian">
      <el-row>
        <el-button type="primary" @click="modal1 = true"
          >导入发货运单号</el-button
        >
        <Modal
          v-model="modal1"
          title="导入订单号"
          @on-ok="ok"
          @on-cancel="cancel"
        >
          <div class="ips">
            <input type="text" placeholder="请输入" />
            <input type="file" id="files" />
          </div>
        </Modal>

        <el-button type="primary" class="out">导出</el-button>
        <el-button type="primary" @click="open">审核</el-button>

        <el-button type="primary" @click="modal2 = true" class="out"
          >发货</el-button
        >
        <Modal
          v-model="modal2"
          title="订单发货"
          @on-ok="ok"
          @on-cancel="cancel"
        >
          <div class="ips">
            <p>物流公司:<input type="text" placeholder="请输入" /></p>
            <p>物流单号:<input type="text" placeholder="请输入" /></p>
          </div>
        </Modal>
      </el-row>
    </div>
    <div class="atable">
      <table>
        <tr>
          <th>序号</th>
          <th>订单编号</th>
          <th>公众号</th>
          <th>活动名称</th>
          <th>会员昵称</th>
          <th>会员等级</th>
          <th>注册手机号</th>
          <th>礼品类型</th>
          <th>礼品名称</th>
          <th>礼品编码/券ID</th>
          <th>申领数量</th>
        </tr>
        <tr v-for="(item, index) of userDatas" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.serialNumber }}</td>
          <td>{{ item.wechatMpId }}</td>
          <td>{{ item.designation }}</td>
          <td>{{ item.nickname }}</td>
          <td>{{ item.member }}</td>
          <td>{{ item.phone }}</td>

          <td>{{ item.awardType }}</td>
          <td>{{ item.awardName }}</td>

          <td>{{ item.coding }}</td>
          <td>{{ item.medal }}</td>
        </tr>
      </table>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveRecord",

  components: {},
  data() {
    return {
      modal1: false,
      modal2: false,

      ruleForm: {
        //重置
        wechatMpId: "",
        phone: "",
        designation: "",
        medal: "",
        indent: "",
        ApplicationDate: "",
        audit: "",
      },

      formInline: {
        wechatMpId: "",
        phone: "",
        designation: "",
        medal: "",
        indent: "",
        ApplicationDate: "",
        audit: "",
      },
    };
  },

  methods: {
    resetForm() {
      this.$refs["ruleForm"].resetFields();
    },
    handleSizeChange: function (val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    open() {
      this.$confirm("请确认是否审核通过", "审核提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "审核成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消审核",
          });
        });
    },
    onSubmit() {
      let params = {};
    },
    handleClick(row) {
      console.log(row);
    },
    newj() {
      this.$router.push("/child");
    },

    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
  },
};
</script>

<style scoped>
.block {
  position: absolute;
  padding: 0px 270px;
  bottom: -38px;
  text-align: center;
}
table {
  text-align: center;
  position: relative;
  top: 2px;
  width: 1200px;
  margin: 10px 20px;
  border-collapse: collapse;
  border: 1px solid rgb(232, 232, 232);
}
th,
td {
  height: 35px;
  text-align: center;
  border: 0.9px solid rgb(172, 169, 169);
}
th {
  background-color: rgb(232, 232, 232);
}
.out {
  background-color: #fff;
  color: rgb(64, 151, 255);
}
.el-row button {
  margin: 0px 5px;
}

.ivu-modal-footer {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
}
.ips {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
}
.ips p {
  margin: 10px 0px;
}
.one {
  float: left;
  margin-right: 80px;
  width: 243px;
  text-align: right;
}
.caidan {
  position: absolute;
  left: 0px;
}
.demo-form-inline {
  position: relative;
  padding: 10px;
}
.tb {
  height: 70px;
  width: 1100px;
  padding: 10px 10px;
}

.btn {
  padding: 10px 0px;
}
.allbtn {
  text-align: center;
}
button {
  margin-right: 50px;
}
.chong {
  background-color: #fff;
  color: black;
}

.el-table {
  width: 100%;
}
.xinjian {
  margin-left: 20px;
}
.newj {
  margin: 0px;
  background-color: #fff;
  color: rgb(64, 151, 255);
}
/deep/ .el-input__inner {
  height: 30px;
  width: 150px;
}
</style>

