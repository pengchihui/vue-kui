var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");
var users=require("../models/users");

//数据库不存在则创建
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
  users.find({},function(erro,doc){
    if(erro){
       res.json({
         status:'1',
         msg:erro.message
       });
    }else{
       res.json({
         status:"0",
         msg:'',
         result:{
           count:doc.length,
           list:doc
         }
       });
    }
  })

});

router.post("/users/login" ,function(req,res){
  res.render("index.html");
})

/* 添加 */
router.get("/add.html",function(req,res){
  res.render("add.html");
})


router.post('',(req,res,next)=>{

});

module.exports = router;
