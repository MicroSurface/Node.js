var express = require('express');
var mySql = require('mySql');
var OptPool = require("./MySqlPool");

var app = express();

var optPool = new OptPool();
var pool = optPool.getPool();
var dataList = '';

function getDataFromSql(){
	pool.getConnection(function(err, conn){
		var userAddData = 'insert into Game(brief_text, topic_source) values (?, ?)';
		var param = ['this data is from Today', 'Simple Day'];
		
		var queryData = 'select * from Game';
		conn.query(queryData, function(err, res){
			if(err){
				console.log('query:', err);
				return;
			}
			// for (var i = 0; i < res.length; i++){
			// 	var temp = res[i].topic_source;
			// 	dataList.push(res[i].topic_source);
			// }
			dataList = JSON.stringify(res);
			conn.release();
		});
	});
}

app.get('/info', function(req, res){
	getDataFromSql();
	res.set({'Content-Type':'text/json','Encodeing':'utf8'});
	res.send(dataList);
})


app.listen(8888);