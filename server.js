var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
 //created model loading here
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
