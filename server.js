require('dotenv').config()
const express = require('express') // Import express
const bodyParser = require('body-parser') // Import body-parses
const app = express() // Create method
const port = process.env.SERVER_PORT // Default PORT
const controller = require('./controller');

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type

const routes = require('./routes');
routes(app);

app.listen(port)
  console.log(`\n Gas aku di Port : ${port} Mas!!! \n`) // Create listening app

