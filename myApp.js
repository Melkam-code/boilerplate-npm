var express = require('express');
var app = express();

//create a middleware 
app.use(function(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  next();
});


//to send file
app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html")
});

//to send json based on .env value

app.get("/json", (req, res) => {

  if(process.env.MESSAGE_STYLE === "uppercase"){
  res.json({"message": "HELLO JSON"}); } else {
    res.json({"message": "Hello json"})
  }
});

