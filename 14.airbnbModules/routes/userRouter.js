//external modules
const express = require("express");
const userRouter = express.Router();

const userControler = require("../controllers/userControler");

userRouter.get("/", userControler.home);
userRouter.get("/store/favourite", userControler.favoutite);
userRouter.get("/store/bookings", userControler.bookings);
userRouter.get("/store/homeDetails", userControler.homeDetails);
userRouter.get("/store/showMore", userControler.showMore);

module.exports = userRouter;
