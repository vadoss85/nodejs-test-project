var express = require('express');
var router = express.Router();

var users = require('../controllers/user')

/* GET home page. */
router.get('/', function(req, res, next) {

	users.findAll(function (users) {
		res.render('pages/index', { title: 'Express', layout: 'layouts/home.jade', users: users.collection});
	})
});

module.exports = router;
