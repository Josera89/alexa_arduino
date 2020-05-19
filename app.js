var express = require('express');
var app = express();
app.get('/', function (res, req) {
  res.send('Hello world(test2)!\n');
})
const port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port', port);
