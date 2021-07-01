<template>
  <div class="caidan">
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

    <div class="atable">
      <table>
        <tr>
          <th>序号</th>
          <th>公众号</th>
          <th>活动标题</th>
          <th>礼品类型</th>
          <th>礼品名称</th>
          <th>是否主推</th>
          <th>所需积分</th>
          <th>所需金额</th>
          <th>申领总数量</th>
          <th>已申领数量</th>
        </tr>
        <tr v-for="(item, index) of userDatas" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.wechatMpId }}</td>
          <td>{{ item.activityTitle }}</td>
          <td>{{ item.awardType }}</td>
          <td>{{ item.awardName }}</td>
          <td>{{ item.mainProduct }}</td>
          <td>{{ item.costPoint }}</td>
          <td>{{ item.costMoney }}</td>
          <td></td>
          <td></td>
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
  name: "Homepage",

  components: {},
  data() {
    return {
      ruleForm: {
        //重置
        wechatMpId: "",
        activityTitle: "",
        awardType: "",
        awardName: "",
      },
      formInline: {
        //双向绑定
        wechatMpId: "",
        activityTitle: "",
        awardType: "",
        awardName: "",
      },
      userDatas: [], //保存数据
      total: 0, //数据总条数
      pageSize: 10, //每次显示10条
      // pageIndex: 1,
      currentPage: 1, //当前页
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

    btn() {
      this.$router.push("/childprofile");
    },
    handleClick(row) {
      this.$router.push("/detail");
    },
    onSubmit() {
      // let formData = new FormData();
      // for (let key in this.form) {
      //   formData.append(key, this.form[key]);
      //   console.log(formData.get(key));
      // }
      let params = {
        wechatMpId: this.formInline.wechatMpId,
        activityTitle: this.formInline.activityTitle,
        awardType: this.formInline.awardType,
        awardName: this.formInline.awardName,
      };
      this.axios({
        method: "post",
        url: "http://localhost:8888/postTrial/list",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: params,
      }).then((response) => {
        // alert(response.data.code);
        if (response.data.code != 200) {
          console.log(response.data.msg);
        } else {
          this.userDatas = response.data.data; //后端返回数据，保存数据
          this.total = response.data.total; //总数据
          // this.pageIndex = response.data.pageIndex;
          // this.pageSize = response.data.pageSize;
          this.userDatas.map(function (val) {
            if (val.wechatMpId === 1) {
              val.wechatMpId = "丸美";
            } else if (val.wechatMpId === 2) {
              val.wechatMpId = "春纪";
            }
          });
          this.userDatas.map(function (val) {
            if (val.awardType == 1) {
              val.awardType = "实物";
            } else if (val.awardType == 2) {
              val.awardType = "虚拟";
            }
          });
          this.userDatas.map(function (val) {
            if (val.mainProduct == true) {
              val.mainProduct = "是";
            } else if (val.mainProduct == false) {
              val.mainProduct = "否";
            }
          });
        }
      });
    },

    reset() {
      this.$refs.loginref.resetFields();
    },

    newj() {
      this.$router.push("/child");
    },
  },
};
</script>

<style scoped>
/deep/.el-button--primary:focus,
.el-button--primary:hover {
  background: none;
  color: black;
  /* border-color: #66b1ff; */
}
.cx:hover {
  border-color: #66b1ff;
  background-color: #66b1ff;
}
.caidan {
  position: absolute;
  left: 0px;
}
.one {
  float: left;

  width: 228px;
  text-align: right;
}
/deep/ .el-input__inner {
  height: 30px;
  width: 150px;
}
.demo-form-inline {
  position: relative;
  padding: 20px;
}

.btn {
  padding: 40px 0px;
  position: relative;
  margin: 0 auto;
}
.allbtn {
  text-align: center;
}
button {
  margin-right: 50px;
}
.chong:focus,
.chong:hover {
  background-color: #fff;
  color: black;
}
/deep/.el-pagination .el-select .el-input .el-input__inner {
  padding-right: 50px;
}
.xinjian {
  margin-left: 20px;
  margin-top: -50px;
}
.newj {
  margin: 0px;
  background-color: #fff;
  color: rgb(64, 151, 255);
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
/* /deep/.el-table__header {
  width: 100%;
}
/deep/.el-table__body {
  width: 100%;
} */
.block {
  position: absolute;
  padding: 0px 270px;
  bottom: -38px;
  text-align: center;
}
</style>

