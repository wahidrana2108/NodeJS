//code modules
const path = require("path");

const express = require("express");
const hostRouter = express.Router();

//local modules
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', { pageTitle: '404 - Airbnb' });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("home registion successful for ", req.body);
  registeredHomes.push({
    houseName: req.body.houseName,
    location: req.body.location,
    price: req.body.price,
  });
  console.log(registeredHomes);

  res.render('homeAdded', {pageTitle: 'Home Added to Airbnb'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
 