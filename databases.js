var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/leader.db', (error) => {
    if(error){
        return console.error(error.message);
    }
    console.log('Connected to db');
});

module.exports = db;

//db.close();
