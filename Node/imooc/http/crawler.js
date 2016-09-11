var http = require('http');
var cheerio = require('cheerio');

var url = 'http://www.imooc.com/learn/348';

//npm install cheerio
function fileChapters (html) {
	var $ = cheerio.load(html);
	var chapters = $('.chapter');

	var courseData = [];
	
	chapters.each(function (item) {
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text().split('\r\n')[2].trim();
		//console.log(chapterTitle);
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		};

		videos.each(function (item) {
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text().split('\r\n')[2].trim();
			//console.log(videoTitle);
			var id = video.attr('href').split('/video/')[1];
			//console.log(id);

			chapterData.videos.push({
				title: videoTitle,
				id: id
			});

			//console.log(chapterData.videos);
		});

		courseData.push(chapterData);
	});
	//console.log(courseData)
	return courseData;
}

function printCourseInfo(courseData) {
	courseData.forEach(function (item) {
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle + '\n');
		//console.log(item);
		item.videos.forEach(function (video) {
			console.log('  [' + video.id + ']  ' + video.title + '\n');
		});
	})
}

http.get(url, function (res) {
	var html = '';

	res.on('data', function (data) {
		html += data;
	});

	res.on('end', function () {
		var courseData = fileChapters(html);
		printCourseInfo(courseData);
	})
}).on('error', function () {
	console.log('get classes data error!');
});