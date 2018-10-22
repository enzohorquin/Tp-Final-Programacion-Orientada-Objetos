var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

router.post('/', function(req, res, next) {
    var user = new User({email: req.body.email, password: req.body.password, username: req.body.username,
                         password_confirmation: req.body.password_confirmation});

    User.findOne({email:req.body.email},function(error,docs){

        if(docs) {
            return res.status(400).json({'error':'User already exists. Please redirect to localhost:3000/signup'});
        }
        else
            user.save().then(function (us) {
                res.redirect('login');
            }, function (err) {
                console.log(String(err));
                res.redirect('usuario');

            });




    }) ;


});

module.exports = router;

