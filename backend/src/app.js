const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/users.route");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// common router
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
