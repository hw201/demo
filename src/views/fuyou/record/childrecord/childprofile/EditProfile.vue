<template>
  <show-position>
    <tabb />
    <div style="margin: 20px"></div>
    <el-form
      :label-position="labelPosition"
      label-width="130px"
      :model="formLabelAlign"
    >
      <el-form-item label="公众号">
        <el-input
          v-model="formLabelAlign.name"
          placeholder="丸美MARUBI"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="会员昵称">
        <el-input
          v-model="formLabelAlign.name"
          placeholder="丸小美"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="会员等级">
        <el-input
          v-model="formLabelAlign.name"
          placeholder="爱美会员"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="注册手机号">
        <el-input
          v-model="formLabelAlign.name"
          placeholder="111111"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="声望平台">
        <el-input
          v-model="formLabelAlign.name"
          placeholder="微博"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="平台昵称">
        <el-input
          v-model="formLabelAlign.region"
          placeholder="丸小美"
        ></el-input>
      </el-form-item>
      <el-form-item label="平台主页地址">
        <el-input
          v-model="formLabelAlign.type"
          placeholder="www.marubi.com"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </show-position>
</template>

<script>
import ShowPosition from "../../../../../components/ShowPosition.vue";
import Tabb from "../../../../../components/Tabb.vue";
export default {
  components: { Tabb, ShowPosition },
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style  scoped>
/deep/.el-input__inner {
  height: 30px;
  width: 180px;
}
</style>>
