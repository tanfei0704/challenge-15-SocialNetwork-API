## challenge-15-SocialNetwork-API
This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and native JavaScript Date object to format timestamps. The seed data is created using Insomnia.

## Table of Contents 
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Accptance Criteria](#accpetance)
  5. [Technologies](#technologies)
  6. [License](#license)
  7. [Demo](#demos)
  8. [Author](#author)

## Installation
 * Clone my repository on GitHub.
 * To set up all the existing npm packages, run `npm init`.
 * To install the dependencies on the `node_modules` folder, run `npm install`
 * Ensure that MongoDB is installed on your machine. 
 * To create seed data by run ` node utils/seed.js ` and test the API routes, open Insomnia.


## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Technologies

JavaScript
Node.js
Express.js
MongoDB
Mongoose
Insomnia

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) License used for this project - MIT 

## Demo


## Author
