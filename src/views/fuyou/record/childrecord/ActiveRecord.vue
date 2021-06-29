<template>
  <div class="caidan">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      style="margin: 10px 0px"
    >
      <div class="tb">
        <div class="one">
          <el-form-item label="公众号">
            <el-select
              v-model="formInline.region"
              placeholder="丸美"
              class="inputs"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="注册手机号">
            <el-input
              v-model="formInline.user"
              placeholder="单行输入"
              class="inputs"
            ></el-input>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="活动名称">
            <el-input
              v-model="formInline.user"
              placeholder="请输入"
              class="inputs"
            ></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="tb">
        <div class="one">
          <el-form-item label="申领次数">
            <el-input
              v-model="formInline.user"
              placeholder="单行输入"
              class="inputs"
            ></el-input>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="订单状态">
            <el-select v-model="formInline.active" class="inputs">
              <el-option label="进行中" value="comeon"></el-option>
              <el-option label="未开始" value="nogo"></el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="申请时间">
            <el-input v-model="formInline.user" class="inputs"></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="tb">
        <div class="one">
          <el-form-item label="审核状态">
            <el-select v-model="formInline.active" class="inputs">
              <el-option label="进行中" value="comeon"></el-option>
              <el-option label="未开始" value="nogo"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="allbtn">
        <el-form-item class="btn">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" class="chong">重置</el-button>
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
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
      formInline: {
        user: "",
        region: "",
        active: "",
        gift: "",
      },

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
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
    onSubmit() {},
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

