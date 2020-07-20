const mongoose = require("mongoose");
const User = require("../models/user")
const Message = require("../models/Message")

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
        icon: "husky",
        url: "https://images.dog.ceo/breeds/husky/20180901_150234.jpg",
        date: new Date(Date.now())
    },
    {
        username: "mariaSanchez",
        email: "mariaSanchez@test.com",
        password: "@@@@@@@@@@",
        latitude: "34.0495654",
        longitude: "-118.4194040",
        address: "Los Angeles, CA, USA",
        icon: "cairn",
        url: "https://images.dog.ceo/breeds/cairn/n02096177_1000.jpg",
        date: new Date(Date.now())
    },
    {
        username: "doggylover",
        email: "doggylover@test.com",
        password: "@@@@@@@@@@",
        latitude: "34.061130",
        longitude: "-118.440042",
        address: "Los Angeles, CA, USA",
        icon: "doberman",
        url: "https://images.dog.ceo/breeds/doberman/doberman.jpg",
        date: new Date(Date.now())
    },
    {
        username: "johnDog",
        email: "johnDog@test.com",
        password: "@@@@@@@@@@",
        latitude: "34.051215",
        longitude: "-118.443305",
        address: "Los Angeles, CA, USA",
        icon: "maltese",
        url: "https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg",
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

  const messages=[
    {
        name: "Bill",
        email: "bill@bill.com",
        subject: "Hello",
        message: "hello world",
        date: new Date(Date.now())
    }
  ]

  Message
  .remove({})
  .then(() => Message.collection.insertMany(messages))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });