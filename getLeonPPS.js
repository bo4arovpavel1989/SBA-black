var fs = require("fs");
var BkPPS = require('./lib/models/mongoModel.js').BkPPS;
 
// асинхронное чтение
fs.readFile("888pps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			data = data.split('000000, ');
			console.log(data.length);
                data.forEach(line => {
					line = line.split('\n')[0];
					if (line!=undefined) var bkPPS = new BkPPS({bk:'888', address: line}).save();
					
				});
});

fs.readFile("leonpps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			data = data.split('000000, ');
			console.log(data.length);
                data.forEach(line => {
					line = line.split('\n')[0];
					if (line!=undefined) var bkPPS = new BkPPS({bk:'leon', address: line}).save();
					
				});
			});				

fs.readFile("fonbetpps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			data = data.split('000000, ');
			console.log(data.length);
                data.forEach(line => {
					line = line.split('\n')[0];
					if (line!=undefined) var bkPPS = new BkPPS({bk:'fonbet', address: line}).save();
					
				});
});

fs.readFile("1xstavkapps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
		data = data.split('000000, ');
			console.log(data.length);
                data.forEach(line => {
					line = line.split('\n')[0];
					if (line!=undefined) var bkPPS = new BkPPS({bk:'1xstavka', address: line}).save();
					
				});
});

fs.readFile("winlinepps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			data = data.split('000000, ');
			console.log(data.length);
                data.forEach(line => {
					line = line.split('\n')[0];
					if (line!=undefined) var bkPPS = new BkPPS({bk:'winline', address: line}).save();
					
				});
});

fs.readFile("ligastavokpps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			data = data.split('000000, ');
			console.log(data.length);
                data.forEach(line => {
					line = line.split('\n')[0];
					if (line!=undefined) var bkPPS = new BkPPS({bk:'ligastavok', address: line}).save();
					
				});
});

fs.readFile("baltbetpps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			data = data.split('000000, ');
			console.log(data.length);
                data.forEach(line => {
					line = line.split('\n')[0];
					if (line!=undefined) var bkPPS = new BkPPS({bk:'baltbet', address: line}).save();
					
				});
}); 
 
fs.readFile("bkolimppps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			data = data.split('000000, ');
			console.log(data.length);
                data.forEach(line => {
					line = line.split('\n')[0];
					if (line!=undefined) var bkPPS = new BkPPS({bk:'olimp', address: line}).save();
					
				});
});