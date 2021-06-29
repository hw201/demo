<template>
  <div class="caidan">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
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
          <el-form-item label="活动名称">
            <el-input
              v-model="formInline.user"
              placeholder="单行输入"
              class="inputs"
            ></el-input>
          </el-form-item>
        </div>

        <div class="one">
          <el-form-item label="活动状态" class="act">
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
        <el-button type="primary" class="newj" @click="newj">新建</el-button>
        <el-button type="primary">导出</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },

  methods: {
    onSubmit() {},
    handleClick(row) {
      console.log(row);
    },
    newj() {
      this.$router.push("/construction");
    },
  },
};
</script>

<style scoped>
.caidan {
  position: absolute;
  left: 0px;
}
.one {
  float: left;
  margin-right: 30px;
  width: 245px;
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
.act {
  margin: 0px;
  padding: 0px;
}
.inputs {
  height: 10px;
}
.btn {
  padding: 20px 10px;
  position: relative;
  margin: 0 auto;
}

.btn button {
  margin-right: 50px;
  position: relative;
  right: 150px;
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
</style>
