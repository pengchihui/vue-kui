var mongoose=require("mongoose");

//声明数据结构
var Schame=mongoose.Schema;

var users=new Schame({
     name:{type:String,required:true},
     password:{type:Number},
     alive:Boolean
})
//应用发布到固定集合 并输出
module.exports=mongoose.model("users",users);













