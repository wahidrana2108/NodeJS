//external modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log("First dummy Middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second dummy Middleware", req.url, req.method);
  next();
});
// app.use((req,res, next) =>{
//     console.log("Third Middleware", req.url, req.method);
//     res.send("<p>Welcome to Coding</p>")
//     next()
// });
app.get("/", (req, res, next) => {
  console.log(" / handing", req.url, req.method);
  res.send(`<p>Welcome to /</p>`);
  next();
});
app.get("/contact", (req, res, next) => {
  console.log(" /contact", req.url, req.method);
  res.send(`
              <head>
          <meta charset='UTF-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <title>Calculator App</title>
      </head>
      <body>
          <form action="/contact" method="POST">
            <input type="text" name="name" placeholder="Enter text 1">
            <input type="text" name="email" placeholder="Enter text 1">
            <input type="submit">
          </form>
          
          <a href='/'>Back To Home</a>    
      </body>
      </html>
        `);
  next();
});

app.use(bodyParser.urlencoded());

app.post("/contact", (req, res, next) => {
  console.log(" /contact post", req.url, req.method, req.body);
  res.send(`<h1>We will contact you shortly<h1>`);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});
