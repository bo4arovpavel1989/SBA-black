var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: false });
var cheerio = require('cheerio');
var linksToClick=[];
var i = 0;


nightmare
  .goto('https://baltbet.ru/')
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .evaluate(function () {
	return document.body.innerHTML;
  })
  .then(function (body) {
     var $ = cheerio.load(body);
	 //console.log($.html());
	 let links = $('.live>ul>li>a').get();
	 links.forEach((link)=>{
		 try {
		 console.log(link.attribs.id);
		 linksToClick.push(link.attribs.id);
		 } catch(e){}
	 });
	parseBaltBet(linksToClick[0]);	
  })
  .catch(function (error) {
	console.log(error);
  });

function parseBaltBet(link){
   nightmare
  .goto('https://baltbet.ru/')
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .refresh()
  .wait(2000)
  .click('a#' + link)
  .wait(2000)
  .evaluate(function () {
	return document.body.innerHTML;
  })
  .then(function (body) {
    var $ = cheerio.load(body);
	let line=$('table.lv').get();
	line=line[0];
		try{
		let win, draw, away;
		//console.log(line);
		let sport = line.children[0].children[0].children[0].children[0].data;
		sport=sport.split('. ')[1];
		//console.log(sport);
		win=line.children[1].children[0].children[2].children[0].children[0].data;
		let isDraw=line.children[0].children[0].children[2].children[0].data;
		if (isDraw=='X') draw = line.children[1].children[0].children[3].children[0].children[0].data;
		else {draw='-'; away=line.children[1].children[0].children[3].children[0].children[0].data;}
		if(draw !='-') away=line.children[1].children[0].children[4].children[0].children[0].data;
		win=win.replace(',', '.');
		draw=draw.replace(',', '.');
		away=away.replace(',', '.');
		let marja = 0;
				if(win != '-' && win != 0) marja += 100/parseFloat(win);
				if(draw != '-' && draw != 0) marja += 100/parseFloat(draw);
				if(away != '-' && away != 0) marja += 100/parseFloat(away);
				marja = marja -100;
				console.log(sport + ': ' + win + ' - ' + draw + ' - ' + away + '. Marja = ' + marja);	
		}catch(e){}
		i++;
		console.log(i)
		if(i<linksToClick.length) parseBaltBet(linksToClick[i])
	
  })
  .catch(function (error) {
	i++;
	if(i<linksToClick.length) parseBaltBet(linksToClick[i])
  });
}


  
