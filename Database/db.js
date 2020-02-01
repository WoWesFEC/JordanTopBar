const mySql = require('mysql');

const db = mySql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Password',
   database: 'searchbar',
});

const fuzzySearch = (search, callback) => {
   db.query(`SELECT name, category FROM searchdata WHERE name LIKE '%${search}%' OR category LIKE '%${search}%' LIMIT 10;`,
   (error, results, fields) => {
      if (error) {
         callback(error, null);
      } else {
         callback(null, results);
      }
   })
}

module.exports = {
   fuzzySearch
}