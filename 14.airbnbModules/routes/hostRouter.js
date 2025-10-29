//external modules
const express = require("express");
const hostRouter = express.Router();

//local modules
const homeControler = require("../controllers/hostControler");

hostRouter.get("/", homeControler.home);
hostRouter.get("/addHome", homeControler.getHome);
hostRouter.post("/addHome", homeControler.postHome);

exports.hostRouter = hostRouter;
