var stream = require('stream');
var util = require('util');

//可读流
function ReadStream () {
	stream.Readable.call(this);
}
util.inherits(ReadStream, stream.Readable);

ReadStream.prototype._read = function () { //私有方法
	this.push('I ');
	this.push('Love ');
	this.push('Imooc\n');
	this.push(null);
};

//可写流
function WriteStream () {
	stream.Writable.call(this);
	this._cached = new Buffer('');
}
util.inherits(WriteStream, stream.Writable);

WriteStream.prototype._write = function (chunk, encode, cb) {
	console.log(chunk.toString());
	cb();
}

//转换流
function TransformStream () {
	stream.Transform.call(this);
}
util.inherits(TransformStream, stream.Transform);

TransformStream.prototype._transform = function (chunk, encode, cb) {
	this.push(chunk);
	cb();
}

TransformStream.prototype._flush = function (cb) {
	this.push('oh yeah');
	cb();
}

var rs = new ReadStream();
var ws = new WriteStream();
var ts = new TransformStream();

rs.pipe(ts).pipe(ws);

















