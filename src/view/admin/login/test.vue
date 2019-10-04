<style lang="less" scoped>
.test{
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background:pink;
  background-image: url(../../../assets/login/li.jpg) ;
  background-repeat: no-repeat;
  .content{
    height: 500px;
  }
}

</style>

<template>
<div class="test">
     <div class="content">
        <label for="name" >用户名</label>
        <input id="name" type="text" v-model="name"/>
        <label for="password">密码</label>
        <input id="password" type="password"  v-model="password"/>

        <p>{{name}}---{{password}}</p>
     </div>
</div>
</template>

<script>

export default{
  data(){
    return{
      name:"",
      password:""
    }
  },

}


</script>

<style>

</style>
