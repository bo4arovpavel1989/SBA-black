		var https=require('https');
		console.log('runs');
		https.get('https://www.leon.ru/rest/sportsbook/event/listWithMarkets?onlyFavorites=false', function(res) {
			console.log(res.body);
        var data = "";
        res.on('data', function (chunk) {
                        data += chunk.toString();
        });
        res.on('end', function() {
            try {
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        });
		});
  
