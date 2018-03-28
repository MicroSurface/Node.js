var http = require('http');
var fs = require('fs');

var documentRoot = '/Users/Frank/Node';

var server = http.createServer(function(req, res){
	var url = req.url;
	var file = documentRoot + url;
	console.log(url);

	fs.readFile(file, function(err, data){
		if (err){
			res.writeHeader(404, {
				'content-type':'text/html;charset="utf-8"'
			});
			res.write('<h1>404错误</h1><p>页面不存在</p>');
			res.end();
		}else{
			res.writeHeader(200,{
				'content-type':'text/html;charset="utf-8"'
			});
			res.write(data);
			res.end();
		}
	});
}).listen(8888);

console.log("开启服务器");