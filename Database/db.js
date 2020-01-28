const mySql = require('mysql');

const db = mySql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Password',
   database: 'searchbar',
});

db.connect();