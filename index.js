require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/heartbeat", (req, res) => {
  res.status(200).json({ message: "I am up and running!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
