var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sba');
mongoose.Promise = global.Promise;


var BkSitesStats = new mongoose.Schema({
	date: {type: Date, default: Date.now()},
	stats: {type: Object}
});

var BkPPS=new mongoose.Schema({
	bk:{type: String},
	lat: {type: Number},
	lon: {type: Number},
	address: {type: String}
});


BkPPSCoordinates=new mongoose.Schema({
	bk:{type: String},
	data:{type: Object}
});

CitiesStats=new mongoose.Schema({ //thats collection of cities from parsed FNS data
	name: {type: String},
	bkQuantity: {type: Number},
	bkRelation: {type: Array}
});

CitiesInfo=new mongoose.Schema({ //thats collection of cities from wiki
	name: {type: String},
	population: {type: Number},
	bkPopularity: {type: String, default: 84},
	bkQuantity: {type: Number},
	bkRelation: {type: Array},
	coordinates: {type: Array},
	salary: {type: String}
});

module.exports.CitiesInfo = mongoose.model('citiesinfo', CitiesInfo);
module.exports.CitiesStats = mongoose.model('citiesstats', CitiesStats);
module.exports.BkSitesStats = mongoose.model('bksitesstats', BkSitesStats);
module.exports.BkPPSCoordinates = mongoose.model('bkppscoords', BkPPSCoordinates);
module.exports.BkPPS = mongoose.model('bkpps', BkPPS);