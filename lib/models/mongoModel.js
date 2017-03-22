var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sba');
mongoose.Promise = global.Promise;


var BkSitesStats = new mongoose.Schema({
	date: {type: Date, default: Date.now()},
	stats: {type: Object}
});

module.exports.BkSitesStats = mongoose.model('bksitesstats', BkSitesStats);