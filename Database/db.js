const mysql = require('mysql');

const db = mysql.createConnection({
   host: 'topbar.cbeaiszz6xt0.us-east-2.rds.amazonaws.com',
   port: 3307,
   user: 'admin',
   password: 'ilovedocker',
   database: 'searchbar'
});

db.connect(() => {
  console.log('connected to db');
})

const fuzzySearch = (search, callback) => {
  db.query(`SELECT name, category FROM searchdata WHERE name LIKE '%${search}%' OR category LIKE '%${search}%' LIMIT 8;`,
    (error, results, fields) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    })
}

module.exports = {
   fuzzySearch,
}