let mysql = require('mysql');
let db = mysql.createConnection({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'123456',
	database:'shopcity'
})
db.connect();
module.exports = db;