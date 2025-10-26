const { sumHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html lang='en'>
      <head>
          <meta charset='UTF-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <title>Calculator App</title>
      </head>
      <body>
          <h1>Welcome to Calculator App</h1>
          <a href='/calculator'>GO To Calculator</a>    
      </body>
      </html>
    `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html lang='en'>
      <head>
          <meta charset='UTF-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <title>Calculator App</title>
      </head>
      <body>
          <h1>Make Your Calculation</h1>
          <form action="/calculate-result" method="POST">
            <input type="number" name="first" placeholder="Enter number 1">
            <input type="number" name="second" placeholder="Enter number 1">
            <button type="submit">Result</button>
          </form>
          
          <a href='/'>Back To Home</a>    
      </body>
      </html>
    `);
    return res.end();
  } else if (req.url === "/calculate-result") {
    sumHandler(req, res);
  } else {
    res.setHeader("Content-Type", "text/html");
    const result = 5;
    res.write(`
      <html lang='en'>
      <head>
          <meta charset='UTF-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <title>Calculator App</title>
      </head>
      <body>
          <h1>Error 404: Page not found</h1>
          <a href='/'>Back To Home</a>     
      </body>
      </html>
    `);
    return res.end();
  }
};

exports.requestHandler = requestHandler;
