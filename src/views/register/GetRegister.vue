

<template>
  <div class="register">
    <div class="outdiv">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :hide-required-asterisk="true"
      >
        <h2>用户注册</h2>

        <el-form-item label="注册账号" prop="userName">
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
        <el-form-item label="请确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="请确认密码"
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
            <el-input v-model="code" style="width: 100%"></el-input>
            <!-- <div class="code">
              <span>{{ code }}</span>
            </div> -->
          </el-col>
        </el-row>

        <div class="btn">
          <el-form-item>
            <el-button
              type="primary"
              @click.prevent="register()"
              style="width: 100%"
              >注册</el-button
            >
          </el-form-item>
        </div>
        <div class="login">
          <a @click="gologin"><i class="el-icon-back">返回登录页面</i></a>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { getCaptcha } from "@/network/getlogin";
export default {
  name: "GetRegister",
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
        callback(new Error("请确认输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      rememberpwd: false, //是否记住密码
      // loading: fasle,
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
          { required: true, message: "请注册账号", trigger: "blur" },
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
    this.getCaptcha();
  },

  methods: {
    //封装网络
    getCaptcha() {
      getCaptcha().then((res) => {
        // console.log(res);
        this.code = res.data;
      });
    },

    register() {
      const { userName, password, captcha } = this.ruleForm;
      if (userName && password && captcha) {
        //执行校验成功的相关操作
        if (this.code == 200) {
          // this.$router.push({ path: "/views" });
        }
      } else {
        this.$refs["ruleForm"].validateField([userName, password, captcha]);
        alert("请注册账号密码");
        return false;
      }
      //请求参数
      let params = {
        userName: this.ruleForm.userName,
        password: this.ruleForm.password,
        captcha: this.ruleForm.captcha,
      };
      this.axios({
        method: "post",
        url: "http://localhost:8888/user/register",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: params,
      }).then((res) => {
        console.log(res.data);
        //返回登录
        this.data = res.data;
        if (res.data.code == 200) {
          this.$message({
            message: "注册成功,请登录",
            type: "success",
          });

          this.$router.push({ path: "/views" });
        } else {
          this.$message({
            message: "用户已存在，请重新注册",
            type: "error",
          });
        }
      });
    },
    gologin() {
      this.$router.push({ path: "/views" });
    },
  },
};
</script>
<style scoped>
.login {
  position: relative;
  left: 100px;
  top: -30px;
}
.zhuce {
  position: relative;
  left: 90px;
  top: -20px;
}
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
  background-image: url("../../assets/1.jpg");
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
  left: 45%;
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