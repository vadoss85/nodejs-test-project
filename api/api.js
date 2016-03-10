var express = require('express');
var router = express.Router();
var users = require('./controllers/users');

router.get('/users', users.findAll);
router.get('/users/:id', users.findById);
router.post('/users', users.add);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.delete);

module.exports = router;