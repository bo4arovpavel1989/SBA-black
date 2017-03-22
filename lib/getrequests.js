var BkSitesStats = require('./models/mongoModel.js').BkSitesStats;
module.exports.showInfo = function(req, res){
	var today = new Date();
	var yesterday = today - 1000 * 60 * 60 * 24;
	var data = {
		site: [],
		date: today
	};
	BkSitesStats.find({date: {$gt: yesterday}}, function(err, rep){
		if (rep) data.site = rep.reverse();
		console.log(rep);
		res.render('pages/bksitesinfo', data);
	})
};

