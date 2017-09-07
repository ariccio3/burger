// Set up MySQL connection.
var mysql = require("mysql");
var connection;
// Our "keys" to the surver connection
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "r1tSQL1t",
  database: "burgers_db"
});
};

// Makes server connection or send back error log
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;