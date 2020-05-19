var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world(test2)!\n');
})
const port = process.env.PORT || 80;
app.listen(port);
console.log('Listening on port', port);
