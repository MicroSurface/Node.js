var http = require('http');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((request, response) => {
	response.statusCode = 200;
	response.setHeader('Content-Type','text/plain');
	response.end('Hello World\n');
});

server.listen(port, hostname, ()=>{
	console.log('The server is http://${hostname}:${port}/');
})