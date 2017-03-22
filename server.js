var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var server = require('http').createServer();

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(cookieParser());

var router = require('./lib/router.js').router;

server.on('request', app);

router(app);

server.listen(3000);

console.log('Server runs');