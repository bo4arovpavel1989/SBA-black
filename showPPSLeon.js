var BkPPS = require('./lib/models/mongoModel.js').BkPPS;

BkPPS.find({bk:'leon'}, function(err, rep){
	console.log('leon');
	console.log(rep.length);
});
BkPPS.find({bk:'888'}, function(err, rep){
	console.log('888');
	console.log(rep.length);
});
BkPPS.find({bk:'fonbet'}, function(err, rep){
	console.log('fonbet');
	console.log(rep.length);
});
BkPPS.find({bk:'olimp'}, function(err, rep){
	console.log('olimp');
	console.log(rep.length);
});
BkPPS.find({bk:'baltbet'}, function(err, rep){
	console.log('baltbet');
	console.log(rep.length);
});
BkPPS.find({bk:'winline'}, function(err, rep){
	console.log('winline');
	console.log(rep.length);
});
BkPPS.find({bk:'ligastavok'}, function(err, rep){
	console.log('ligastavok');
	console.log(rep.length);
});
BkPPS.find({bk:'1xstavka'}, function(err, rep){
	console.log('1xstavka');
	console.log(rep.length);
});



//BkPPS.find({}).remove().exec();