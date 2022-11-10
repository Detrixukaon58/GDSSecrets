var express = require('express');
var router = express.Router();

var app_example = {name:'test_app.exe', link:'/apps/test', icon:'/images/alex.png'};

router.get('/', function (req, res, next) {
    var data = {apps:[app_example]}
    console.log(app_example.name);
    res.render('desktop', data);
})

module.exports = router;