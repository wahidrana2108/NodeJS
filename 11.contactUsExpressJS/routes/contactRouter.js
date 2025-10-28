//core module 
const path = require("path");

//external module 
const express = require("express");

//local module
const rootdir = require("../utils/pathUtils");

const contactHandler = express();

contactHandler.get("/contact", (req, res, next) => {
  res.sendFile(path.join(rootdir, 'views', 'contactUs.html'));
});
contactHandler.post("/contact", (req, res, next) => {
    console.log(req.body);
    
  res.sendFile(path.join(rootdir, 'views', 'contactSuccess.html'))
});

module.exports = contactHandler;