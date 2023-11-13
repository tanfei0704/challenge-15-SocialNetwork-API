// Imports
const { User, Thought} = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data
const users = [
  {
    username: "Sarah",
    email: "sarah@gmail.com",
    thought: [{
      "thoughtText": "Here's a cool thought...",
    }],
  },{
    username: "Cindy",
    email:"cindy@gmail.com",
    thought: [{
      thoughtText:"I love it!",
      reactions:[{
        reactionBody: "big hug!"
      }
      ]
    }]
  },
];

console.log(connection);

// Connects to server
connection.once("open", async () => {
  console.log("connected");

  // Drop existing students
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Adds seed data to database
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(users);


  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});