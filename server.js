// server.js

// set up ======================================================================
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var path = require('path');
var configDB = require('./config/database.js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,Authorization');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to database
require('./config/passport')(passport); // pass passport for configuration


// set up our express application
app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
app.use(cookieParser()); // read cookies (needed for auth)
//app.use(bodyParser()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.engine('html', cons.swig)
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs'); // set up ejs for templating


// required for passport
app.use(session({ secret: 'setsecretsessionkey_542143erwfwea' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

////Make database accessible to router ========================================
//app.use(function(req,res,next){
//		req.db = db;
//		next();
//});


// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The server is listening on port ' + port);
