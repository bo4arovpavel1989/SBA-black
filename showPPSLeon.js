var BkPPS = require('./lib/models/mongoModel.js').BkPPS;
var BkPPSCoordinates = require('./lib/models/mongoModel.js').BkPPSCoordinates;
var fs=require('fs-extra');
var CitiesStats = require('./lib/models/mongoModel.js').CitiesStats;
var cities=[];

CitiesStats.find({}, function(err, rep){
	rep.forEach(city=>{
		console.log(city.name);
		BkPPSCoordinates.find({'data.properties.description': city.name}, function(err, reps){
			let bkQuantity = reps.length;
			CitiesStats.update({name: city.name}, {$set: {bkQuantity: bkQuantity}}).exec();
		});
	});
});




/*
let bks=['olimp', 'leon', '888', 'winline', 'fonbet', 'baltbet', '1xstavka', 'ligastavok'];

bks.forEach(bk=>{
	BkPPSCoordinates.find({bk: bk}, function(err, reps){
		reps.forEach(rep=>{
			console.log(rep.data.properties.description)
			var city = rep.data.properties.description;
			if(cities.indexOf(city) == -1) {
				cities.push(city);
				let cityStat = new CitiesStats({name: city}).save();
			}
			
		});
	});
});

*/
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