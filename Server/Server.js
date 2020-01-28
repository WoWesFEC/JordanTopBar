const express = require('express');
const app = express();
const path = require('path');
const Port = 3001;


app.use(express.static(path.join(__dirname + '/../Dist')));


app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});