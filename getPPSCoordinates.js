var https = require('https');
let secret = 'AIzaSyBkhoB5RgaYw19-QWiFDoUc2AtTO-Sc2P0';
var BkPPS = require('./lib/models/mongoModel.js').BkPPS;

String.prototype.replaceAll = function(search, replace){
  return this.split(search).join(replace);
}

BkPPS.find({}, function(err, rep){
	let address=rep[0].address;
	address = address.replaceAll(', ', '+');
	//address=address.slice(0, 80);
	console.log(address);
	 address=encodeURIComponent(address); 
	let query='https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + secret;
	console.log(query);
	  https.get(query, function(res) {
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
