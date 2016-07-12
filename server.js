var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/stocks/:name', function(req, res){
  res.send({ name: req.params.name, value: Math.random() * 100});
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});