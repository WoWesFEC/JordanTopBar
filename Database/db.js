const mySql = require('mysql');

const db = mySql.createConnection({
   host: 'topbar.cbeaiszz6xt0.us-east-2.rds.amazonaws.com',
   user: 'admin',
   password: 'Jortw&33162?',
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