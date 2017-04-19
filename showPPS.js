var BkPPS = require('./lib/models/mongoModel.js').BkPPS;
var BkPPSCoordinates = require('./lib/models/mongoModel.js').BkPPSCoordinates;
var fs=require('fs-extra');
var CitiesStats = require('./lib/models/mongoModel.js').CitiesStats;
var CitiesInfo = require('./lib/models/mongoModel.js').CitiesInfo;
var cities=[];

BkPPS.find({}, function(err, reps){
	reps.forEach(rep=>{
		fs.appendFile('BKPPS.dat', rep +  '\r\n');
	});
});
BkPPSCoordinates.find({}, function(err, rep){
	console.log(rep.length);
});


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

/*commented in prupose not to write extra data (second portion of pps)
let bks=['atlantik-mpps', 'betringpps', 'betrupps', 'digitalbettingpps', 'favoritpps', 'firmastompps', 'fortunapps', 'investcompcentrpps', 'investgarantpps',
'johnygamepps', 'marathonpps', 'matchbetpps', 'melofonpps', 'panoramapps', 'rosbetpps', 'rosippodromipps', 'rusteletotpps', 'sportbetpps', 'starbetpps', 
'williamhillpps', 'winlinepps'];

bks.forEach(bk=>{
	BkPPSCoordinates.find({bk: bk}, function(err, rep){
		rep=JSON.stringify(rep);
		fs.writeFile('ppscoordinates' + bk + '.json', rep);
	});
});*/






/* commented in prupose not to write extra data
let bks=['olimp', 'leon', '888', 'winline', 'fonbet', 'baltbet', '1xstavka', 'ligastavok'];

bks.forEach(bk=>{
	BkPPSCoordinates.find({bk: bk}, function(err, rep){
		rep=JSON.stringify(rep);
		fs.writeFile('bkpps/ppscoordinates' + bk + '.json', rep);
	});
});*/






/*

BkPPS.find({bk:'leon'}, function(err, rep){
	console.log('leon');
	console.log(rep.length);
});
BkPPS.find({bk:'888'}, function(err, rep){
	console.log('888');
	console.log(rep.length);
});
BkPPS.find({bk:'fonbet'}, function(err, rep){
	console.log('fonbet');
	console.log(rep.length);
});
BkPPS.find({bk:'olimp'}, function(err, rep){
	console.log('olimp');
	console.log(rep.length);
});
BkPPS.find({bk:'baltbet'}, function(err, rep){
	console.log('baltbet');
	console.log(rep.length);
});
BkPPS.find({bk:'winline'}, function(err, rep){
	console.log('winline');
	console.log(rep.length);
});
BkPPS.find({bk:'ligastavok'}, function(err, rep){
	console.log('ligastavok');
	console.log(rep.length);
});
BkPPS.find({bk:'1xstavka'}, function(err, rep){
	console.log('1xstavka');
	console.log(rep.length);
});
*/

//BkPPSCoordinates.find({}).remove().exec();
//BkPPS.find({}).remove().exec();*/