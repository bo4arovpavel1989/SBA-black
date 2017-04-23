var CitiesInfo = require('./lib/models/mongoModel.js').CitiesInfo;
var MultiGeocoder = require('multi-geocoder'),
geocoder = new MultiGeocoder({ coordorder: 'latlong', lang: 'ru-RU' });
   provider = geocoder.getProvider();

// Переопределяем метод getText(), извлекающий из переданного массива адреса,
// которые требуется геокодировать.
provider.getText = function (point) {
    let text =point.name;
    return text;
};



CitiesInfo.find({}, function(err, reps){
	if(reps){
		reps.forEach(city=>{
			var name = city.name;
			geocoder.geocode([{name: name}]).then(res=>{
				try{
					res.result.features.forEach(point=>{
						console.log(name + ': ' + point.geometry.coordinates);
						CitiesInfo.update({name: name}, {$set: {coordinates: point.geometry.coordinates}}).exec();
					});
				}catch(e){
					console.log(e);
					}
			});
		});
	}
});