var CitiesStats = require('./lib/models/mongoModel.js').CitiesStats;     //here is database of cities based on the data of FNS and parsed via yandex api
var BkPPSCoordinates = require('./lib/models/mongoModel.js').BkPPSCoordinates;
var fs=require('fs-extra');
var CitiesInfo = require('./lib/models/mongoModel.js').CitiesInfo; //here is the database of cities including populating taken from wiki. pps data attach to it
/*
CitiesStats.find({}).sort({name: 1}).exec(function(err, reps){
	console.log(reps);
	reps.forEach(rep=>{
		fs.appendFile('ppsquantity_old.dat', rep.name + ' - ' + rep.bkQuantity + '\r\n');
	});
});*/



/*
let bks=['olimp', 'leon', '888', 'winline', 'fonbet', 'baltbet', '1xstavka', 'ligastavok'];

bks.forEach(bk=>{
	CitiesStats.find({}, function(err, rep){
	rep.forEach(city=>{
		console.log(city.name);
		BkPPSCoordinates.find({bk: bk, 'data.properties.description': city.name}, function(err, reps){
			let bkQuantity = reps.length;
			CitiesStats.update({name: city.name}, {$push: {bkRelation: {bk: bk, bkQuantity: bkQuantity}}}).exec();
		});
	});
});

});*/


/*
	CitiesInfo.find({}).sort({name:1}).exec(function(err, rep){
	rep.forEach(city=>{
		let reg = new RegExp(city.name, "i")
		BkPPSCoordinates.find({'data.properties.description': {$regex: reg}}, function(err, reps){
			let bkQuantity =reps.length;
			CitiesInfo.update({name: city.name}, {$set: {bkQuantity: bkQuantity}}).exec();
		});
	});		
	});
*/

let bks=['olimp', 'leon', '888', 'winline', 'fonbet', 'baltbet', '1xstavka', 'ligastavok'];

bks.forEach(bk=>{
	CitiesInfo.find({}, function(err, rep){
	rep.forEach(city=>{
		console.log(city.name);
		let reg = new RegExp(city.name, "i")
		BkPPSCoordinates.find({bk: bk, 'data.properties.description': {$regex: reg}}, function(err, reps){
			let bkQuantity = reps.length;
			CitiesInfo.update({name: city.name}, {$push: {bkRelation: {bk: bk, bkQuantity: bkQuantity}}}).exec();
		});
	});
});

});