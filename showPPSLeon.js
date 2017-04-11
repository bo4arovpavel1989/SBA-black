var BkPPS = require('./lib/models/mongoModel.js').BkPPS;

BkPPS.find({}, function(err, rep){
	console.log(rep);
});

BkPPS.find({}).remove().exec();