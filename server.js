//dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var expressHandlebars = require('express-handlebars');
var connection = require('./config/connection.js');
var path = require('path');

//static content from the "public" directory
app.use(express.static(__dirname + '/public'));

//parse application
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public/assets'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

require('./controllers/burgersController.js')(app);

var port = 3001;
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
