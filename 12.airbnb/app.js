//code modules
const path = require("path");

//external module
const express = require("express");

//local module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: '404 - Airbnb' });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
