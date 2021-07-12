require("dotenv").config();

const express = require("express");
const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;
const db = require("./api/config/connectDB");

db.sequelize.sync({ force: false }).then(() => {
  console.log("drop and re-syncronised db");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
