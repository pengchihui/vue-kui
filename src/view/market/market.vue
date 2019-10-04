<style lang="less" scoped>
	.market{
		min-width: 1200px;
		height: 550px;
		background: #f6c660;
		padding-top:90px;
		.market_box{
			width:1200px;
			margin: 0 auto;
			.market_bg{
				width: 765px;
				height: 425px;
				float: left;
				img{
					width: 90%;
				}
			}
			.market_right{
			   width: 400px;
			   height: 300px;
			   float: right;
			   padding-top: 35px;
			   .market_right_top{
				    width: 400px;
					font-size: 34px;
					height: 80px;
					color: #464646;
					font-weight: 800;
			   }
			   .market_right_bottom{
				    width: 400px;
					line-height: 36px;
					height: 140px;
					font-size: 22px;
					color: #464646;
			   }
			   .market_right_btn{
				    width: 200px;
						height: 55px;
						background: #ea5b24;
						font-size: 16px;
						line-height: 55px;
						text-align: center;
						display: block;
						border-radius: 55px;
						a{
							color: #fff;
						}
			   }

			 }
		}
	}

</style>
<template>
  <div>
    <!--头部-->
    <headerly></headerly>
    <!--结束头部-->
	<div class="market">
		<div class="market_box">
		<div class="market_bg">
			<img src="../../assets/market/market_bg.png" alt="">
		</div>
		<div class="market_right">
			<div class="market_right_top">物联网商城</div>
			<div class="market_right_bottom">这里可以轻松购买您想要的设备，快来体验豪恩天猫家居专营店吧!</div>
			<div class="market_right_btn"><a href="https://haoenjiaju.tmall.com/?spm=a220o.1000855.w5001-14244977503.3.5c90c348bj8uWE&scene=taobao_shop" target="_blank">马上去买</a></div>
		</div>
		</div>
	</div>
    <!--头部-->
    <footerly></footerly>
    <!--结束头部-->
  </div>
</template>

<script>
export default{
  data(){
    return{

    }
  },
  // beforeMount(){
  //      $(".footer").css({"margin-top":"0"})
  // },
  // mounted(){
  //      $(".footer").css({"margin-top":"0"})
  // }
}
</script>

<style>


</style>
