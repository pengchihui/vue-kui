var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");
var users=require("../models/users");
var path = require('path');
var request = require('request');

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
router.get('/', function(req, res) {
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
router.get("/show",function(req,res,next){
     res.render("index.html");
})
router.post("/login",function(req,res,next){
  var param={
    "userName":req.body.userName,
    "userPassword":req.body.userPassword
  }
  users.findOne({"userName":"jieke","userPassword":"123456"},function(erro,doc){
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
  });
})
// 解析BODY
// function parseBody(req) {
//     var bufferArr = [];
//     req.on("data", function (data) {
//       bufferArr.push(data);
//     })
//     req.on("end", function () {
//       var postData = Buffer.concat(bufferArr).toString();
//       var params = require("querystring").parse(postData);
//       if (params) req.body = params;
//     })
// }

// request.post({url:'http://www.youxuewang.com.cn/shouji/home/LoadProducts', form: {
//     "pageno": 1,
//     "pagesize": 200,
//     "condstr": "社会大课堂: 0"
//   }}, function(error, response, body) {
//    //console.log(error,response,body)
//     console.log("1233")
//   });

module.exports = router;
