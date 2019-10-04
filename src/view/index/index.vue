<style lang="less" scoped>
	@import './index.less';
</style>
<template>
	<div id="index">
		<!-- 头部-->
		 <headerly></headerly>
		<!-- 轮廓图-->
		<banner></banner>
		<!--结束轮廓图 -->
		<!-- 特色功能-->
		<div class="index_function">
			<h2>特色功能</h2>
			<div class="index_function_box">
				<div class="index_function_box_li" v-for="(item,index) in list"  >
					<div class="index_function_box_li_img"><img :src="item.img" /></div>
					<div class="index_function_box_title">{{item.title}}</div>
					<div class="index_function_box_txt">{{item.txt}}</div>
				</div>
			</div>
		</div>
		<!-- 结束特色功能-->
		<!-- 一站式解决方案-->
		<div class="solution">
			<div class="solution_box">
				<h2>一站式解决方案</h2>
				<div class="solution_box_wrop">
					<div class="solution_box_wrop_left">
						<div class="solution_box_wrop_left_1">
							<h3>APP控制</h3>
							<p>基于APP的智能物联家居设备控制，信号接收及告警，一机在手，安全我有</p>
						</div>
						<div id="solution_box_wrop_left_2" class="solution_box_wrop_left_2">
							<span></span>
							<img src="@/assets/images/index_customized.png" />
						</div>
						<div class="solution_box_wrop_left_3">
							<h3>设备定制</h3>
							<p>提供自有品牌的设备定制服务</p>
						</div>
					</div>
					<div class="solution_box_wrop_center">
						<div id="solution_box_wrop_center1" class="solution_box_wrop_center1">
							<span></span>
							<img src="@/assets/images/index_bg2.png" />
						</div>
						<div class="solution_box_wrop_center2">
							<div id="solution_box_wrop_center2_l" class="solution_box_wrop_center2_l">
								<span></span>
								<img src="@/assets/images/index_bg3.png" />
							</div>
							<div class="solution_box_wrop_center2_r">
								<h3>运营管理</h3>
								<p>提供完善的权限广告、问候语、资讯发布，运营统计报表管理</p>
							</div>
						</div>
					</div>
					<div class="solution_box_wrop_right">
						<div class="solution_box_wrop_right_1">
							<h3>设备接入</h3>
							<p>提供三方设备接入服务，兼容多种芯片与协议</p>
						</div>

						<div id="solution_box_wrop_right_2" class="solution_box_wrop_right_2">
							<span></span>
							<img width="75" height="75" src="@/assets/images/index_operate.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--结束一站式解决方案 -->
		<!-- 全球化部署-->
		<div class="index_deploy">
			<div class="index_deploy_box">
				<h2>全球化部署</h2>
				<div class="index_deploy_box_wrop">
					<div class="index_deploy_box_wrop_left"></div>
					<div class="index_deploy_box_wrop_right">
						<dl>
							<dt>阿里云</dt>
							<dd><img src="@/assets/images/index_logo2.png" /></dd>
						</dl>
						<dl>
							<dt>亚马逊</dt>
							<dd><img src="@/assets/images/index_logo3.png" /></dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
		<!-- 结束全球化部署-->
		<!-- 底部-->
		 <footerly></footerly>
		<!-- 结束底部-->
	</div>
</template>

<script>
	// 轮廓图
	import banner from '@/components/banner/banner.vue'

	export default {
		name: 'index',
    data(){
        return{
         list:[
           {"img":require("@/assets/images/index_icon1.png"),"title":"即插即用","txt":"接通电源、WiFi配置、APP控制、信号接收"},
           {"img":require("@/assets/images/index_icon2.png"),"title":"设备互联","txt":"一个设备状态的改变，自动触发另一个设备的动作，如：报警+拍照"},
           {"img":require("@/assets/images/index_icon3.png"),"title":"安保服务","txt":"财产保险，人员24小时职守及人力安保服务"},
           {"img":require("@/assets/images/index_icon4.png"),"title":"开放平台","txt":"为第三方应用提供配套的SDK、RestAPI接口、便于第三方应用集成"},
           {"img":require("@/assets/images/index_icon5.png"),"title":"运营报表","txt":"图形化显示设备在线及分布，报警数量及分类，设备告警，APP终端分析"},
           {"img":require("@/assets/images/index_icon6.png"),"title":"自有品牌APP","txt":"为OEM用户提供自有品牌，发布广告语，运营设置，快速构建自有品牌"}
         ]
        }
    },
		methods: {

		},
		components: {
			banner
		},
    mounted(){
       $('#solution_box_wrop_center1').mouseover(function() {
       	$('#solution_box_wrop_center1 img').stop().animate({
       		top: -68
       	}, function() {
       		// console.log("进入")
       	});
       }).mouseout(function() {
       	$('#solution_box_wrop_center1 img').stop().animate({
       		top: 0
       	}, function() {
       		// console.log("离开")
       	});
       });


       $('#solution_box_wrop_center2_l').mouseover(function() {
       	$('#solution_box_wrop_center2_l img').stop().animate({
       		top: -34
       	}, function() {
       		// console.log("进入")
       	});
       }).mouseout(function() {
       	$('#solution_box_wrop_center2_l img').stop().animate({
       		top: 0
       	}, function() {
       		// console.log("离开")
       	});
       });

       $('#solution_box_wrop_left_2').mouseover(function() {
       	$('#solution_box_wrop_left_2 img').stop().animate({
       		width: 100,
       		height: 100,
       		left: 71,
       		top: 51
       	});
       }).mouseout(function() {
       	$('#solution_box_wrop_left_2 img').stop().animate({
       		width: 75,
       		height: 75,
       		left: 81,
       		top: 70
       	});
       });

       $('#solution_box_wrop_right_2').mouseover(function() {
       	$('#solution_box_wrop_right_2 img').stop().animate({
       		width: 100,
       		height: 100,
       		left: 71,
       		top: 57
       	});

       }).mouseout(function() {
       	$('#solution_box_wrop_right_2 img').stop().animate({
       		width: 75,
       		height: 75,
       		left: 81,
       		top: 72
       	});
       });
    }
	}
</script>

<style scoped></style>
