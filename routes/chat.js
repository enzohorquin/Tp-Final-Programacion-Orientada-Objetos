var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session.username)
        res.render('chat',{usenam:req.session.username});
    else
        res.redirect('/login');
});

module.exports = router;