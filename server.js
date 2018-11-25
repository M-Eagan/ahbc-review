"use strict";
// require the express module
const express = require("express");
// create an instance of express
const app = express();
// define the port number
const port = 3000;
// require the routes module
const students = require("./routes");

// serve these static files
app.use(express.static("./public"));
// recognizes req.body/req.params as a JSON object
app.use(express.json());
// use the routes module
app.use("/", students);

// begin the server listening on port 3000
app.listen(port, _ => console.log(`Server is running.`));