const requestHandler = (req, res) => {
  console.log("Handler is connected!");
  return res.end();
};

module.exports = requestHandler;
