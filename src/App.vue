<style>
  *{padding: 0px;margin: 0px;}
  ul li,ol{ list-style: none; }
  a {text-decoration: none; outline: none;}
</style>
<template>
    <div id="app">
       <router-view />
     </div>
</template>

<script>
export default {

  name: 'App',
  components: {

  },
  created(){
    // if(this.$router.path !== "/"){
    //    this.$router.replace('/')
    // }
  },
  mounted(){

  },
  watch:{
      '$route'(){
        var path=this.$route.path;
        if(path == "/market" || path== "/down"){
             $(".footer").css({"marginTop":"0px"})
             console.log(path)
        }else{
             $(".footer").css({"marginTop":"90px"})
        }
      }
  }
};


</script>

<style lang="less">
  *{padding: 0px;margin: 0px;}
  ul li,ol{ list-style: none; }
  a {text-decoration: none; outline: none;}
  #app {
    width: 100%;
    height: 100%;
  }
</style>
