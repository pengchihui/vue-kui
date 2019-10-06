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
            alert('submit!');
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
