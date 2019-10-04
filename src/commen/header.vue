<style lang="less" >
.header_box {
  margin-top: 90px;
  width: 1200px;
  margin: 0 auto;
  height: 80px;
}
h1 {
  width: 360px;
  height: 80px;
  font-size: 24px;
  float: left;
}
h1 a {
  width: 360px;
  height: 80px;
  padding-left: 55px;
  font-size: 24px;
  line-height: 80px;
  color: #333;
  font-weight: normal;
  background: url(../assets/images/logo.png) left center no-repeat;
  display: block;
  &:hover{
    color: #333;
  }
}
/*.on{*/
/*    background:#ea5b24!important;*/
/*    color:#fff!important;*/
/*}*/

.nav {
  width: 700px;
  height: 80px;
  float: right;
	 ul {
  width: 700px;
  height: 80px;
  float: right;
  display: flex;
  justify-content: space-between;
	border-bottom:none!important;
	.el-menu-item{
		padding: none;
	}
	li {
	  float: right;
	  line-height: 80px!important;
		font-size: 16px!important;
	  color: #666;
		height:80px!important;
		a{
			height: 80px;
			display: block;
      list-style: none;
		}
		}
	}
}

</style>
<template>
  <div class="header_box">
    <h1><router-link to="/">豪恩智能物联网感知云平台</router-link></h1>
    <!-- <nav>
      <ul>
        <li><router-link to="/" class="on wei">首页</router-link></li>
        <li><router-link to="/portal" >智能设备</router-link></li>
        <li><router-link to="/down" >APP下载</router-link></li>
        <li><router-link to="/" >开发平台</router-link></li>
        <li><router-link to="/market">物联商城</router-link></li>
        <li><router-link to="/" >新闻中心</router-link></li>
        <li><router-link to="/" >关于我们</router-link></li>
      </ul>
    </nav> -->
		<div class="nav">
			<el-menu mode="horizontal" active-text-color="#ea5b24" class="li" >
			 <el-menu-item index="1"  class="on"> <router-link to="/">首页</router-link></el-menu-item>
			 <el-menu-item index="2" > <router-link to="/portal">智能设备</router-link> </el-menu-item>
			 <el-menu-item index="3" > <router-link to="/down">APP下载</router-link></el-menu-item>
			 <el-menu-item index="4" > <a href="http://icloud.ihorn.com.cn/open/">开发平台</a></el-menu-item>
			 <el-menu-item index="5" > <router-link to="/market">物联商城</router-link></el-menu-item>
			 <el-menu-item index="6" > <router-link to="/news">新闻中心</router-link></el-menu-item>
			 <el-menu-item index="7" > <router-link to="/about">关于我们</router-link></el-menu-item>
			</el-menu>
		</div>
  </div>
</template>

<script>
/* 导入公共js文件 */

export default {
  name: 'header_box',
  methods:{

  },
  mounted(){
        /*dom渲染完成  */
				var co=" #ea5b24";
        var li = $('.li li');
        li.click(function(e) {
             /* 阻止冒泡*/
             e.preventDefault();
             /*兼容ie */
             var ev=e||window.event;
             var target=ev.target||ev.srcElement;

          li.each(function(i,kui) {
            $(kui).removeClass("on");
          });
              $(this).addClass('on');
        }).mouseenter(function(){
							$(this).addClass("over");
				}).mouseout(function(){
				      $(this).removeClass("over");
				})
  }
};
</script>

<style lang="less" scoped="scoped">


</style>
