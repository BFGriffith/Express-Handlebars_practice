var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var connection = require('./config/connection.js');
var orm = require('../config/orm.js');

var ateBurgers = orm.selectAll('burgers', 'devoured', true);
var createdBurgers = orm.selectAll('burgers', 'devoured', false);

var makeBurger = orm.insertOne('burgers', 'burgerName', 'devoured', 'date', res.body.burger);

var eatBurger = orm.updateOne('burgers', 'devoured', 'id', res.body.id);

module.exports = burger.js;
