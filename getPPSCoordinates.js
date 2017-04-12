var https = require('https');
let secret = 'AIzaSyBkhoB5RgaYw19-QWiFDoUc2AtTO-Sc2P0';
var BkPPS = require('./lib/models/mongoModel.js').BkPPS;

String.prototype.replaceAll = function(search, replace){
  return this.split(search).join(replace);
}

BkPPS.find({}, function(err, rep){
	let address=rep[0].address;
	address = address.replaceAll(', ', '+');
	
	address='Санкт-Петербург+улица+Рыбацкая+д.10+кв.2';
	console.log(address);
	let query='https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + secret;
	  var options = {
        host :  'maps.googleapis.com',
        port : 443,
        path : '/maps/api/geocode/json?address=' + address + '&key=' + secret,
        method : 'GET'
    }
	console.log(query);
	  https.get('https://maps.googleapis.com/maps/api/geocode/json?address=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D1%80%D1%8B%D0%B1%D0%B0%D1%86%D0%BA%D0%B0%D1%8F+%D0%B4.10&key=AIzaSyBkhoB5RgaYw19-QWiFDoUc2AtTO-Sc2P0', function(res) {
        var data = "";
        res.on('data', function (chunk) {
                        data += chunk.toString();
        });
        res.on('end', function() {
            try {
                console.log(data);
            } catch (e) {
                callback(false);
            }
        });
    });
	
});
