<style lang="less" scoped>
@img: '../../assets/images'; //需要加引号
@imgup: '../../assets/upload';

.conten {
  min-width: 1200px;
  height: 260px;
  background: url('@{img}/equipment_bg.png') center center no-repeat;
}
.conten_nei {
  width: 1200px;
  height: 260px;
  margin: 0 auto;
  position: relative;
  p {
    position: absolute;
    top: 120px;
    right: 0;
    font-size: 18px;
    font-weight: 700;
    color: #666;
    span {

      color: #ea5b24;
    }
  }
}
.conten_map_box {
  min-width: 1200px;
  height: 43px;
  border-bottom: 1px solid #f3f3f3;
  .conten_map_nei {
    width: 1200px;
    margin: 0 auto;
    line-height: 43px;
    font-size: 12px;
    position: relative;
    .conten_map_next {
      position: absolute;
      right: 0;
      a {
        color: #666;
        &:hover {
          color: #ea5b24;
        }
      }
    }
  }
}
.active {
  background: url('@{img}/index_function_box_title.png') left bottom no-repeat;
  padding-bottom: 5px;
  color: #000 !important;
}
.conten_part_nav {
  margin: 20px 0;
  width: 1200px;
  height: 50px;
  margin: 0 auto;

  ul {
    li {
    float: left;
    padding-right: 30px;
    cursor: pointer;
    color: #666;
    font-size: 14px;
    &:hover {
      background: url('@{img}/index_function_box_title.png') left bottom no-repeat;
      padding-bottom: 5px;
    }
   }
  }
}
.tab_box {
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
}
.tab_box_li {
  width: 376px;
  height: 490px;
  float: left;
  cursor: pointer;
  position: relative;
  margin: 10px;
  &:hover {
       //box-shadow: 0 1px 10px #666666;
      .box-shadow( 0 , 1px , 10px , #666666);
  }
  span {
    width: 17px;
    height: 9px;
    background: url('@{imgup}/right.png') no-repeat;
    position: absolute;
    right: 20px;
    top: 42px;
  }
  dt {
    width: 376px;
    height: 376px;
  }
  img {
    width: 376px;
    height: 376px;
    border: none;
  }
  dd {
    width: 360px;
    height: 82px;
    position: relative;
    border-top: 1px solid #eee;
    padding: 16px 0 20px 16px;
  }
  .p_title {
    width: 364px;
    font-size: 24px;
    line-height: 32px;
    color: #666;
  }
  .p_txt {
    width: 364px;
    font-size: 12px;
    line-height: 26px;
    color: #999;
  }
}
</style>

<template>
  <div id="portal">
    <!--头部-->
    <headerly></headerly>
    <!--结束头部-->
    <div class="conten">
      <div class="conten_nei">
        <p>
          高质量的产品，让世界
          <span>更安全</span>
        </p>
      </div>
    </div>
    <div class="conten_map_box">
      <div class="conten_map_nei">
        <div class="conten_map_next">
          <span>你的位置：</span>
          <span><router-link to="/">首页</router-link></span>
          <span>&gt;&gt;</span>
          <span><router-link to="/portal">智能设备</router-link></span>
        </div>
      </div>
    </div>
    <div class="conten_part_nav">
      <ul>
        <li id="list" class="active" v-on:click="handleClick(list)">{{ name1 }}</li>
        <li id="list1" v-on:click="handleClick(list1)">{{ name2 }}</li>
        <li id="list2" v-on:click="handleClick(list2)">{{ name3 }}</li>
      </ul>
    </div>
    <div class="tab_box">
      <template v-for="(item, index) in showlist">
        <router-link class="tab_box_li" :key="index" to="/detail" data-item="item">
          <dl>
            <dt><img :src="item.img" title="" alt="" /></dt>
            <dd>
              <span></span>
              <p class="p_title">{{ item.p_title }}</p>
              <p class="p_txt">{{ item.p_txt }}</p>
            </dd>
          </dl>
        </router-link>
      </template>
    </div>
    <!--底部-->
    <footerly></footerly>
    <!--结束底部-->
  </div>
</template>

<script>
import tabs from './tabs.vue'


export default {
  name: 'portal',
  data(){
    return {
        name1:"全部",
        name2:"网关",
        name3:"配件",
        showlist:[],
        list:[],
        list1: [],
        list2: [],
        obj:{},
        obj1:{},
        obj2:{},
    }
  },
  components:{
    tabs
  },
  methods:{
      handleClick:function(ev){
         this.showlist=ev;
     }
  },
  created(){
          var that=this;
          this.list1 = this.$store.state.list1;
          this.list2=this.$store.state.list2;
          this.list=this.list1.concat(this.list2);
          this.showlist=this.list;
          // Array.prototype.push.apply(this.list1,this.list2);
          // this.list.push.apply(that.list,that.list2,that.list1);
  },
  beforeMount(){

  },
  mounted(){
       let li = $('.conten_part_nav ul:eq(0) li');
       li.click(function(){
              li.each(function (index,element) {
                 $(element).removeClass('active');
              })
              $(this).addClass('active');
       })
  },
  activated(){

  },
  watch:{

  }

}

</script>

<style lang="less"></style>
