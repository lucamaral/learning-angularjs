module.exports = function (app) {
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var methodOverride = require('method-override');
    var mongoose = require('mongoose');

    // connecting to db
    global.db = mongoose.connect("mongodb://localhost/todoApp");

    // middlewares to handle request/response
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(methodOverride());
};