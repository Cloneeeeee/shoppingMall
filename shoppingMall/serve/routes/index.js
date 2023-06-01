var express = require('express');
var router = express.Router();
let db = require('../config/mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('hello')
  // console.log(req.query.user)
  let user = req.query.user
  let pass = req.query.pass
  db.query('select * from admin where user = ?',[user],function(err,data){
	if(data==''){
		console.log('登录失败')
		res.send({tit:'输入的用户不存在，请重新输入',userlogin:false,passlogin:false})
	}else{
		// console.log('登录成功')
		// res.send({tit:'输入的用户不存在，请重新输入',userlogin:true,passlogin:false})
		db.query('select * from admin where user = ? and password = ?',[user,pass],function(err,data){
			if(data==''){
				res.send({tit:'输入的密码错误，请重新输入',userlogin:true,passlogin:false})
			}else{
				res.send({tit:'登录成功',userlogin:true,passlogin:true})
			}
		})
	}
	
  })
});

module.exports = router;
