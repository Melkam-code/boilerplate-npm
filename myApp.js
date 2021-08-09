var express = require('express');
var app = express();

//to send file
app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html")
});

//to send json 
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});
