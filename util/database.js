/*
    Code that allows us to connect with the database
*/

const mysql = require("mysql2");

/*
    creating a pool of connections
    because whenever we run a query in mysql, 
    we have to create and make a connection and close it
    after we use it

    so we create a pool of connection so we don't have to send
    connection to database too many times
*/
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "trungtrinh38",
});

module.exports = pool.promise();
