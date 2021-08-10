var express = require('express');
var app = express();

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
