var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hello World!")
	console.log("Request from " + req.ip);
});

app.listen("8080");