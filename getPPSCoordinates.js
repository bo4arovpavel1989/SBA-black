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
