var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: false });
var cheerio = require('cheerio');



nightmare
  .goto('https://1xstavka.ru/')
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .evaluate(function () {
	return document.body.innerHTML;
  })
  .then(function (body) {
     var $ = cheerio.load(body);
	 //console.log($.html());
	var lines=$('.c-bets').get();
	lines.forEach((line)=>{
		try {
		let betType, sport, sportType, win, draw, away;
		//console.log(line);
		betType = line.parent.parent.parent.parent.children[1].children[1].attribs['data-top10'];
		sport = line.prev.prev.children[5].attribs.href;
		sportType=sport.split('/')[1];
		console.log(sportType);
		win = line.children[1].children[0].attribs['data-coef'];if(win ==undefined) win='-';
		draw = line.children[1].children[1].attribs['data-coef'];if(draw ==undefined) draw='-';
		away = line.children[1].children[2].attribs['data-coef'];if(away ==undefined) away='-';
		let marja = 0;
				if(win != '-' && win != 0) marja += 100/parseFloat(win);
				if(draw != '-' && draw != 0) marja += 100/parseFloat(draw);
				if(away != '-' && away != 0) marja += 100/parseFloat(away);
				marja = marja -100;
				console.log(betType + ': ' + sportType + ': ' + win + ' - ' + draw + ' - ' + away + '. Marja = ' + marja);
		} catch(e) {}
	});
  })
  .catch(function (error) {
	console.log(error);
  });




  
