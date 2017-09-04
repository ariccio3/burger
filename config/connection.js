// Set up MySQL connection.
var mysql = require("mysql");

// Our "keys" to the surver connection
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "r1tSQL1t",
  database: "burgers_db"
});

// Makes server connection or send back error log
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;