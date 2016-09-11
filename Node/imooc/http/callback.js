function learn(something) {
	console.log(something);
}

//具名函数
function we(callback, something) {
	something += ' is cool';
	callback(something);
}

we(learn, 'nodejs');


//匿名函数
we(function(something){
	console.log(something);
}, 'Jade')