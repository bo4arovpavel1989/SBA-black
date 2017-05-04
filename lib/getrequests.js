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


module.exports.getPPSMapPage=function(req, res){
	res.sendFile('yamap.html', {'root':__dirname + '/../views/static/'});
};
module.exports.getPPSMapPage=function(req, res){
	res.sendFile('yaHeatMap.html', {'root':__dirname + '/../views/static/'});
};

module.exports.getPPS=function(req, res){
	let bkpps=req.params.id;
	res.sendFile(__dirname + '/bkpps/' + bkpps);
};
