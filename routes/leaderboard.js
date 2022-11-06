var express = require('express');
var router = express.Router();
var db = require("../databases.js")

router.get('/', function(req, res, next) {
    db.serialize(() => {
        db.each('SELECT name, score FROM player', (err, row) =>{
            if(err){
                console.error(err.message);
                req.flash('error', err);
                res.render('leaderboard', {data: ''});
            }
            else{
                console.log(row);
                res.render('leaderboard', {data: [row]});
            }
        })
    })
    
})

module.exports = router;