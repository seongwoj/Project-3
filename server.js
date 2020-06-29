const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userlist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// //CORS middleware
// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'example.com');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');

//   next();
// }

// //...
// app.configure(function() {
//   app.use(express.bodyParser());
//   app.use(express.cookieParser());
//   app.use(express.session({ secret: 'cool beans' }));
//   app.use(express.methodOverride());
//   app.use(allowCrossDomain);
//   app.use(app.router);
//   app.use(express.static(__dirname + '/public'));
// });