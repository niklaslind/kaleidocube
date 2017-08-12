
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
var async = require('async');


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
		res.render('epitch.ejs', { message: req.flash('loginMessage') });
	});
	
  
  
  
  
};

