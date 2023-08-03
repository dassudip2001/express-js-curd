const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || localhost;
const bodyParser = require("body-parser");
const userRoutes = require("./routes/Api/user");


const mongodbConnectToDatabase = require("./config/db");
// initilized the middleware

app.use(bodyParser.json());


// initialized to connections to database
mongodbConnectToDatabase();

// initialized to route
app.use("/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
