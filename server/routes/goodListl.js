var express=require("express");
var router=express.Router();
var mongoose=require("mongoose");
var Goods=require("../models/goodLists");


//数据库不存在则创建
mongoose.connect("mongodb://localhost/user");

/数据库不存在则创建
mongoose.connect("mongodb://localhost/user");

mongoose.connection.on("connected",function () {
  console.log("链接成功")
})
mongoose.connection.on("error",function(){
  console.log("链接失败")
})
mongoose.connection.on("disconnected",function(){
  console.log("链接断开")
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  //数据分页
  var page=req.param("page");S
  var pageSize=req.param("pageSize");
  var skip=(page-1)*pageSize;
  var sort=req.param("sort");

  var obj={};
  let goodMoles=Goods.find(obj).skip(skip).limit(pageSize);
  goodMoles.sort({"salePrice":sort});
  goodMoles.exec(function(erro,doc){


  })


});

module.exports=router;
