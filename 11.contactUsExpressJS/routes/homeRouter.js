//core module
const path = require("path");

//external module
const express = require('express');

//local module
const rootDir = require("../utils/pathUtils");

const homeRouter = express();

homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = homeRouter;