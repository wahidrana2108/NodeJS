//code modules
const path = require("path");

//external modules
const express = require("express");
const userRouter = express.Router();

//local modules
const rootDir = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
   