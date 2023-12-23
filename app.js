const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const path = require("path");
const connectdb = require("./util/mongoDB");
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
connectdb();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING on home page");
});
app.listen(port, () => {
  console.log("server is live");
});
