var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: false });
var cheerio = require('cheerio');



nightmare
  .goto('https://www.fonbet.ru/#/live')
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .wait(5000)
  .evaluate(function () {
	return document.body.innerHTML;
  })
  .then(function (body) {
	  console.log('start parsing');
     var $ = cheerio.load(body);
		let lines=$('.table__row').get();
		console.log(lines);
		lines.forEach((line)=>{
			try {
			if(line.attribs.class='table__row'){
				let sport = line.parent.children[0].children[0].children[0].children[2].children[0].data;
				sport=sport.split('.')[0];
				let win, draw, away, marja;
				win=line.children[2].children[0].data;
				if(win==undefined) win ='-';
				draw=line.children[3].children[0].data;
				if(draw==undefined) draw ='-';
				let isFora =line.children[4].attribs.class;
				if (isFora == 'table__col _type_fora') {
					away = draw;
					draw='-';
				} else {away=line.children[4].children[0].data;}
				if(away==undefined) away ='-';
				marja = 0;
				if(win != '-' && win != 0) marja += 100/parseFloat(win);
				if(draw != '-' && draw != 0) marja += 100/parseFloat(draw);
				if(away != '-' && away != 0) marja += 100/parseFloat(away);
				marja = marja -100;
				console.log(sport + ': ' + win + ' - ' + draw + ' - ' + away + '. Marja = ' + marja);
			}
			}catch(e){}
			
		});
	
  })
  .catch(function (error) {
	console.log(error);
  });




