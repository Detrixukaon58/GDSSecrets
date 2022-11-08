var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var icon = req.query.icon;
    var link = req.query.link;
    var name = req.query.name;
    console.log(req.query.link + "pls");
    console.log("HELP");
    res.render('applet', {icon:icon, link:link, name:name});
})

module.exports = router;