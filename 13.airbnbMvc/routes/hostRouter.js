//external modules
const express = require("express");
const hostRouter = express.Router();

//local modules
const home = require("../controllers/home");

hostRouter.get("/add-home", home.getHome);

hostRouter.post("/add-home", home.postHome);

exports.hostRouter = hostRouter;
