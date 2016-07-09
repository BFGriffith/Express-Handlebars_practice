//dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
var exphbs = require('express-handlebars');
var path = require('path');

var connection = require('./config/connection.js');


//static content from the "public" directory
app.use(express.static(__dirname + '/public'));

//parse application
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public/assets/styles'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

require('./controllers/burgersController.js')(app);

var port = 3000;
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
