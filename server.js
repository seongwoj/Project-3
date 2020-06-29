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
<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fidofriendDB");
=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dogappDB");
>>>>>>> 628ad35544d47ad35c5349aa67f5cae5c3a1ed67

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
