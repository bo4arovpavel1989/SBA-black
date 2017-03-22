module.exports.pause = function (milliseconds) {
	var first = Date.now();
	while(Date.now() - first < milliseconds){}
	console.log('go');
};