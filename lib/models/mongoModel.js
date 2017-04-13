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

module.exports.BkSitesStats = mongoose.model('bksitesstats', BkSitesStats);
module.exports.BkPPSCoordinates = mongoose.model('bkppscoords', BkPPSCoordinates);
module.exports.BkPPS = mongoose.model('bkpps', BkPPS);