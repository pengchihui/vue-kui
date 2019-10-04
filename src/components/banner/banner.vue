
<template>
    <el-carousel trigger="click" height="600px">
      <el-carousel-item v-for="(img,idx) in imglist" :key="idx">
         <img :src="img.url"  alt="" width="1200px" height="600px" />
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default{
    data() {
      return {
         imglist:[
           {url:require('../../assets/images/index_banner.png')},
           {url:require('../../assets/images/index_banner2.jpg')},
           {url:require('../../assets/images/index_banner3.jpg')}
         ]
      }
    },
  }
</script>
<style scoped>
.el-carousel{
  min-width: 1200px;
  background: #DFE2E5;
  text-align: center;
}
.el-carousel__button{
  height: 4px;
}
.pre {
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: url(../../assets/images/index_left.png) no-repeat;
  position: absolute;
  top: 277px;
  left: 10px;
  z-index: 10;
}
.next {
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: url(../../assets/images/index_right.png) no-repeat;
  position: absolute;
  top: 277px;
  right: 10px;
  z-index: 10;
}
.pre:hover {
  background: url(../../assets/images/index_left_hover.png) no-repeat;
}
.next:hover {
  background: url(../../assets/images/index_right_hover.png) no-repeat;
}

</style>
