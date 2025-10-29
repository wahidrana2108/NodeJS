const Home = require("../modules/home");

exports.home = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "Airbnb Home",
    })
  );
};

exports.favoutite = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/favouriteList", {
      registeredHomes: registeredHomes,
      pageTitle: "Favoutite Home",
    })
  );
};

exports.bookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/booking", {
      registeredHomes: registeredHomes,
      pageTitle: "Booking Page",
    })
  );
};

exports.homeDetails = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/homeDetails", {
      registeredHomes: registeredHomes,
      pageTitle: "Home Details Page",
    })
  );
};

exports.showMore = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/homeList", {
      registeredHomes: registeredHomes,
      pageTitle: "All Available Homes",
    })
  );
};
