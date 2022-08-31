const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
  "mongodb+srv://anthony:wcsVsjuz3l8oO7vD@cluster0.gk5ylbm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("hi there");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
