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
		return _page.open('https://www.bkfon.ru/live/', { charset: 'utf-8'});
	}).then(status => {
		//console.log(status);
		return _page.property('content')
	}).then(content => {
		let $ = cheerio.load(content);
		let sports=$('.trSegment').get();
		sports.forEach((sport)=>{
			//console.log(sport);
			var typeOfSport = sport.children[0].children[0].children[1].children[0].data;
			//console.log(typeOfSport);
			var line = sport.next;
			var win, draw, away;
			if(line.attribs.class.indexOf('trEvent')!=-1) {
				if(line.children[3].children[0]) 
					win = line.children[3].children[0].data; 
				else win = ' ';
				if(line.children[4].children[0]) 
					draw = line.children[4].children[0].data;
				else draw = ' ';
				if(line.children[5].children[0])
					away = line.children[5].children[0].data; 
				else away = ' ';
				let marja = 0;
				if(win != '-' && win != 0) marja += 100/parseFloat(win);
				if(draw != '-' && draw != 0) marja += 100/parseFloat(draw);
				if(away != '-' && away != 0) marja += 100/parseFloat(away);
				marja = marja -100;
				var typeOfSport = typeOfSport.split('. ')[0];
				console.log(typeOfSport + ': ' + win + ' - ' + draw + ' - ' + away + '. Marja = ' + marja);	
			}
		});
		
		_page.close();
		_ph.exit();
	}).catch(e => console.log(e));
}



getMarja();
//setInterval(function(){getMarja()}, 5000);
