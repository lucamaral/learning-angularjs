var express = require('express');
var load = require('express-load');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// handle static files requests
app.use(express.static(__dirname + '/public'));

load('middlewares')
    .then('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(3000, function () {
    console.info('Estamos no ar!');
});