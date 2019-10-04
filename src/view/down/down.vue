<style lang="less" scoped>
@imgdo:'../../assets/down'; /* 背景图路径*/

.down{
	.down_box{
    min-width: 1200px;
    background: url('@{imgdo}/app_bg.png') center center no-repeat ;

    .down_list {
      width: 1200px;
      height: 740px;
      padding-top: 65px;
      margin: 0 auto;
      .down_box_li {
        width: 1160px;
        padding: 20px;
        height: 164px;
        margin-bottom: 60px;
        background: url('@{imgdo}/app_box_bg.png') repeat;

        .li_left {
          width: 120px;
          height: 120px;
          float: left;
          margin-right: 20px;
        }

        .li_center {
          width: 630px;
          height: 120px;
          float: left;

          dt {
            width: 640px;
            height: 40px;
            font-size: 22px;
            color: #464646;
          }

          dd {
            width: 630px;
            height: 120px;
            font-size: 12px;
            color: #666;
          }
        }

        .li_erweima {
          width: 120px;
          height: 110px;
          padding-top: 10px;
          float: left;
          margin-left: 25px;

          img {
            width: 121px;
            height: 100px;
          }
        }

        .li_right {
          width: 152px;
          height: 120px;
          float: left;
          margin-left: 40px;

          .android {
            width: 152px;
            height: 40px;
            margin-bottom: 20px;
            margin-top: 10px;
          }

          .ios {
            width: 152px;
            height: 40px;
          }

          a {
            width: 150px;
            height: 38px;
            line-height: 38px;
            padding-left: 48px;
            border: 1px solid #ea5b24;
            font-size: 14px;
            color: #666;
            display: block;
            border-radius: 3px;
            background: url('@{imgdo}/android.png') 16px center no-repeat;

            &:hover {
              background-image: url('@{imgdo}/android_h.png') no-repeat;
              background-position: 16px center;
              background-color: #ea5b24;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

</style>

<template>
	<div class="down">
    <!--头部-->
    <headerly></headerly>
    <!--结束头部-->
		 <div class="down_box">
       <div class="down_list">
			  <template v-for="(item,index) in down" >
			 	  <div class="down_box_li"  >
			 	 		<div class="li_left"><img :src="item.img" title="" alt=""/></div>
					    <div class="li_center">
							<dl>
								<dt>{{item.title}}</dt>
								<dd>{{item.txt}}</dd>
							</dl>
						</div>
						<div class="li_erweima"><img :src="item.erweima" title="" alt="" /></div>
						<div class="li_right">
							<div class="android"><router-link :to="item.android" tag="a">Android下载</router-link></div>
							<div class="ios"><router-link :to="item.ios" tag="a">ISO下载</router-link></div>
						</div>
			 	 </div>
			 </template>
       </div>
     </div>
    <!--头部-->
    <footerly></footerly>
    <!--结束头部-->
	</div>
</template>

<script>
export default{
	name:"down",
	data(){
		return{
			down:[]
		}
	},
	created(){
		this.down=this.$store.state.down;
		console.log(this.down)
	}
}
</script>

<style scoped>

</style>
