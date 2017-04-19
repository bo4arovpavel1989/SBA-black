var fs = require("fs");
var BkPPS = require('./lib/models/mongoModel.js').BkPPS;
var bks=['atlantik-mpps', 'betringpps', 'betrupps', 'digitalbettingpps', 'favoritpps', 'firmastompps', 'fortunapps', 'investcompcentrpps', 'investgarantpps',
'johnygamepps', 'marathonpps', 'matchbetpps', 'melofonpps', 'panoramapps', 'rosbetpps', 'rosippodromipps', 'rusteletotpps', 'sportbetpps', 'starbetpps', 
'williamhillpps', 'winlinepps', 'olimp', 'leon', '888', 'winline', 'fonbet', 'baltbet', '1xstavka', 'ligastavok'];

bks.forEach(bk=>{
	fs.readFile("ppsAddressesFromFNS/" + bk + '.txt', "utf8", 
             function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			 data = data.split('\n');
			console.log(data.length);
			  data.forEach(lines=>{
				  if (lines.length>5)  {
					  //console.log(lines);
					  lines=lines.split('\r');
					  console.log(lines.length);
					  lines.forEach(line=>{
						   if (line.length>5) {
								let slicePoint = line.indexOf(' ');
								line = line.slice(slicePoint + 1);
							    var bkPPS = new BkPPS({bk:bk, address: line}).save();
						   }
					  })
				  }
				});
			});

});



/* commented everything in purpose not to write extra data
// асинхронное чтение
fs.readFile("888pps.txt", "utf8", 
             function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			 data = data.split('\n');
			console.log(data.length);
			  data.forEach(lines=>{
				  if (lines.length>5)  {
					  //console.log(lines);
					  lines=lines.split('\r');
					  console.log(lines.length);
					  lines.forEach(line=>{
						   if (line.length>5) {
								let slicePoint = line.indexOf(' ');
								line = line.slice(slicePoint + 1);
							    var bkPPS = new BkPPS({bk:'888', address: line}).save();
						   }
					  })
				  }
				});
});

fs.readFile("leonpps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			 data = data.split('\n');
			console.log(data.length);
			  data.forEach(lines=>{
				  if (lines.length>5)  {
					  //console.log(lines);
					  lines=lines.split('\r');
					  console.log(lines.length);
					  lines.forEach(line=>{
						   if (line.length>5) {
								let slicePoint = line.indexOf(' ');
								line = line.slice(slicePoint + 1);
							    var bkPPS = new BkPPS({bk:'leon', address: line}).save();
						   }
					  })
				  }
				});
});				

fs.readFile("fonbetpps.txt", "utf8", 
           function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			 data = data.split('\n');
			console.log(data.length);
			  data.forEach(lines=>{
				  if (lines.length>5)  {
					  //console.log(lines);
					  lines=lines.split('\r');
					  console.log(lines.length);
					  lines.forEach(line=>{
						   if (line.length>5) {
								let slicePoint = line.indexOf(' ');
								line = line.slice(slicePoint + 1);
							    var bkPPS = new BkPPS({bk:'fonbet', address: line}).save();
						   }
					  })
				  }
				});
});

fs.readFile("1xstavkapps.txt", "utf8", 
             function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			 data = data.split('\n');
			console.log(data.length);
			  data.forEach(lines=>{
				  if (lines.length>5)  {
					  //console.log(lines);
					  lines=lines.split('\r');
					  console.log(lines.length);
					  lines.forEach(line=>{
						   if (line.length>5) {
								let slicePoint = line.indexOf(' ');
								line = line.slice(slicePoint + 1);
							    var bkPPS = new BkPPS({bk:'1xstavka', address: line}).save();
						   }
					  })
				  }
				});
});

fs.readFile("winlinepps.txt", "utf8", 
             function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			 data = data.split('\n');
			console.log(data.length);
			  data.forEach(lines=>{
				  if (lines.length>5)  {
					  //console.log(lines);
					  lines=lines.split('\r');
					  console.log(lines.length);
					  lines.forEach(line=>{
						   if (line.length>5) {
								let slicePoint = line.indexOf(' ');
								line = line.slice(slicePoint + 1);
							    var bkPPS = new BkPPS({bk:'winline', address: line}).save();
						   }
					  })
				  }
				});
});

fs.readFile("ligastavokpps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			 data = data.split('\n');
			console.log(data.length);
			  data.forEach(lines=>{
				  if (lines.length>5)  {
					  //console.log(lines);
					  lines=lines.split('\r');
					  console.log(lines.length);
					  lines.forEach(line=>{
						   if (line.length>5) {
								let slicePoint = line.indexOf(' ');
								line = line.slice(slicePoint + 1);
							    var bkPPS = new BkPPS({bk:'ligastavok', address: line}).save();
						   }
					  })
				  }
				});
});

fs.readFile("baltbetpps.txt", "utf8", 
             function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			 data = data.split('\n');
			console.log(data.length);
			  data.forEach(lines=>{
				  if (lines.length>5)  {
					  //console.log(lines);
					  lines=lines.split('\r');
					  console.log(lines.length);
					  lines.forEach(line=>{
						   if (line.length>5) {
								let slicePoint = line.indexOf(' ');
								line = line.slice(slicePoint + 1);
							    var bkPPS = new BkPPS({bk:'baltbet', address: line}).save();
						   }
					  })
				  }
				});
}); 
 
fs.readFile("bkolimppps.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
			 data = data.split('\n');
			console.log(data.length);
			  data.forEach(lines=>{
				  if (lines.length>5)  {
					  //console.log(lines);
					  lines=lines.split('\r');
					  console.log(lines.length);
					  lines.forEach(line=>{
						   if (line.length>5) {
								let slicePoint = line.indexOf(' ');
								line = line.slice(slicePoint + 1);
							    var bkPPS = new BkPPS({bk:'olimp', address: line}).save();
						   }
					  })
				  }
				});
});*/