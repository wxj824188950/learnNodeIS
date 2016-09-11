//在浏览器下执行，在window全局变量对象的下面
//在nodejs的环境下执行，在global全局变量对象的下面
var globalVariable = 'This is global variable';

function golbalFunction () {
	var localVariable = 'This is local variable';

	console.log(globalVariable);
	console.log(localVariable);

	globalVariable = 'This is changed variable';

	console.log(globalVariable);

	function localFunction () {
		var innerLocalVariable = 'This is inner local variable';

		console.log(globalVariable);
		console.log(localVariable);
		console.log(innerLocalVariable);
	}

	localFunction();
}

golbalFunction();