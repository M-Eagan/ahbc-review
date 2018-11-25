"use strict";
// require the pg module
const pg = require("pg");
// construct a pool object
const pool = {
  user: "postgres", // default username
  password: "password", // enter your password here
  host: "localhost", // default host
  port: 5432, // default port
  database: "postgres", // the database to connect to
  ssl: false 
};

// export the pool object
module.exports = new pg.Pool(pool);