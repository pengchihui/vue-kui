<style lang="less">
  .footer {
    margin-top: 90px;
    min-width: 1200px;
    height: 220px;
    background: #25252d;
  }
  .footer_box {
    width: 1200px;
    margin: 0 auto;
    height: 150px;
    padding-top: 70px;
  }
  .footer_box ul {
    width: 656px;
    height: 45px;
    text-align: center;
    margin: 0 auto;
  }
  .footer_box ul li {
    float: left;
    margin: 0 20px;
  }
  .footer_box ul li a {
      font-size: 14px;
      color: #50505e;
      background: none;
  }
  .footer_box ul li a:hover{
    color: #ea5b24;
  }
  .footer_box p{
    width: 1200px;
    text-align: center;
    color:#50505e;
  }

</style>

<template>
  <div class="footer">
   <div class="footer_box">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/portal">智能设备</router-link></li>
          <li><router-link to="/down">app下载</router-link></li>
          <li><a href="http://icloud.ihorn.com.cn/open">开放平台</a></li>
          <li><router-link to="/market">物联商城</router-link></li>
          <li><router-link to="/news">新闻中心</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
        <p>Copyright © 1995-2025 HORN Inc. 保留所有权利. © 深圳市豪恩安全科技有限公司  粤ICP备13026210号</p>
   </div>
  </div>
</template>
<script>
</script>
<style>
</style>
