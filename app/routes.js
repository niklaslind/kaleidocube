
/**
  * @namespace meantemplate.routes
  * @memberOf meantemplate    
  * @requires passport
  * @requires async
  * @requires body-parser
  * @requires controllers.js
  * @requires database.js
  * @description Definde the routes of the node application
  */


var AWS = require('aws-sdk');


// app/routes.js
module.exports = function(app, passport) {





	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	/**
	 * @function default root page
	 * @memberOf meantemplate.routes
	 * @param {object} properties: req, res
	 * @returns res - 
	 * @description Default root page, redirects to login page
	 */	
	app.get('/', function(req, res) {
		//res.render('index.ejs'); // load the index.ejs file
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});
	
	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	/**
	 * @function login page get
	 * @memberOf meantemplate.routes
	 * @param {object} properties: req, res
	 * @returns res - 
	 * @description Render a login page
	 */	

	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	
		/**
	 * @function login page post
	 * @memberOf meantemplate.routes
	 * @param {object} properties: req, res
	 * @returns res - 
	 * @description Handle login page response, authenticate via passport, redirect to mainpage if auth is ok, otherwise redirect to login with flash message
	 */	

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/mainpage', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// SIGNUP ==============================
	// =====================================
	/**
	 * @function signup page
	 * @memberOf meantemplate.routes
	 * @param {object} properties: req, res
	 * @returns res - 
	 * @description Render a signup page and handle response, should be inactivated except when creating new user accounts
	 */	


	// show the signup form
	app.get('/signup', function(req, res) {
	
		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});
	
	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/mainpage', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	
	
	

	// =====================================
	// Main page   =========================
	// =====================================
	/**
	 * @function main page
	 * @memberOf meantemplate.routes
	 * @param {object} properties: req, res
	 * @returns res - 
	 * @description Render the app main page
	 */	

	app.get('/mainpage', isLoggedIn, function(req, res) {
							
		res.render('meantemplate.ejs', {
			user : req.user // get the user out of session and pass to template
		});
		
		
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
		/**
	 * @function logout page
	 * @memberOf meantemplate.routes
	 * @param {object} properties: req, res
	 * @returns res - 
	 * @description Logout function, kills session and redirect to root page
	 */	

	app.all('/logout', function(req, res) {
    console.log("Logging out");
		req.logout();
		res.redirect('/');
    //res.render('login.ejs', { message: req.flash('loginMessage') });
	});

  
	// =====================================
	// ADD DATA TO AWS S3 STORAGE ==========
	// =====================================
		/**
	 * @function addDataAws
	 * @memberOf meantemplate.routes
	 * @param {object} properties: req, res
	 * @returns res - 
	 * @description Add data to qws s3 storage
	 */	

	app.all('/addDataAws', function(req, res) {
    var s3 = new AWS.S3();    
    // Bucket names must be unique across all S3 users
    
    var myBucket = 'caleidodata';    
    var myKey = '';
    
    s3.createBucket({Bucket: myBucket}, function(err, data) {    
    if (err) {
       console.log(err);
       res.send(err);
       } else {    
         params = {Bucket: myBucket, Key: myKey, Body: 'Hello!'};    
         s3.putObject(params, function(err, data) {    
             if (err) {    
                 console.log(err);
                  res.send(err);

             } else {    
                 console.log("Successfully uploaded data to myBucket/myKey");    
                  res.send("Successfully uploaded data to myBucket/myKey");

             }    
          });    
       }    
    });    
	});  
  
  
  

};





		/**
	 * @function isLoggedIn
	 * @memberOf meantemplate.routes
	 * @param {object} properties: req, res
	 * @returns res - 
	 * @description Authentication helper function, check if user has a valid session. 
	 */	
// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
