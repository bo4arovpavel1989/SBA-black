var getRequests = require('./getrequests.js');
var middleware = require('./middleware.js');

var getRequests = [
	{
		url: '/showinfo',
		middleware: middleware.noMiddleware,
		callback: getRequests.showInfo
	}
];

var postRequests = [

];

var deleteRequests = [

];

var router = function (app) {
	getRequests.forEach(function(request){
		app.get(request.url, request.middleware, request.callback);
	});
	postRequests.forEach(function(request){
		app.post(request.url, request.middleware, request.callback)
	});
	deleteRequests.forEach(function(request){
		app.delete(request.url, request.middleware, request.callback)
	});
};

module.exports.router = router;