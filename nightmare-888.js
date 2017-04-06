var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: false });
var cheerio = require('cheerio');
var counter = 1;

grabSite(counter);

function grabSite(i){
nightmare
  .goto('https://mobile.888.ru/#/sport?sport=' + i + '&type=1&region=-1&qrange=-1&video=1')
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .wait(5000)
  .evaluate(function () {
	return document.body.innerHTML;
  })
  .then(function (body) {
     var $ = cheerio.load(body);
	 //console.log($.html());
	 var sport = $('span.heading-title>a>span.ng-binding').get();
	 var sportType = sport[0].children[0].data;
	 let lines=$('.match-markets').get();
	 lines.forEach((line)=>{
		 let win, draw, away;
		 let marketsQuantity=line.children.length;
		 if(marketsQuantity == 3) {
			 win = line.children[0].children[1].children[0].data;
			 draw = line.children[1].children[1].children[0].data;
			 away = line.children[2].children[1].children[0].data;
		 } else if(marketsQuantity == 2) {
			 win = line.children[0].children[1].children[0].data;
			 draw = '-'
			 away = line.children[1].children[1].children[0].data;
		 }
		 	let marja = 0;
				if(win != '-' && win != 0) marja += 100/parseFloat(win);
				if(draw != '-' && draw != 0) marja += 100/parseFloat(draw);
				if(away != '-' && away != 0) marja += 100/parseFloat(away);
				marja = marja -100;
				console.log(sportType + ': ' + win + ' - ' + draw + ' - ' + away + '. Marja = ' + marja);
	 });
	i = i + 1;
	if(i<=10) grabSite(i);
  })
  .catch(function (error) {
	console.log('no event for sport №' + i);
    i = i + 1;
	if(i<=10) grabSite(i);
  });
}



  
