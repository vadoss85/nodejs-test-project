var User = require('../models/user');

module.exports = {
	findAll: function (cb) {
		User.find(function (err, users) {
			if (err)
                res.send(err);

            cb({collection: users})
		});
	}
}