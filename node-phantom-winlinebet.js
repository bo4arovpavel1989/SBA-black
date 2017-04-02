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
		return _page.open('https://www.ligastavok.ru/Live', { charset: 'utf-8'});
	}).then(status => {
		//console.log(status);
		return _page.property('content')
	}).then(content => {
		let $ = cheerio.load(content);
		let sports=$('.statistic').get();
		console.log(sports.length);
		sports.forEach((sport)=>{
			console.log(1);
			try{
				//console.log(sport);
				let sportType=sport.children[0].attribs['href'];
				console.log(sportType);
			} catch(e){console.log(e);}
		});
		
		_page.close();
		_ph.exit();
	}).catch(e => console.log(e));
}



getMarja();
//setInterval(function(){getMarja()}, 5000);
