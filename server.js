var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var port = process.env.PORT || 3000;


var db = require("./models");
var routes = require("./controllers/controller.js");
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));




app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




app.use("/", routes);

db.sequelize.sync().then(function(){
	app.listen(port, function(){
		console.log("App listening on PORT " + PORT);
	});
});

