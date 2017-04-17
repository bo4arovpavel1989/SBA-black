var CitiesStats = require('./lib/models/mongoModel.js').CitiesStats;
var BkPPSCoordinates = require('./lib/models/mongoModel.js').BkPPSCoordinates;
var fs=require('fs-extra');
/*
CitiesStats.find({}).sort({name: 1}).exec(function(err, reps){
	console.log(reps);
	//reps.forEach(rep=>{
		//fs.appendFile('ppsquantity.dat', rep.name + ' - ' + rep.bkQuantity + '\r\n');
	//});
});*/

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

});