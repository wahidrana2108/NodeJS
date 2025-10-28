//core modules
const path = require("path");

//external modules
const express = require("express");
const bodyParser = require("body-parser");

//local modules
const rootDir = require("./utils/pathUtils");

const homeRouter = require("./routes/homeRouter");
const contactHandler = require("./routes/contactRouter");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded());

app.use(homeRouter);
app.use(contactHandler);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});
