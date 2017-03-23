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
		return _page.open('https://leon.ru/', { charset: 'utf-8'});
	}).then(status => {
		//console.log(status);
		return _page.property('content')
	}).then(content => {
		let $ = cheerio.load(content);
		
		let tdLive=$('.liverow>.templOdds.home>.val').get();
		tdLive.forEach((tdElem)=>{
			let home = tdElem.children[0].data;
			let draw = tdElem.parent.next.next.next.next.children[1].children[0].data;
			let away = tdElem.parent.next.next.next.next.next.next.next.next.children[1].children[0].data;	
			let marja=0;
			if(!isNaN(Number(home)) && (Number(home))!==0) marja += 100/Number(home);
			if(!isNaN(Number(draw)) && (Number(draw))!==0) marja += 100/Number(draw);
			if(!isNaN(Number(away)) && (Number(away))!==0) marja += 100/Number(away);
			marja = marja - 100;
			console.log('liveevent coeffs: ' + home + '-' + draw + '-' + away + '. Marja: ' + marja + '\n');	
		});
		
		let tdPrematch=$('.prematches.home>.val').get();
		tdPrematch.forEach((tdElem)=>{
			let home = tdElem.children[0].data;
			let draw = tdElem.parent.next.next.children[1].children[0].data;;
			let away = tdElem.parent.next.next.next.next.children[1].children[0].data;	
			
			let marja=0;
			if(!isNaN(Number(home)) && (Number(home))!==0) marja += 100/Number(home);
			if(!isNaN(Number(draw)) && (Number(draw))!==0) marja += 100/Number(draw);
			if(!isNaN(Number(away)) && (Number(away))!==0) marja += 100/Number(away);
			marja = marja - 100;
			console.log('prematch coeffs: ' + home + '-' + draw + '-' + away + '. Marja - ' + marja + '\n');
		});
		
		_page.close();
		_ph.exit();
	}).catch(e => console.log(e));
}
getMarja();
setInterval(function(){getMarja()}, 5000);