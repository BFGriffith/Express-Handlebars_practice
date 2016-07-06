var connection = require('./connection.js');

var orm = {
  selectAll: function(tableInput, columnToSearch, valueOfColumn) {
    return new Promise(function(resolve, reject) {
      var queyString = 'SELECT * FROM ' + burgers + ' WHERE ' + burgerName + ' = ?';
      connection.query(queryString, [valueOfColumn], function(err, result) {
        resolve(result);
      });
    });
  }
};

/*
var orm = {
  selectAll: function(table, column, columnValue) {
    var queryString = 'SELECT * FROM ' + table + ' WHERE ' + column + ' = ?';
    connection.query(queryString, [columnValue], function(err, res) {
      if (err) throw err;
      console.log(res);
      return res;
    })
  },
  insertOne: function(table, column1, column2, column3, columnOneValue) {
    var queryString = 'INSERT INTO ' + table + ' (' + column1 + ', ' + column2 + ', ' + column3 + ') VALUES (?,?,?)';
    connection.query(queryString, [columnOneValue, false, now()], function(err, res) {
      if (err) throw err;
      console.log(res);
      return res;
    });
  },
  updateOne: function(table, column1, column2, columnTwoValue) {
    var queryString = 'UPDATE ' + table + ' SET ' + column1 + ' = ? WHERE ' + column2 + ' = ?';
    connection.query(queryString, [true, columnTwoValue], function(err, res) {
      if (err) throw err;
      console.log(res);
      return res;
    });
  }
};
*/

module.exports = orm;
