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


var bks=['atlantik-m', 'betring', 'betru', 'digitalbetting', 'favorit', 'firmastom', 'fortuna', 'investcompcentr', 'investgarant',
'johnygame', 'marathon', 'matchbet', 'melofon', 'panorama', 'rosbet', 'rosippodromi', 'rusteletot', 'sportbet', 'starbet', 
'williamhill', 'winline', 'olimp', 'leon', '888', 'fonbet', 'baltbet', '1xstavka', 'ligastavok'];

var j=0;
getPPSCoord();
function getPPSCoord(){
BkPPS.find({bk:bks[j]}, function(err, rep){
	geocoder.geocode(rep).then(res=>{
		let i=0;
		console.log('working on ' + bks[j]);
		var name = bks[j];
		j++;
		if(j<bks.length) getPPSCoord();
		try{
			res.result.features.forEach(point=>{
				let bkPPS = new BkPPSCoordinates({bk:name, data: point}).save();
				console.log(i + ' ' + name);
				i++;
			});
		}catch(e){
			console.log(e);
			}
	});
});
}


