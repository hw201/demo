<template>
  <el-row>
    <h2 class="text-left">第一种样式上传方法：</h2>
    <el-col :span="8" :offset="8">
      <div id="upload">
        <!--elementui的form组件-->
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input
              v-model="form.name"
              name="names"
              style="width: 360px"
            ></el-input>
          </el-form-item>

          <label class="el-form-item__label" style="width: 80px"
            >上传图片</label
          >
          <!--elementui的上传图片的upload组件-->
          <!--
            :auto-upload=false  // 取消自动上传
            :on-remove="handleRemove" // 处理删除图片的操作
            :on-change="onchange" // 通过onchange这个属性来获取现在的图片和所有准备上传的图片
            :limit=1 // 限制只能上传一张，这里暂时只考虑一张图片的情况
            drag // 设置这个让可以把图片拖进来上传
            action="" // 这里暂时不设置上传地址，因为我们是要拦截在form中上传
            -->

          <el-upload
            class="upload-demo"
            :auto-upload="false"
            :on-change="onchange"
            :on-remove="handleRemove"
            :limit="1"
            drag
            action=""
            style="margin-left: 80px"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              这里只能上传一张,如需更换请先手动删除列表中的！
            </div>
          </el-upload>
          <el-form-item style="padding-top: 20px">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>

    <!--展示选中图片的区域-->
    <el-col :span="4">
      <div style="width: 100%; overflow: hidden; margin-left: 150px">
        <img :src="src" alt="" style="width: 100%" />
      </div>
    </el-col>
  </el-row>
</template>

    <script>
export default {
  data() {
    return {
      form2: {
        name: "",
      },
      param: "", //表单要提交的参数
      src: "https://afp.alicdn.com/afp-creative/creative/u124884735/14945f2171400c10764ab8f3468470e4.jpg", //展示图片的地址
    };
  },
  methods: {
    //阻止upload的自己上传，进行再操作
    onchange(file, filesList) {
      console.log(file);
      //创建临时的路径来展示图片
      var windowURL = window.URL || window.webkitURL;
      this.src = windowURL.createObjectURL(file.raw);
      //重新写一个表单上传的方法
      this.param = new FormData();
      this.param.append("file", file.raw, file.name);
    },
    handleRemove(file, filesList) {
      this.param.delete("file");
    },
    onSubmit() {
      //表单提交的事件
      var names = this.form.name;
      //下面append的东西就会到form表单数据的fields中；
      this.param.append("message", names);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      //然后通过下面的方式把内容通过axios来传到后台
      //下面的this.$reqs 是在主js中通过Vue.prototype.$reqs = axios 来把axios赋给它;
      this.$reqs.post("/upload", this.param, config).then(function (result) {
        console.log(result);
      });
    },
  },
};
</script>