var connection = require("./connection.js");
var mysql = require('mysql');

// Object Relational Mapper (ORM)

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      console.log(result);
    });
  },
  selectAndNewOrder: function(whatToSelect, table, orderCol, Up) {
    if (Up === true){
      Up = 'ASC'
    } else {
      Up = 'DESC'
    };
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? " + Up ;
    let queryParams = [whatToSelect, table, orderCol, Up];
    var formatQuery = mysql.format(queryString, queryParams)
    console.log(formatQuery)
    console.log('up', Up);

    connection.query(queryString, queryParams, function(err, result) {
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
