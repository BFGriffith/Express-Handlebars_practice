var orm = require('../config/orm.js');

var ateBurgers = orm.selectAll('burgers', 'devoured', true);
var createdBurgers = orm.selectAll('burgers', 'devoured', false);

var makeBurger = orm.insertOne('burgers', 'burgerName', 'devoured', 'date', res.body.burger);

var eatBurger = orm.updateOne('burgers', 'devoured', 'id', res.body.id);

module.exports = burger.js;
