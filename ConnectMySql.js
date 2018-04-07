var mysql = require("mysql");
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'2016maczx',
	database:'TestProject'
});

connection.connect(function(err){
	if(err){
		console.log('[query] - :', +err);
		return;
	}
	console.log('[connection connect] succeed!');
});

var addData = 'insert into Game(brief_text, topic_source) values(?, ?)';
var param = ['this data is from node', 'Fresh Platform'];
connection.query(addData, param, function(err, res){
	if(err){
		console.log('[query] - :', +err);
		return;
	}
	console.log('insert success');
});

connection.end(function(err){
	if(err){
		console.log(err.toString());
		return;
	}
	console.log('[connection end] succeed!');
});


