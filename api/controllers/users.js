var user = require('../../controllers/user');

exports.findAll = function(req, res) {
	user.findAll(function (obj) {
		res.send(obj);
	});
};
exports.findById = function(req, res) {};
exports.add = function(req, res) {};
exports.update = function(req, res) {};
exports.delete = function(req, res) {};