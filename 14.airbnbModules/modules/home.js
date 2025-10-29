//core modules
const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/pathUtil");
const filePath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, location, price, description, img) {
    this.houseName = houseName;
    this.location = location;
    this.price = price;
    this.description = description;
    this.img = img;
  }
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      fs.writeFile(filePath, JSON.stringify(registeredHomes), (error) => {
        console.log("File write is not successful!", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(filePath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }
};
