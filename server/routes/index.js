var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");



//数据库不存在则创建
mongoose.connect("mongodb://localhost/user");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });



});

module.exports = router;
