var express = require('express');
var router = express.Router();
var User = require('../models/user').User;


router.get('/', function(req, res, next) {
        res.render('login');
});

module.exports = router;
