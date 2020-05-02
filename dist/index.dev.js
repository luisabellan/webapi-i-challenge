"use strict";

// implement your API here
// require the express npm module, needs to be added to the project using "npm install express"
var express = require('express');

var db = require('./data/db.js');

var port = 8000; // creates an express application using the express module

var server = express(); // configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"

server.get('/', function (req, res) {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
  res.send('Hello World');
});
server.get("/hobbits", function (req, res) {
  // route handler code here
  var hobbits = [{
    id: 1,
    name: "Samwise Gamgee"
  }, {
    id: 2,
    name: "Frodo Baggins"
  }];
  res.status(200).json(hobbits);
});
/* Challenge
Write an endpoint that returns a list of users stored in 
a database. 
Return data in JSON format.

Production APIs return data coming from a data store or 
external source, 
not from an in-memory array like we have done so far.

Your job is to create a new /users endpoint that returns 
the list of users contained in the provided database. 
To get the list of users, require the /data/db.js file 
into index.js and use its .find() method to get the data.

The .find() method returns a promise, 
so make sure to send the response after that promise 
has resolved and, in case of failure, return a status 
code of 500 and an error message back to the client. */

server.get("/users", function (req, res) {
  // route handler code here
  var users = db.find(); //res.send(users);

  res.json(users); // res.status(200).json(users);
}); // once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts

server.listen(port, function () {
  return console.log("API running on port ".concat(port));
});