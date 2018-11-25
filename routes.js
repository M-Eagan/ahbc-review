"use strict";
// require the express module
const express = require("express");
// create an instance of the Routing class
const students = express.Router();
// require the db module
const pool = require("./db");

// GET endpoint to the /students URI
students.get("/students", (req, res) => {
  // query the database for all rows in the students table
  pool.query("select * from students").then((result) => {
    // send the results
    res.json(result.rows);
  });
});

// POST endpoint to the /students URI
students.post("/students", (req, res) => {
  // query the database to insert the data into the students table
  // the array of values built from the req.body object (this is sent with the POST http request from the service in AngularJS)
  pool.query("insert into students(name, fav_food, boot_fav) values($1::text, $2::text, $3::text)", [req.body.name, req.body.fav_food, req.body.boot_fav]).then(() => {
    // query the database for all rows in the students table
    pool.query("select * from students").then((result) => {
      // send the results
      res.json(result.rows);
    });
  });
});

// PUT endpoint to the /students/:id URI
students.put("/students/:id", (req, res) => {
  // query the database to update data in the students table
  // the array of values is built with from the req.body object (this is sent with the POST http request from the service in AngularJS) and req.params object
  pool.query("update students set name=$1::text, fav_food=$2::text, boot_fav=$3::text where id=$4::int", [req.body.name, req.body.fav_food, req.body.boot_fav, req.params.id]).then(() => {
    // query the database for all rows in the students table
    pool.query("select * from students").then((result) => {
      // send the results
      res.json(result.rows);
    });
  });
});

// DELETE endpoint to /students/:id URI
students.delete("/students/:id", (req, res) => {
  // query the database to delete data in the students table
  // the array of values is built with from the req.body object (this is sent with the POST http request from the service in AngularJS) and req.params object
  pool.query("delete from students where id=$1::int", [req.params.id]).then(() => {
    // query the database for all rows in the students table
    pool.query("select * from students").then((result) => {
      // send the results
      res.json(result.rows);
    });
  });
});

// export the students object
module.exports = students;