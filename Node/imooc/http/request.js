//灌水

var http = require('http');
var queryString = require('queryString');

var postData = queryString.stringify({
	'content': 'test',
	'cid': 348
});

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/document',
	method: 'POST',
	headers: {
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'imooc_uuid=abc7c3f7-2629-48ba-b337-4f53c3146fd2; imooc_isnew_ct=1472986089; PHPSESSID=dcp9t688o7rvtv3seo4e6j7qp7; loginstate=1; apsid=Y2NmIxMTI4NGM1OTg3MDc2NDRkMDc3MzU4ODIzYTEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzExNTExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxODYxNjY4MDcxOQAAAAAAAAAAAAAAAAAAAAAAAAAAAGY5YzY2YjBjNGM5OWM2ZTQxZTgzZWQxM2I2Mjc5YjY3x97UV8fe1Fc%3DZD; last_login_username=18616680719; imooc_isnew=2; cvde=57d4c3cee117c-16; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1472986153,1472986221,1473516172,1473561552; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1473568475',
		'Host': 'www.imooc.com',
		'Origin': 'http://www.imooc.com',
		'Referer': 'http://www.imooc.com/comment/348',
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest'
	}
};

var req = http.request(options, function (res) {
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data', function (chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});

	res.on('end', function () {
		console.log('comment success');
	});
});

req.on('error', function (e) {
	console.log('Error: ' + e.message);
});

req.write(postData);

req.end();








