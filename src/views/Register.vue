<template>
  <div class="register">
    <div class="outdiv">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
        :hide-required-asterisk="true"
      >
        <h2>用户登录</h2>

        <el-form-item label="账号" prop="userName">
          <el-input
            v-model="ruleForm.userName"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="12">
            <el-form-item label="验证码" prop="captcha">
              <el-input
                style="width: 100%"
                type="text"
                v-model="ruleForm.captcha"
                auto-complete="off"
                placeholder="验证码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="code-box">
            <div class="code">
              <span :code="ruleForm.code">{{ code }}</span>
            </div>
          </el-col>
        </el-row>

        <div class="input_checkbox">
          <el-checkbox class="remember" v-model="rememberpwd"
            >记住密码</el-checkbox
          >
        </div>

        <div class="btn">
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              style="width: 100%"
              :loading="loading"
              >登录</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      rememberpwd: false, //是否记住密码
      loading: false,
      data: {},
      code: null,
      ruleForm: {
        userName: "",
        password: "",
        checkPass: "",
        captcha: "",
        code: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  created() {
    let param = {
      captcha: this.ruleForm.captcha,
    };
    this.axios({
      method: "get",
      url: "http://localhost:8888/user/getCaptcha",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      withCredentials: true,
      data: param,
    }).then((res) => {
      console.log(res.data);
      // this.data = res.data;
      this.code = res.data.data;
    });
  },
  methods: {
    submitForm(formName) {
      let params = {
        userName: this.ruleForm.userName,
        password: this.ruleForm.password,
        captcha: this.ruleForm.captcha,
      };
      this.axios({
        method: "post",
        url: "http://localhost:8888/user/login",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: params,
      }).then((res) => {
        console.log(res.data);

        this.data = res.data;
        if (res.data.code == 200) {
          this.$message({
            message: "登陆成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "登录失败,请输入正确账号或密码",
            type: "reject",
          });
        }
      });

      //校验
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          // console.log("error submit!!");

          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
.code {
  border: 1px solid silver;
  background-color: #fff;
  position: relative;
  left: 10px;
  width: 188px;
  height: 39px;
}
.register {
  height: 770px;

  position: relative;
  background-image: url("../assets/1.jpg");
  background-repeat: repeat;
  background-size: 100%;
}
.outdiv {
  height: 400px;
  width: 400px;
  position: absolute;
  top: 30%;
  left: 45%;
  transform: translateX(-50%);
}
h2 {
  position: relative;
  left: 37%;
  padding: 20px;
}
.btn {
  padding: 20px 0px;
  width: 100%;
}
.input_checkbox {
  position: relative;
  left: 20%;
}
/deep/.el-input__inner {
  width: 100%;
}
</style>