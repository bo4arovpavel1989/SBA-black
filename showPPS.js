var BkPPS = require('./lib/models/mongoModel.js').BkPPS;
var BkPPSCoordinates = require('./lib/models/mongoModel.js').BkPPSCoordinates;
var fs=require('fs-extra');
var CitiesStats = require('./lib/models/mongoModel.js').CitiesStats;
var CitiesInfo = require('./lib/models/mongoModel.js').CitiesInfo;
var cities=[];

BkPPS.find({}, function(err, reps){
	console.log(reps.length);
});
BkPPSCoordinates.find({}, function(err, rep){
	console.log(rep.length);
});

//writing CitiInfo in file
/*
CitiesInfo.find({}).sort({name: 1}).exec(function(err, reps){
	
	reps.forEach(rep=>{
		console.log(rep.bkRelation);
		let relation='';
		rep.bkRelation.forEach(character=>{
			if(character.bkQuantity!=0) relation += ' ' + character.bk + ' - ' + character.bkQuantity
		});
		fs.appendFile('ppsQuantityAndRelation.dat', rep.name + ' - ' + rep.population + 'чел. - ' + rep.bkQuantity + ' всего. '+ relation + '\r\n');
	});
});*/



/*
CitiesStats.find({}, function(err, rep){
	rep.forEach(city=>{
		console.log(city.name);
		BkPPSCoordinates.find({'data.properties.description': city.name}, function(err, reps){
			let bkQuantity = reps.length;
			CitiesStats.update({name: city.name}, {$set: {bkQuantity: bkQuantity}}).exec();
		});
	});
});*/



//acquiring cities list for CityStat collection from the list of PPS Coordinates
/*
let bks=['olimp', 'leon', '888', 'winline', 'fonbet', 'baltbet', '1xstavka', 'ligastavok'];

bks.forEach(bk=>{
	BkPPSCoordinates.find({bk: bk}, function(err, reps){
		reps.forEach(rep=>{
			console.log(rep.data.properties.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea)
			var city = rep.data.properties.description;
			if(cities.indexOf(city) == -1) {
				cities.push(city);
				let cityStat = new CitiesStats({name: city}).save();
			}
			
		});
	});
});*/

//writing pps coordinates in json in order to place it on th emap
/*
let bks=['atlantik-m', 'betring', 'betru', 'digitalbetting', 'favorit', 'firmastom', 'fortuna', 'investcompcentr', 'investgarant',
'johnygame', 'marathon', 'matchbet', 'melofon', 'panorama', 'rosbet', 'rosippodromi', 'rusteletot', 'sportbet', 'starbet', 
'williamhill', 'winline', 'olimp', 'leon', '888', 'fonbet', 'baltbet', '1xstavka', 'ligastavok'];

bks.forEach(bk=>{
	BkPPSCoordinates.find({bk: bk}, function(err, rep){
		rep=JSON.stringify(rep);
		fs.writeFile('ppscoordinates' + bk + '.json', rep);
	});
});*/



//BkPPSCoordinates.find({}).remove().exec();
//BkPPS.find({}).remove().exec();*/