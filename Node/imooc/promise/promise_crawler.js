var http = require('http');
var Promise = require('bluebird');
//var Promise = require('Promise');
var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';
var videoIds = [348, 259, 197, 134, 75];

//npm install cheerio
function fileChapters (html) {
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	var title = $('.course-infos .path span').text().trim();
	var number = $('.course-infos .statics .clearfix span').text().trim();
	console.log(number);

	var courseData = {
		title: title,
		number: number,
		courseVideos: []
	};
	
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

		courseData.courseVideos.push(chapterData);
	});
	//console.log(courseData)
	return courseData;
}

function printCourseInfo(coursesData) {
	coursesData.forEach(function (courseData) {
		console.log(courseData.number + ' peoples learn ' + courseData.title + '\n');
		console.log('### ' + courseData.title);
		courseData.courseVideos.forEach(function (item) {
			var chapterTitle = item.chapterTitle;
			console.log(chapterTitle + '\n');
			//console.log(item);
			item.videos.forEach(function (video) {
				console.log('  [' + video.id + ']  ' + video.title + '\n');
			});
		})
	})	
}

function getPageAsync (url) {
	return new Promise(function (resolve, reject) {
		console.log('going crawler: ' + url);
		http.get(url, function (res) {
			var html = '';

			res.on('data', function (data) {
				html += data;
			});

			res.on('end', function () {
				resolve(html);
				//var courseData = fileChapters(html);
				//printCourseInfo(courseData);
			})
		}).on('error', function (e) {
			reject(e);
			console.log('get classes data error!');
		});
	})
}

var fetchCourseArray = [];

videoIds.forEach(function (id) {
	fetchCourseArray.push(getPageAsync(baseUrl + id));
})

Promise
	.all(fetchCourseArray)
	.then(function (pages) {
		var coursesData = [];
		pages.forEach(function (html) {
			var courses = fileChapters(html);
			coursesData.push(courses);
		});

		coursesData.sort(function (a, b) {
			return a.number < b.number
		});

		printCourseInfo(coursesData);
	})




















