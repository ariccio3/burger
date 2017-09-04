var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

// Set Handlebars.
var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Stores the express function in variable app to be used below
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// Parses only URL encoded bodies. A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body)
app.use(bodyParser.urlencoded({extended: false}));

// This requirement points to where our Express routes are located and gives the server access to them.
var routes = require('/controllers/burgers_controllers.js');
app.use("/", routes);

// listens for database requests from the user
app.listen(port);