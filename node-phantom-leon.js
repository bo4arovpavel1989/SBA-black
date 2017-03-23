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
		return _page.open('https://leon.ru/');
	}).then(status => {
		//console.log(status);
		return _page.property('content')
	}).then(content => {
		let $ = cheerio.load(content);
		let home = $('.liverow>.templOdds.home>.val').html();
		let draw=$('.liverow>.templOdds.draw>.val').html();
		let away=$('.liverow>.templOdds.away>.val').html();
		let marja=0;
		if(!isNaN(Number(home)) && (Number(home))!==0) marja += 100/Number(home);
		if(!isNaN(Number(draw)) && (Number(draw))!==0) marja += 100/Number(draw);
		if(!isNaN(Number(away)) && (Number(away))!==0) marja += 100/Number(away);
		marja = marja - 100;
		console.log('live event marja - ' + marja);
		home = $('.prematches.home>.val').html();
		draw=$('.prematches.draw>.val').html();
		away=$('.prematches.away>.val').html();
		marja = 0;
		if(!isNaN(Number(home)) && (Number(home))!==0) marja += 100/Number(home);
		if(!isNaN(Number(draw))&& (Number(draw))!==0) marja += 100/Number(draw);
		if(!isNaN(Number(away))&& (Number(away))!==0) marja += 100/Number(away);
		marja = marja - 100;
		console.log('prematch marja - ' + marja);
		_page.close();
		_ph.exit();
	}).catch(e => console.log(e));
}

setInterval(function(){getMarja()}, 5000);