<template>
  <div class="caidan">
    <div style="height: 83vh">
      <el-scrollbar style="height: 100%">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          ref="ruleForm"
        >
          <div class="tb">
            <div class="one">
              <el-form-item label="公众号" prop="wechatMpId">
                <el-select
                  v-model="formInline.wechatMpId"
                  placeholder="请选择"
                  class="inputs"
                >
                  <el-option label="丸美" value="1"></el-option>
                  <el-option label="春纪" value="2"></el-option>
                </el-select>
              </el-form-item>
            </div>

            <div class="one">
              <el-form-item label="礼品类型" prop="awardType">
                <el-select
                  v-model="formInline.awardType"
                  placeholder="请选择"
                  class="inputs"
                >
                  <el-option label="实物" value="1"></el-option>
                  <el-option label="虚拟" value="2"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>

          <div class="allbtn">
            <el-form-item class="btn">
              <el-button type="primary" @click="onSubmit" class="cx"
                >查询</el-button
              >
              <el-button class="chong" @click="resetForm">重置</el-button>
            </el-form-item>
          </div>
        </el-form>

        <div class="xinjian">
          <el-row>
            <el-button type="primary" class="newj" @click="newj"
              >新建</el-button
            >
          </el-row>
        </div>

        <table
          :data="
            userDatas.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)
          "
        >
          <thead>
            <tr>
              <th>序号</th>
              <th>图片</th>
              <th>公众号</th>
              <th>广告位类型</th>
              <th>跳转链接</th>
              <th>展示顺序</th>
              <th>创建时间</th>
              <th>创建人</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) of userDatas" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.wechatMpId }}</td>
              <td>{{ item.activityTitle }}</td>
              <td>{{ item.awardType }}</td>
              <td>{{ item.awardName }}</td>
              <td>{{ item.mainProduct }}</td>
              <td>{{ item.costPoint }}</td>
              <td>{{ item.costMoney }}</td>
              <td>
                <a>编辑</a>|
                <el-button
                  @click.native.prevent="deleteRow(index, userDatas)"
                  type="text"
                  size="small"
                >
                  删除
                </el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </el-scrollbar>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-size="pageSize"
        :page-sizes="[10, 20, 30, 40, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Postermanage",

  components: {},
  data() {
    return {
      ruleForm: {
        //重置
        wechatMpId: "",

        awardType: "",
      },
      formInline: {
        //双向绑定
        wechatMpId: "",

        awardType: "",
      },
      currentPage1: 1, // 默认显示第几页
      pageIndex: 1, //当前页码
      userDatas: [], //后台返回数据
      total: 0, //数据总条数
      pageSize: 10, //加了mounted就默认显示~条
    };
  },

  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    resetForm() {
      //重置
      this.$refs["ruleForm"].resetFields();
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      // 改变每页显示的条数
      this.pageSize = val;
      //在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage1 = 1;
      this.onSubmit();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageIndex = val;
      // 改变默认的页数
      this.currentPage1 = val;
      this.onSubmit();
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
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
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
          // console.log(response);
          this.userDatas = response.data.data; //后端返回数据，保存数据
          this.total = response.data.total; //总数据
          this.pageIndex = response.pageIndex;

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
        }
      });
    },

    btn() {
      this.$router.push("/childprofile");
    },
    newj() {
      this.$router.push("/child");
    },
  },
  mounted() {
    //默认页面显示
    this.onSubmit();
  },
};
</script>

<style scoped>
/deep/.el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
/deep/.el-scrollbar__view {
  height: 100%;
}
/deep/.el-button--primary:focus,
.el-button--primary:hover {
  /* background: none; */
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
  margin-right: 200px;
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
  margin-left: -600px;
}

button {
  margin-right: 50px;
  margin-top: 40px;
}
.chong:focus,
.chong:hover,
.newj:focus,
.newj:hover {
  background-color: #fff;
  color: black;
}
/deep/.el-pagination .el-select .el-input .el-input__inner {
  padding-right: 50px;
}
.xinjian {
  margin-left: 20px;
  margin-top: -25px;
}
.newj {
  margin: 0px;
  background-color: #fff;
  color: rgb(64, 151, 255);
}
table {
  text-align: center;
  position: relative;
  top: 10px;
  width: 1440px;
  margin: 5px 20px;
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

.block {
  position: absolute;
  padding: 0px 270px;
  bottom: -45px;
  text-align: center;
}
</style>

