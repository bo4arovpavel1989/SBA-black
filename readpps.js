var fs=require('fs');
var addresses=[];

fs.readFile('baltbetpps.txt', 'utf8', function(error, data) {
  data = data.split('\n');
  data.forEach(lines=>{
	  if (lines.length>5)  {
		  //console.log(lines);
		  lines=lines.split('\r');
		  console.log(lines.length);
		  lines.forEach(line=>{
			   if (line.length>5) {
					let slicePoint = line.indexOf(' ');
					line = line.slice(slicePoint + 1);
				   addresses.push(line);
			   }
		  })
	  }
	  else data.pop(lines);
  });
  //console.log(data.length);
  console.log(addresses.length);
  console.log(addresses[100]);
});
