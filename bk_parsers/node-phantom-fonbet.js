console.log('running app');
var cheerio = require('cheerio');
var phantom = require("phantom");
var _ph, _page, _outObj;

function getMarja(){
	phantom.create().then(ph => {
		_ph = ph;
		return _ph.createPage();
	}).then(page => {
		_page = page;
		return _page.open('https://www.fonbet.ru/#/live', { charset: 'utf-8'});
	}).then(status => {
		//console.log(status);
		return _page.property('content')
	}).then(content => {
		let $ = cheerio.load(content);
		console.log($.html())
		let lines=$('tr.table__row').get();
		lines.forEach((line)=>{
			console.log(line);
			
		});
		
		_page.close();
		_ph.exit();
	}).catch(e => console.log(e));
}



getMarja();
//setInterval(function(){getMarja()}, 5000);
