//external modules
const express = require("express");
const userRouter = express.Router();

const home = require("../controllers/home");

userRouter.get("/", home.home);

module.exports = userRouter;
