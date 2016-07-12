var express = require('express');
var app = express();

app.get('/stocks/:name', function(req, res){
	res.send({ name: req.params.name, value: Math.random() * 100});
});

app.listen(8000);
console.log('Listening on port 8000...');