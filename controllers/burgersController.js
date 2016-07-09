//dependencies (not sure if I need all these?)
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var html = require('../views/index.handlebars');
var burger = require('../models/burger.js');
var orm = require('../config/orm.js');
var path = require('path');
var app = express();

/*ROUTES*/
module.exports = function(app) {

  app.get('/', function(req, res) {
    orm.selectAll('burgers').then(function(data) {
      res.render('index', {
        burgers: data,
        helpers: {
          isEaten: function(burger) {
            if (burger.devoured === 1) {
              return "#" + burger.id + ' ' + burger.burgerName;
            } else {
              return;
            }
          }
        },
      });
    })
  });

  app.post('/create', function(req, res) {
    orm.insertOne('burgers', {
      burger_name: req.body.burger,
      devoured: false
    }).then(function(data) {});
  });

  app.get("/newBurger", function(req, res) {
    orm.selectAll('burgers').then(function(data) {
      res.send(data);
    })
  });

  app.get('/eatBurger', function(req, res) {
    orm.updateOne('burgers', 'devoured', 'id', req.body.id).then(function(data) {});
  });
};
