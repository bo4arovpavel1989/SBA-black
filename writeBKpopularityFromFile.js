var fs = require("fs");
var CitiesInfo = require('./lib/models/mongoModel.js').CitiesInfo;

String.prototype.replaceAll = function(search, replace){
  return this.split(search).join(replace);
}


fs.readFile("yandexWordStat.csv", "utf8", 
             function(error,data){
               console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
				 data = data.split('\n');
				 data=data.reverse();
				 data.forEach(line=>{
					 try {
			
					 let lines=line.split(';');
					//console.log(lines[0] + ': ' + lines[1]);
					 let reg = new RegExp(lines[0], "i")
					 lines[1]=lines[1].slice(0, -2);
					 lines[1]=lines[1].replaceAll(/\s/g, '');
					// console.log(lines[1]);
					if(lines[0]=='?Москва')  console.log(reg);
							 CitiesInfo.update({name: {$regex: reg}}, {$set: {bkPopularity: lines[1]}}).exec((err, rep)=>{
								console.log(rep);
							});		 
					 } catch(e){}
				 });
});


CitiesInfo.update({name: 'Москва'}, {$set: {bkPopularity: 94}}).exec((err, rep)=>{
								console.log(rep);
							});