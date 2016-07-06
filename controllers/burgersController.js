//dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var burger = require('../models/burger.js');
var path = require('path');
var app = express();

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {})
  });
  app.post('/create', function(req, res) {})
};

/*
module.exports = function(app){

app.get('/', function (req, res) {
    connection.query('SELECT * FROM burgers', function(err, result) {
        if (err) throw err;
        res.render('index', {
            burgers: result
        });//END res.render object
    });//END connection.query
});//END app.get

app.get('/index', function (req, res) {
    connection.query('SELECT * FROM burgers WHERE devoured = false', function(err, result) {
        if (err) throw err;
        res.render('index', {
            burgers: result
        });//END res.render object
    });//END connection.query

    connection.query('SELECT * FROM burgers WHERE devoured = true', function(err, result) {
        if (err) throw err;
        res.render('index', {
            burgers: result
        });//END res.render object
    });//END connection.query
});//END app.get



app.get('/devour/:identity', function (req, res) {
    connection.query('SELECT * FROM burgers WHERE id = identity', function(err, result) {
        if (err) throw err;
        res.render('index', {
            quotes: result
        });//END res.render object
    });//END connection.query
});//END app.get

	//default home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../views/index.handlebars'));
	});

}
*/
