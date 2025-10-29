exports.home = (req, res, next) => {
  res.render("home", { registeredHomes, pageTitle: "Airbnb Home" });
};

exports.getHome = (req, res, next) => {
  res.render("addHome", { pageTitle: "Add Home To Airbnb" });
};

const registeredHomes = [];

exports.postHome = (req, res, next) => {
  console.log("home registion successful for ", req.body);
  registeredHomes.push({
    houseName: req.body.houseName,
    location: req.body.location,
    price: req.body.price,
    description: req.body.description,
    img: req.body.img,
  });

  res.render("homeAdded", { pageTitle: "Home Added to Airbnb" });
};

exports.pageNotFound = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 - Airbnb" });
};
