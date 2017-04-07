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
		 parseBaltBet(linksToClick);
		 } catch(e){}
	 })
	
  })
  .catch(function (error) {
	console.log(error);
  });

function parseBaltBet(linkArray){
   nightmare
  .goto('https://baltbet.ru/')
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .click('a#' + linkArray[i])
  .wait(2000)
  .evaluate(function () {
	return document.body.innerHTML;
  })
  .then(function (body) {
    var $ = cheerio.load(body);
	let lines=$('table.liv').get();
	lines.forEach((line)=>{
		console.log(line);
	})
		i++;
		if(i<linkArray.length) parseBaltBet(linkArray)
	
  })
  .catch(function (error) {
	console.log(error);
	i++;
	if(i<linkArray.length) parseBaltBet(linkArray)
  });
}


  
