//external module
const express = require("express");

//local module
const request = require("./user");

const PORT = 3000;

const app = express();

app.get("/", (req, res, next) => {
  console.log("came first", req.url, req.method);
  res.send("<p>came to first</p>");
  next();
});

app.get("/", (req, res, next) => {
  console.log("came first but first", req.url, req.method);
  res.send("<p>came but not first</p>");
  next();
});

app.get("/hello", (req, res, next) => {
  console.log("came second", req.url, req.method);
  res.send("<p>came to second</p>");
});

app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});
