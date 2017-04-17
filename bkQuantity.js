var CitiesStats = require('./lib/models/mongoModel.js').CitiesStats;
var fs=require('fs-extra');

CitiesStats.find({}).sort({name: 1}).exec(function(err, reps){
	reps.forEach(rep=>{
		fs.appendFile('ppsquantity.dat', rep.name + ' - ' + rep.bkQuantity + '\r\n');
	});
});