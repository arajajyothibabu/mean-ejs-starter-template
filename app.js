var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = express.Router();

var app = express();

var db;
var mongoDBUrl = "mongodb://localhost:27017/cumulus";
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(mongoDBUrl, function (err, database) {
    if (err) {
        return;// console.log(err);
    }else{
        console.log("DB connected..!");
    }
    db = database;

    var index = require('./routes/index')(router, db);
    var users = require('./routes/users')(router, db);

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));


    app.use('/', index);
    app.use('/v1/api/users/', users);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

});

module.exports = app;
