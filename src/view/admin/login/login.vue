<style lang="less" scoped>
.login {
  min-width: 1200px;
  height: 700px;
  margin: 0 auto;

  span {
    width: 20rem;
    mso-default-height: 20rem;
    height: 20px;
    background: pink;
    font-size: 1rem;
    cursor:pointer;
  }

  div {
    height: 1rem;
  }

  .box1 {
    /* 750 * 20% */
    width: 150px;
    background-color: coral;
  }

  .box2 {
    /* 750 * 40% */
    width: 300px;
    background-color: skyblue;
  }

  .box3 {
    /* 750 * 60% */
    width: 450px;
    background-color: palegreen;
  }

  .box4 {
    /* 750 * 80% */
    width: 600px;
    background-color: wheat;
  }

  .box5 {
    /* 750 * 100% */
    width: 750px;
    background-color: darkred;
  }
}

</style>
<template>
    <div class="login">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
      <div>Get请求</div>
      <div>Post请求</div>
      <div>jsonp请求</div>
      <div></div>
      <div></div>
      <!--<span>{{this.$route.params}}</span>
      <sapn>{{this.$route.query.goodid}}</sapn>-->
      <span >事件传递</span>
      <span v-on:click="myclick">调用子组件中的方法</span>
      <span>主页面内容：{{shu}}</span>
			<show v-bind:num="shu" v-on:kui1="jia" @kui2="jian"></show>

    </div>
</template>

<script>
import show from './show.vue';
export default{
  data(){
    return{
      shu:123
    }
  },
  components: {
    show
  },
  derective:{

  },
  methods: {
		//阻止冒泡  默认事件
		// event.stopPropagation  event.cancelBubble=true
		// event.preventDefault   event.returnValue=true
    //          this.$store.commit('setUserId', e.userId);
    //          this.$router.push({
    //          this.$router.push({
    //            name: this.$config.homeName
    //          });

    jia(){
      this.shu++;
    },
    jian(){
      this.shu--;
    },
    myclick: function () {
      // this.$refs.child.clickme;
      console.log(this.$refs.child);
    }
    }
}

</script>

<style>



</style>
