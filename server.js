const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
// const messages = require('./routes/api/messages')
var socket=require('socket.io');
const { use } = require("passport");
const app = express();


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}else{app.use(express.static("public"))}
// Routes
app.use("/api/users", users);
const port = process.env.PORT || 3001;
const server=app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// chatroom setup
var io=socket(server)
const userslist={}

io.on('connection',function(socket){
  socket.on('new-user', function(name){
    
    const user={
      username: name,
      id:socket.id
    }
    userslist[socket.id]=user
    io.emit("user-connected", user)
    io.emit("users", Object.values(userslist));
  })

  socket.on('message', message => {
    io.emit('render-message', {message:message, name:userslist[socket.id]
    });
  });

 
  socket.on("disconnect", () => {
    delete userslist[socket.id];
    io.emit("disconnected",socket.id)
  });
})
