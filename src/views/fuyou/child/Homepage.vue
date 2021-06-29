<template>
  <div class="caidan">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      ref="loginref"
    >
      <div class="tb">
        <div class="one">
          <el-form-item label="公众号">
            <el-select
              v-model="formInline.wechatMpId"
              placeholder="请选择"
              class="inputs"
            >
              <el-option label="丸美" value="0"></el-option>
              <el-option label="春纪" value="1"></el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="活动标题">
            <el-input
              v-model="formInline.activityTitle"
              placeholder="单行输入"
              class="inputs"
            ></el-input>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="礼品类型">
            <el-select v-model="formInline.awardType" placeholder="请选择礼品">
              <el-option label="实物" value="1"></el-option>
              <el-option label="虚拟" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="tb">
        <div class="one">
          <el-form-item label="活动状态">
            <el-select v-model="formInline.awardName">
              <el-option label="进行中" value="进行中"></el-option>
              <el-option label="未开始" value="未开始"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="allbtn">
        <el-form-item class="btn">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" class="chong" @click="reset"
            >重置</el-button
          >
        </el-form-item>
      </div>
    </el-form>

    <div class="xinjian">
      <el-row>
        <el-button type="primary" class="newj" @click="newj">新建</el-button>
        <el-button type="primary">导出</el-button>
      </el-row>
    </div>

    <div class="atable">
      <table>
        <tr>
          <td>序号</td>
          <td>公众号</td>
          <td>活动标题</td>
          <td>礼品类型</td>
          <td>礼品名称</td>
          <td>是否主推</td>
          <td>所需积分</td>
          <td>所需金额</td>
          <td>申领总数量</td>
          <td>已申领数量</td>
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

      <!-- <el-table :data="tableData" border style="width: 100%">
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
      </el-table> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",

  components: {},
  data() {
    return {
      userDatas: [],
      // tableData: [
      //   {
      //     num: 1,
      //     // name:"丸美MARUBI"
      //     wechatMpId: "",
      //     // province: "老带新",活动标题
      //     activityTitle: "",
      //     // city: "VIP会员",
      //     awardType: "",
      //     // address: "邀请有礼 1518 弄",
      //     awardName: "",
      //     // zip: 200333,
      //     mainProduct: false,
      //     costPoint: "",
      //     costMoney: "",
      //     levels: "",
      //     zip: "",
      //   },
      // ],
      // labelPosition: "right",
      formInline: {
        wechatMpId: "",
        activityTitle: "",
        awardType: "",
        awardName: "",
      },
    };
  },
  created() {},
  methods: {
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
      let result = {
        // activityTitle: data.wechatMpId,
        // applyTotal: data.applyTotal,
        // awardName: data.awardName,
        // awardType: data.awardType,
        // costMoney: data.costMoney,
        // costPoint: data.costPoint,
        // levels: data.levels,
        // mainProduct: data.mainProduct,
        // total: data.total,
        // wechatMpId: data.wechatMpId,

        // activityTitle=data.data
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
        data: result,
      }).then((response) => {
        // alert(response.data.code);
        if (response.data.code != 200) {
          // console.log(response.data.code);
        } else {
          this.userDatas = response.data.data;

          // this.userDatas.push(response.data.data);

          // this.activityTitle = response.data.data[0].activityTitle;
          // this.wechatMpId = response.data.data[0].wechatMpId;
          // this.awardType = response.data.data[0].awardType;
          // this.applyTotal = response.data.data[0].applyTotal;
          // this.awardName = response.data.data[0].awardName;
          // this.mainProduct =
          //   response.data.data[0].mainProduct == true ? "是" : "否";
          // this.costMoney = response.data.data[0].costMoney;
          // this.costPoint = response.data.data[0].costPoint;
          // this.costPoint = response.data.data[0].costPoint;
          // this.levels = response.data.data[0].levels;
          // this.total = response.data.data[0].total;
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
/* /deep/.el-button--primary:focus,
.el-button--primary:hover {
  /* background: none;
  border-color: #66b1ff;
  color: black;
} */
.caidan {
  position: absolute;
  left: 0px;
}
.one {
  float: left;
  margin-right: 150px;
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
.tb {
  padding: 0px 10px;
}

.inputs {
  height: 10px;
}
.btn {
  padding: 50px 0px;
  position: relative;
  left: -150px;
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

/* .el-table {
  width: 100%;
} */
.xinjian {
  margin-left: 20px;
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
  margin: 30px 20px;
  border-collapse: collapse;
  border: 1px solid rgb(232, 232, 232);
}
th,
td {
  height: 40px;
  text-align: center;
  border: 1px solid rgb(172, 169, 169);
}
th {
  background-color: rgb(232, 232, 232);
}
/deep/.el-table__header {
  width: 100%;
}
/deep/.el-table__body {
  width: 100%;
}
</style>

