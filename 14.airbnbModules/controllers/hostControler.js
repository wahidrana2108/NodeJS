const Home = require("../modules/home");

exports.home = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/hostHomeList", {
      registeredHomes: registeredHomes,
      pageTitle: "Airbnb Home",
    })
  );
};

exports.getHome = (req, res, next) => {
  res.render("host/addHome", { pageTitle: "Add Home To Airbnb" });
};

exports.postHome = (req, res, next) => {
  const { houseName, location, price, description, img } = req.body;
  const home = new Home(houseName, location, price, description, img);
  home.save();

  res.render("host/homeAdded", { pageTitle: "Home Added to Airbnb" });
};
