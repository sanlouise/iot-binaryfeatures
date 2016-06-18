var PORT = 3000;
var express = require('express');
var app = express();
app.use(express.static(__dirname + ''));

http.listen(PORT, function() {
	console.log('Server started!');
});

