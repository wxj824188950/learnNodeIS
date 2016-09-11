var http = require('http');

http.creatServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello NodeJS');
		res.end();
	}).listen(2015);