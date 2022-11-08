var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var sqlite3 = require('sqlite3');
var leaderboardRoutes = require("./routes/leaderboard.js");
var desktop = require('./routes/desktop.js')
var applet = require('./routes/applet.js')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: '123@abcd',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  }),
);
//app.use(expressValidator);
app.use(flash());

app.use('/leaderboard', leaderboardRoutes);

app.use('/desktop', desktop)
app.use('/applet', applet)

app.use(function (req, res, next) {
    next(createError(404));
  });
  app.listen(5555, function () {
    console.log('Node server running on port : 5555');
  });