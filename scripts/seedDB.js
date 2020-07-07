const mongoose = require("mongoose");
const User = require("../models/user")

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/fidoDB"
);

const users=[
    {
        username: "criskay",
        email: "criskay@email.com",
        password: "123456",
        latitude: "34.069548",
        longitude: "-118.432573",
        address: "Los Angeles, CA, USA",
        icon: "doberman",
        date: new Date(Date.now())
    },
    {
        username: "mariaSanchez",
        email: "mariaSanchez@test.com",
        password: "@@@@@@@@@@",
        latitude: "34.0495654",
        longitude: "-118.4194040",
        address: "Los Angeles, CA, USA",
        icon: "chow",
        date: new Date(Date.now())
    },
    {
        username: "doggylover",
        email: "doggylover@test.com",
        password: "@@@@@@@@@@",
        latitude: "34.061130",
        longitude: "-118.440042",
        address: "Los Angeles, CA, USA",
        icon: "chow",
        date: new Date(Date.now())
    },
    {
        username: "johnDog",
        email: "johnDog@test.com",
        password: "@@@@@@@@@@",
        latitude: "34.051215",
        longitude: "118.443305",
        address: "Los Angeles, CA, USA",
        icon: "doberman",
        date: new Date(Date.now())
    },
    
]


User
  .remove({})
  .then(() => User.collection.insertMany(users))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
