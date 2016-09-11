var http = require('http');
var fs = require('fs');
var request = require('request');

http
	.createServer(function (req, res) {
		// fs.readFile('imooc.png', function (err, data) {
		// 	if (err) {
		// 		res.edn('file not exist!')
		// 	}else{
		// 		res.writeHead(200, {'Content-Type': 'text/html'});
		// 		res.end('data');
		// 	}
		// });


		//fs.createReadStream('imooc.png').pipe(res);


		request('http://static.mukewang.com/static/img/index/logo.png').pipe(res);
	})
	.listen(8090);
