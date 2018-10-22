var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

router.post('/', function(req, res, next) {

    User.findOne({email:req.body.email, password:req.body.password}, function(err,docs){

        if(docs){
            req.session.user_id = docs._id;
            req.session.username=docs.username;
            res.redirect('/chat');}
        else {
            res.redirect('/login');}
    })

});

module.exports = router;