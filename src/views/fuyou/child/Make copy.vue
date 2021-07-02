<div class="container">
        <div class="col-md-12 content-center">
            <div id="signUp" class="card-plain">
                <form class="form" method="post" th:action="@{/stu/register}">
                    <div class="header">
                        <div class="logo-container">
                            <img th:src="@{/assets/images/logo.svg}" alt="">
                        </div>
                        <h5>注册</h5>
                        <!-- <span>Register a new membership</span> -->
                    </div>
                    <div class="content">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="请输入学生号" name="id" v-model="id">
                            <span class="input-group-addon">
                                <i class="zmdi zmdi-account-circle"></i>
                            </span>
                        </div>
                        <div style="color: #ff7878" v-model="text1">{{text1}}</div>

                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="请输入用户名" name="username" v-model="username">
                            <span class="input-group-addon">
                                <i class="zmdi zmdi-account-circle"></i>
                            </span>
                        </div>
                        <div style="color: #ff7878" v-model="text2">{{text2}}</div>

                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="请输入邮箱" name="email" v-model="email">
                            <span class="input-group-addon">
                                <i class="zmdi zmdi-email"></i>
                            </span>
                        </div>
                        <div style="color: #ff7878" v-model="text3">{{text3}}</div>

                        <div class="input-group">
                            <input type="password" placeholder="请输入密码" class="form-control" name="password1"  v-model="password1"/>
                            <span class="input-group-addon">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
                        </div>
                        <div style="color: #ff7878" v-model="text4">{{text4}}</div>

                        <div class="input-group">
                            <input type="password" placeholder="重新确认密码" class="form-control" v-model="password2"/>
                            <span class="input-group-addon">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
                        </div>
                        <div style="color: #ff7878" v-model="text5">{{text5}}</div>
                    </div>

                    <div class="footer text-center">
                        <!--注意使用b-button,否则vue不能操作bootstrap-->
                        <b-button class="btn btn-primary btn-round btn-lg btn-block waves-effect waves-light" @click="submitForm">SIGN UP</b-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
var app = new Vue({
        el: "#signUp",
        data:{
            flag: 0,
            id: "",
            username: "",
            email: "",
            password1: "",
            password2: "",
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            student: {}
        },
        methods:{
            submitForm: async function () {

                this.flag = 0;
//                注意加this,表示vue与页面绑定的对象,以及如何判空
                if($.isEmptyObject(this.id)){
                    this.text1 = "学生号不能为空"
                }else {
                    this.flag++;
                    this.text1 = "";
                }

                if($.isEmptyObject(this.username)){
                    this.text2 = "用户名不能为空"
                }else{
                    this.flag++;
                    this.text2 = ""
                }

                if($.isEmptyObject(this.email)){
                    this.text3 = "邮箱不能为空"
                }else{
                    this.flag++;
                    this.text3 = ""
                }

                if($.isEmptyObject(this.password1)){
                    this.text4 = "密码不能为空"
                }else{
                    this.flag++;
                    this.text4 = ""
                }

                if(!(this.password1 == this.password2)){
                    this.text5 = "密码输入不正确"
                }else{
                    this.flag++
                    this.text5=""
                }
                if(this.flag == 5){
//                    alert(this.flag)

                    //注意axios的代码位置，避免代码顺序执行时，对象获取不到axios中返回的值
//                    alert(this.id)
//                    await axios({
//                        method:"GET",
//                        url:"/mheal/stu/stuChecked1?id=" + this.id,
//                    }).then(function (res) {
//                        this.student = res.data
//                    }).catch(function(error){
//                        console.log(error);
//                    })

                    _this = this
                    try{
                        await axios.get("/mheal/stu/stuChecked1?id=" + this.id)
                                       .then(res => {
                                           _this.student = res.data
                                       })
                    }catch(err){
                        console.log(err);
                        alert("请求出错")
                    }

                    console.log(this.student)

                    if(!$.isEmptyObject(this.student)){
                        alert($.isEmptyObject(this.student))
                        this.text1 = "该学生号已注册"
                    }else{
                        alert("注册成功")
//                      location.href="/mheal/stu/register?"
//                      post提交表单

                        let formdata = new FormData()
                        formdata.append("id",this.id)
                        formdata.append("username",this.username)
                        formdata.append("password",this.password1)
                        formdata.append("email",this.email)

                        let config = {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }

                        //异步提交表单，即使有返回页面，也不会实现页面跳转
                        axios.post('/mheal/stu/register',formdata,config).then(res => {
                            alert("提交表单")
                        })

                        location.href="/mheal/stu";
                    }
                }
            }
        }
    })
