var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: false });
var cheerio = require('cheerio');



nightmare
  .goto('https://betcity.ru/')
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .wait(5000)
  .evaluate(function () {
	return document.body.innerHTML;
  })
  .then(function (body) {
	  console.log('start parsing');
     var $ = cheerio.load(body);
	let lines=$('.live-list__championship-event').get();
	lines.forEach(line=>{
		let sport, inw, draw, away, marja;
		try {
		//console.log(line);
		sport=line.parent.children[0].children[2].children[0].children[0].data;
		sport=sport.split('. ')[0];
		//console.log(sport);
		win = line.children[5].children[0].children[0].attribs['data-k'];
		if(line.children[6].children[0].children[0]==undefined) draw='-';
		else draw = line.children[6].children[0].children[0].attribs['data-k'];
		away = line.children[7].children[0].children[0].attribs['data-k'];
		marja = 0;
				if(win != '-' && win != 0) marja += 100/parseFloat(win);
				if(draw != '-' && draw != 0) marja += 100/parseFloat(draw);
				if(away != '-' && away != 0) marja += 100/parseFloat(away);
				marja = marja -100;
				console.log(sport + ': ' + win + ' - ' + draw + ' - ' + away + '. Marja = ' + marja);		
		} catch(e){}
	});
	
  })
  .catch(function (error) {
	console.log(error);
  });




