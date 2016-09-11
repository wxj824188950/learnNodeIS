var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(11);

// on === addEventListener
// limit 10 

function water (who) {
	console.log('For ' + who + ' water');
}

life.on('comfort', water);

life.on('comfort', function (who) {
	console.log('For ' + who + ' eat');
});

life.on('comfort', function (who) {
	console.log('For ' + who + ' wash');
});

life.on('spoil', function (who) {
	console.log('For ' + who + ' clothes');
});

// 具名函数才可被移除
life.removeListener('comfort', water);

var hasComfortListener = life.emit('comfort', 'boy');
var hasSpoilListener = life.emit('spoil', 'girl');
var hasLoverListener = life.emit('love', 'boy and girl');

console.log(hasComfortListener);
console.log(hasSpoilListener);
console.log(hasLoverListener);

// listeners length
console.log(life.listeners('comfort').length);
console.log(EventEmitter.listenerCount(life, 'comfort'));

// remove all
life.removeAllListeners('comfort');











