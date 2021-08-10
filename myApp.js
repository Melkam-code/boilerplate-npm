var express = require('express');
var app = express();

//chaining middleware and a handler to a specific route
app.get('/now', function middleware(req, res, next){
  req.time = new Date().toString();
  next()
}, function handler(req, res){
  res.json({time: req.time})
});

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

//get query param values
app.get('/name', (req, res) => {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json(
    { name: `${firstName} ${lastName}`}
  )
})

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

