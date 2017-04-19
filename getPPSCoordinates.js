var https = require('https');
let secret = 'AIzaSyBkhoB5RgaYw19-QWiFDoUc2AtTO-Sc2P0';
var BkPPS = require('./lib/models/mongoModel.js').BkPPS;
var BkPPSCoordinates = require('./lib/models/mongoModel.js').BkPPSCoordinates;

var MultiGeocoder = require('multi-geocoder'),
geocoder = new MultiGeocoder({ coordorder: 'latlong', lang: 'ru-RU' });
   provider = geocoder.getProvider();

// Переопределяем метод getText(), извлекающий из переданного массива адреса,
// которые требуется геокодировать.
provider.getText = function (point) {
    let text =point.address;
    return text;
};

var bks=['atlantik-mpps', 'betringpps', 'betrupps', 'digitalbettingpps', 'favoritpps', 'firmastompps', 'fortunapps', 'investcompcentrpps', 'investgarantpps',
'johnygamepps', 'marathonpps', 'matchbetpps', 'melofonpps', 'panoramapps', 'rosbetpps', 'rosippodromipps', 'rusteletotpps', 'sportbetpps', 'starbetpps', 
'williamhillpps', 'winlinepps'];

bks.forEach(bk=>{
	BkPPS.find({bk:bk}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working');
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:bk, data: point}).save();
				console.log(i);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
	
	});
});



/* commented everything in purpose to avoid accident run and writing extra data in database
BkPPS.find({bk:'leon'}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working');
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:'leon', data: point}).save();
				console.log(i);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
	
});

BkPPS.find({bk:'888'}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working');
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:'888', data: point}).save();
				console.log(i);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
	
});

BkPPS.find({bk:'olimp'}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working');
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:'olimp', data: point}).save();
				console.log(i);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
	
});

BkPPS.find({bk:'fonbet'}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working');
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:'fonbet', data: point}).save();
				console.log(i);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
	
});

BkPPS.find({bk:'winline'}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working');
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:'winline', data: point}).save();
				console.log(i);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
	
});

BkPPS.find({bk:'1xstavka'}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working');
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:'1xstavka', data: point}).save();
				console.log(i);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
	});

BkPPS.find({bk:'ligastavok'}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working');
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:'ligastavok', data: point}).save();
				console.log(i);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
});

BkPPS.find({bk:'baltbet'}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working');
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:'baltbet', data: point}).save();
				console.log(i);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
	
});*/
