var student = require('./student');
var teacher = require('./teacher');

function add(teacherName, students) {
	teacher.add(teacherName);

	students.forEach(function(item, index){
		student.add(item);
	});
}

exports.add = add;
//特别的对象类型，真实存在的
//module.exports = add;