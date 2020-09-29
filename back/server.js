require('dotenv').config({
  path: __dirname + '/.env'
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
//set db and sync with it
const db = require("./app/models");
db.sequelize.sync({
  force: true
}).then(() => {
  console.log("drop and resync db.");
})
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to bezkoder application."
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./app/routes/tutorial.routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}.`);
});