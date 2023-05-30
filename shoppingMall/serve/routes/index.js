var express = require('express');
var router = express.Router();
let db = require('../config/mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('hello')
  db.query('select * from admin',function(err,data){
  	res.send(data)
  })
});

module.exports = router;
