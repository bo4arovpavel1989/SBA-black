var request=require('request');
var cheerio = require('cheerio');
var CitiesInfo = require('./lib/models/mongoModel.js').CitiesInfo;
var fs=require('fs-extra');

String.prototype.replaceAll = function(search, replace){
  return this.split(search).join(replace);
}

	
	var headers = {
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		//'Accept-Encoding': 'gzip, deflate, sdch, br',
		//'Cookie': cookie,
		'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4,sr;q=0.2',
		'Upgrade-Insecure-Requests': '1'
	};

	var options = {
			url:'https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D1%85_%D0%BF%D1%83%D0%BD%D0%BA%D1%82%D0%BE%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%D1%81_%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC_%D0%B1%D0%BE%D0%BB%D0%B5%D0%B5_10_%D1%82%D1%8B%D1%81%D1%8F%D1%87_%D0%B6%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9#cite_note-2',
			headers:headers
	}; 
		
	request(options, (err, res, body)=>{
	  if(err){console.log(err);}
	  else{ 
		let $ = cheerio.load(body);
		let lines = $('tr').get();
		lines.forEach(line=>{
			//console.log(line);
			try {
			let city=line.children[3].children[0].children[0].data;
			//console.log(city.children[0].children[0].data);
			if(city==undefined) city = line.children[3].children[0].children[0].children[0].data;
			let population=line.children[15].children[0].data;
			population = population.replaceAll(/\s/g, '');
			//population = Number(population);
			console.log(population);
			fs.appendFile('citypopulation.dat', city + ' - ' + population + '\r\n');
			if(population !== NaN) {var citiesInfo = new CitiesInfo({name: city, population: population}).save();}
			
			} catch(e) {console.log(e)}
			
	  });
	  }
	});

*/
