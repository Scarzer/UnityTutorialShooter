var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.write("Hello there");
    res.end();
});

app.listen(8000);
