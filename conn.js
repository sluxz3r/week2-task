require('dotenv').config() // Initialize dotenv config

const mysql = require('mysql') // Initialize mysql
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME
})

conn.connect(function (err){
    if(err) throw err;
});

module.exports = conn;