<style lang="less">
@img: '../../assets/upload';
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
    box-shadow: 0 1px 10px #666666;
  }
  span {
    width: 17px;
    height: 9px;
    background: url('@{img}/right.png') no-repeat;
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
  <div id="tab_list">
    <div class="tab_box">
      <template v-for="(item, index) in list">
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
  </div>
</template>

<script>
export default {
  name: 'tab_list',
  data() {
    return {
      list:[],
      list1: [],
      list2: [],
      obj:{},
      obj1:{},
      obj2:{},
    };
  },
  props:["id"],
  created() {
    var that=this;
    this.list1 = this.$store.state.list1;
    this.list2=this.$store.state.list2;
    this.list=this.list1.concat(this.list2);
    // Array.prototype.push.apply(this.list1,this.list2);
    // this.list.push.apply(that.list,that.list2,that.list1);

  },
  mounted() {
     var obj1 = {
        m: 1,
        n: 2,
        j: { r: { h: 2},p: 4},
        p: 1
      };
      var obj2 = { m: 2, n: undefined, j: { h: 2, o: 3 } };
      var obj3 = Object.assign(obj1, obj2);
      console.log('合并后-obj1',obj1)
      console.log('合并后-obj2',obj2)
      console.log('合并后-obj3',obj3)

     //浅拷贝   受拷贝对象的影响
     var obj1={'a':1};
     var obj2={'b':{'b1':22,'b2':33}};
     $.extend(obj1,obj2);
     obj2.b.b1=12
     console.log('对象浅拷贝',obj1)
     //深拷贝  不受 拷贝对象的影响
     var obj1 ={m:1,n:2,j:{r:{h:2},p:4},p:1}
     var obj2 ={m:2,n:undefined,j:{h:2,o:3}}
     var obj4 ={m:42,n:undefined,j:{o:8}}
     var obj3 = $.extend(true,obj1,obj2,obj3);
     console.log('对象深合并',obj1)

  }
};
</script>

<style></style>
