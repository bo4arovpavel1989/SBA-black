var fs = require("fs");
var BkPPS = require('./lib/models/mongoModel.js').BkPPS;
var bks=['atlantik-m', 'betring', 'betru', 'digitalbetting', 'favorit', 'firmastom', 'fortuna', 'investcompcentr', 'investgarant',
'johnygame', 'marathon', 'matchbet', 'melofon', 'panorama', 'rosbet', 'rosippodromi', 'rusteletot', 'sportbet', 'starbet', 
'williamhill', 'winline', 'olimp', 'leon', '888', 'fonbet', 'baltbet', '1xstavka', 'ligastavok'];

//parsing of pps addresses from txt files to mongoDB
/*
bks.forEach(bk=>{
	fs.readFile("ppsAddressesFromFNS/" + bk + 'pps.txt', "utf8", 
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

});*/
