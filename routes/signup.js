var express = require('express');
var router = express.Router();
var User = require('../models/user').User;


router.get('/', function(req, res, next) {


    User.find(function(err,doc){

        res.render('signup');
    })
});

module.exports = router;
