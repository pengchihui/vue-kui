<style scoped>
.login {
    min-width:1200px;
    width:100%;
    height:700px;
    background-image: url(../../../assets/login/kui.jpg);
    background-size: contain;
    background-position: center;
    position: relative;
    overflow-y: hidden;

}

.center{
  position: absolute;
  top: 100px;
  right: 200px;
	width: 350px;
	height: 500px;
	margin-top: 150px;
	margin: 0 auto;
}
p{
	font-size: 24px;
	text-align: center;
	padding: 20px 0;
}
.bottom_bn{
	width: 100px;
}
</style>
<template>
	<div class="login">
		<section class="center">
			<p>管理员登入</p>
			<el-form :model="User" :rules="rules" ref="Userform" label-width="80px" class="registerform">
				<el-form-item label="用户名" prop="name">
					<el-input type="text" v-model="User.name" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="User.password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="bottom_bn" @click="submitForm('Userform')">登入</el-button>
			  <el-button @click="resetForm('Userform')">注册</el-button>
				</el-form-item>
			</el-form>
		</section>
	</div>

</template>

<script>

export default{
		name:"register",
		data(){
			 var validatePass2 = (rule, value, callback) => {
        if (value !== this.User.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
			return{
				User:{
					name:"",
					email:"",
					password:"",
					password2:"",
					identity:""
				},
				rules:{
					name:[{required:true,message:"用户名不能为空",trigger:"blur"},{min:2,max:30,message:"长度在2到30个字符串",trigger:'blur'}],
					email:[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },{type:"email",message:"邮箱格式不对", trigger: ['blur', 'change']}],
					password:[{required:true,message:"密码不能为空",trigger:"blur"},{min:6,max:30,message:"长度在6到30个字符串",trigger:"blur"}],
					password2:[{required:true,message:"密码不能为空",trigger:"blur"},
					{min:6,max:30,message:"长度在6到30个字符串",trigger:"blur"},
					{validator:validatePass2,trigger:"blur"}],
					identity:[ { required: true, message: '请选择活动身份', trigger: 'change' }]
				}
			}
		},
	  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            $.ajax({
              type:"post",// get或者post
              url:"http://localhost:3000/users/login",// 请求的url地址
              data:{
                "userName":this.User.name,
                "userPassword":this.User.password
              },//请求的参数
              dataType:"json",//json写了jq会帮我们转换成数组或者对象 他已经用JSON.parse弄好了
              timeout:3000,//3秒后提示错误
              beforeSend:function(){
                // 发送之前就会进入这个函数
                // return false 这个ajax就停止了不会发 如果没有return false 就会继续
              },
              success:function(data){ // 成功拿到结果放到这个函数 data就是拿到的结果
                console.log(data)
              },
              error:function(){//失败的函数
              },
              complete:function(){//不管成功还是失败 都会进这个函数
              }
            })

            } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
			 resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	 },
  mounted() {
    //禁止滚动条(默认是没有附加这个样式类的）
    $(document.body).toggleClass("html-body-overflow");
  }
}
</script>


<style scoped></style>
