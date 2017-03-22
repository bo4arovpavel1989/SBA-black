module.exports.noMiddleware = function(req, res, next){
	next();
};