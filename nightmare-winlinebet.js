var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: false });
var cheerio = require('cheerio');

nightmare
  .goto('https://winlinebet.ru/?t=now')
  .wait(1000)
    .evaluate(function() {
        window.document.body.scrollTop = document.body.scrollHeight;
    })
    .wait(1000)
    .evaluate(function() {
        window.document.body.scrollTop = document.body.scrollHeight;
    })
    .wait(1000)
    .evaluate(function() {
        window.document.body.scrollTop = document.body.scrollHeight;
    })
	.wait(1000)
  .evaluate(function () {
	this.scrollTo(100000, 0);
	return document.body.innerHTML;
  })
  .end()
  .then(function (body) {
     var $ = cheerio.load(body);
	//console.log($.html());
	let sports=$('div.table.ng-scope>.ng-scope>.statistic').get();
	console.log(sports.length);
	sports.forEach((sport)=>{
		try{
		//console.log(sport);
		let sportType=sport.children[0].attribs['href'];
		let win, draw, away;
		sportType = sportType.split('/')[3]; 
		let coeffs=sport.next.children[0].children[2];
		if(coeffs.children==undefined) coeffs=sport.next.children[0].children[3];
		if(coeffs.children[0].children[0]!== undefined) {win=coeffs.children[0].children[0].data;} else {win=' - ';}
		if(coeffs.children[1].children[0] !== undefined) {draw=coeffs.children[1].children[0].data;} else {draw=' - ';}
		if(coeffs.children[2].children[0] !== undefined) {away=coeffs.children[2].children[0].data;} else {away=' - '}
		let marja = 0;
				if(win != ' - ' && win != 0) marja += 100/parseFloat(win);
				if(draw != ' - ' && draw != 0) marja += 100/parseFloat(draw);
				if(away != ' - ' && away != 0) marja += 100/parseFloat(away);
				marja = marja -100;
				console.log(sportType + ': ' + win + ' - ' + draw + ' - ' + away + '. Marja = ' + marja);		
		} catch(e){}
	});
	})
  .catch(function (error) {
    console.error('Search failed:', error);
  });