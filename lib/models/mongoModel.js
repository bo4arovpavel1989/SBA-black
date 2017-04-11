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

module.exports.BkSitesStats = mongoose.model('bksitesstats', BkSitesStats);
module.exports.BkPPS = mongoose.model('bkpps', BkPPS);