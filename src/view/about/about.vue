<style lang="less" scoped>
@import './about.less';

</style>

<template>
<div class="about_app">
  <!--头部-->
  <headerly></headerly>
  <!--结束头部-->
	<div class="about_bg">
	  <div class="about_bg_box">
		<p><span>用拼搏</span>的精神做事业，<span>用感恩</span>的心做人！</p>
	  </div>
    </div>
	<!-- 结束about_bg -->
	<div class="conten_map_box">
	  <div class="conten_map_nei">
	    <div class="conten_map_next">
	      <span>你的位置：</span>
	      <span><router-link to="/">首页</router-link></span>
	      <span>&gt;&gt;</span>
	      <span><router-link to="/news">关于我们</router-link></span>
	    </div>
	  </div>
	</div>
	<!-- 结束conten_map_box -->
	<div class="about">
	    <h3>公司信息</h3>
		<div class="about_introduce1">
			<div class="about_left"></div>
			<div class="about_right">
				<h4>深圳市豪恩安全科技有限公司</h4>
				<p v-for="(item,index) in about_introduce1">{{item}}</p>
			</div>
	    </div>
		<!-- 结束about_introduce1 -->
		<div class="about_introduce2">
			<p v-for="(item,index) in about_introduce2">{{item}}</p>
	    </div>
		<!-- 结束about_introduce2 -->
		<div class="about_introduce3" >
		   <dl v-for="(item,index) in about_introduce3" :style="index===about_introduce3.length-1?'margin-right: 0':''" >
				<dt><img :src="item.img"></dt>
				<dd>{{item.title}}</dd>
		   </dl>
		</div>
		<!-- 结束about_introduce3 -->
		<div class="about_introduce4">
		<p v-for="(item,index) in about_introduce4">{{item}}</p>
	    </div>
		<!-- 结束 about_introduce4-->
		<h3 style="margin-top: 30px;">服务支持</h3>
		<div class="about_introduce5">
		<ul>
		  <li>设备定制</li>
		  <li>设备接入</li>
		  <li>服务提供</li>
		</ul>
       </div>
	   <!-- 结束 about_introduce5-->
	   <h3 style="margin-top: 60px;">合作伙伴</h3>
	   <div class="about_partner">
		<ul>
			<!-- <li><img src="../../assets/about/about_logo1.png"></li>
			<li><img src="../../assets/about/about_logo2.png"></li>
			<li><img src="../../assets/about/about_logo3.png"></li>
			<li><img src="../../assets/about/about_logo4.png"></li>
			<li><img src="../../assets/about/about_logo5.png"></li>
			<li><img src="../../assets/about/about_logo6.png"></li>
			<li><img src="../../assets/about/about_logo7.png"></li>
			<li><img src="../../assets/about/about_logo8.png"></li> -->
			<li v-for="(item,index) in about_partner" :style="(index+1)%4==0?'margin-right: 0':'margin-right: 12px'" ><img :src="item" alt=""></li>
		</ul>
	</div>
	<!-- 结束 about_partner-->
	<h3 style="margin-top: 50px;">联系我们</h3>
	<div class="about_contact">
		<iframe class="about_contact_left" src="/static/map.html" ref="iframe"  scrolling="no" frameBorder='0' width="100%"></iframe>
		<div class="about_contact_right">
			<h5>深圳市豪恩安全科技有限公司</h5>
			<div class="about_contact_right_l">
				<p>地址：深圳市光明新区万代恒光明高新科技工业园4栋</p>
				<p>电话：86-755-33265555</p>
			</div>
			<div class="about_contact_right_r">
				<p>邮编：518107</p>
				<p>邮箱：service02@ihornmail.com</p>
			</div>
		</div>
	</div>
	<!-- 结束 about_contact -->
	</div>
	<!-- 结束about -->
   <!--底部-->
   <footerly></footerly>
  <!--结束底部-->
</div>
<!-- 结尾 -->
</template>

<script>
export default{
	data(){
		return{
			about_introduce1:[
			"深圳市豪恩安全科技有限公司成立于1995年，是一家专业的安防设备供应商和方案提供商，集研发、制造、销售为一体的国家级高新技术企业。公司拥有研发人员100多人，提供防盗报警、智能家居、安防配件等全系安防产品。作为一家极具责任感的安防企业，豪恩安防一直致力于以高品质的产品和服务来实现自己的社会价值。",
			"科技之光，延伸生活每一处。豪恩以技术为企业发展的基石，专注于引领安防技术的突破和发展，每年投入研发费用超过营业额10%，与国际先进科研机构长期合作，拥有上百个型号的产品，获得专利及认证达200多项。豪恩注重技术创新，其自主研发的菲涅尔透镜技术打破了国内空白，使产品的灵敏度、稳定性得到了质的飞跃，开创了红外光学领域研究的新时代。",
			"在产品方面，豪恩防盗报警类涵盖防盗报警控制器、被动红外探测器、环境探测器、周界防范产品、燃气泄露报警器、报警周边配件等;智能家居类包括楼宇对讲、数码可视系统、智能小区、智能大厦、门禁、停车场控制等。"
			],
			about_introduce2:["在解决方案上，豪恩针对平安城市、金融、教育、小区、电讯、交通、司法、水利等众多领域提供特色化的行业解决方案，满足客户多样化、个性化的需求。",
			"视品质为企业生命，豪恩在业内率先导入ISO9001：2000质量管理体系和ISO/TS16949认证体系，建立了一套执行多年、成效显著的品质监控体系。每个方案无不经过相关部门反复优化筛选、严密测试，以确保每一款产品的安全、稳定。开创性地建立了CPS精益生产体系，成为行业内高品质的标杆企业。"
			],
			about_introduce3:[
				{"img":require("@/assets/about/about_icon1.png"),"title":"智能家居"},
				{"img":require("@/assets/about/about_icon2.png"),"title":"智能建筑"},
				{"img":require("@/assets/about/about_icon3.png"),"title":"联网报警"},
				{"img":require("@/assets/about/about_icon4.png"),"title":"个人用户"},
				{"img":require("@/assets/about/about_icon5.png"),"title":"通讯"},
				{"img":require("@/assets/about/about_icon6.png"),"title":"ODM/OEM"}
				],
		    about_introduce4:["在优秀中追求卓越的豪恩，先后通过了UL、CCC、CE、FCC、EN、ROHS等多项权威认证。2011年，荣获美国工业安全协会“新品技术奖”，连续十一年蝉联“中国安防十大民族品牌”、连续多年荣获“中国安防最具影响力十大品牌”、“中国安防30家金牌供应商”、“中国安防最佳口碑企业”、“中国安防知名品牌”、“平安城市建设推荐品牌”荣誉。",
			"豪恩牢记肩负的社会责任，积极引入ISO14001环境管理和OHSAS18001安全卫生管理体系，把减少、杜绝环境污染，加强员工职业安全健康当作工作的重中之重来抓。",
			"豪恩产品和方案广泛服务于全球60多个国家和地区，并与三星、BOSCH、华为、万科知名企业建立了长期的合作关系，公司团队富于创新性的劳动正在改变着人们的生活!",
			"豪恩，您值得信赖的合作伙伴！我们将以“用高品质的产品和服务，让世界更加安全、和谐!”为使命，不断创新突破，持续为客户创造更大的价值。"
			],
			about_partner:[
				require("@/assets/about/about_logo1.png"),
				require("@/assets/about/about_logo2.png"),
				require("@/assets/about/about_logo3.png"),
				require("@/assets/about/about_logo4.png"),
				require("@/assets/about/about_logo5.png"),
				require("@/assets/about/about_logo6.png"),
				require("@/assets/about/about_logo7.png"),
				require("@/assets/about/about_logo8.png")
			]

		}
	},
  created(){

  }
}
</script>

<style>

</style>
