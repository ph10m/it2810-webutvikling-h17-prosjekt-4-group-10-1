var sqlite3 = require('sqlite3').verbose()
, db = new sqlite3.Database('./../tool/db.db');

module.exports = {
    getConnection: function() {
        return db;
    }
}