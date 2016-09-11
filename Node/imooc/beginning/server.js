//加载http模块，负责创建web服务器，及处理http相关的任务等
var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

//var server = http.createServer()
//server.listen()

console.log('Server running at http://127.0.0.1:1337/');