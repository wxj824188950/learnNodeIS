var fs = require('fs');

var readStream = fs.createReadStream('stream_copy_imooc.png');
var writeStream = fs.createWriteStream('imooc.png');

readStream.on('data', function (chunk) {
	if(writeStream.write(chunk) === false) {
		console.log('still cached');
		readStream.pause();
	}
});

readStream.on('end', function () {
	writeStream.end();
});

writeStream.on('drain', function () {
	console.log('data drains');
	readStream.resume();
});