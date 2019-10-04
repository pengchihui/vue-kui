<style scoped>
.login {
    min-width:1200px;
    width:100%;
    height:47.1875rem;
    background-image: url(../../../assets/login/kui.jpg);
    background-size: contain;
    background-position: center;
    position: relative;

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
			<p>管理员注册</p>
			<el-form :model="User" :rules="rules" ref="Userform" label-width="80px" class="registerform">
				<el-form-item label="用户名" prop="name">
					<el-input type="text" v-model="User.name" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input  v-model="User.email" placeholder="请输入email"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="User.password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="password2">
					<el-input type="password" v-model="User.password2" placeholder="请确认密码"></el-input>
				</el-form-item>
				<el-form-item label="选择身份" prop="identity">
					<el-select v-model="User.identity" placeholder="请选择身份">
						<el-option label="管理员" value="manager"></el-option>
						<el-option label="员工" value="employee"></el-option>
				  </el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="bottom_bn" @click="submitForm('Userform')">注册</el-button>
			  <el-button @click="resetForm('Userform')">重置</el-button>
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
}
</script>


<style scoped></style>
