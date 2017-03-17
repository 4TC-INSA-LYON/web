var express = require('express');
var app = express();

app.use(express.static('front'));
app.use('/lib', express.static('./node_modules'));
app.use('/test', function(req, res) {
  res.send({"name": "Stephane"});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

