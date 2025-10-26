const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/" || req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Shop</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/men'>Men</a></li>
        <li><a href='/women'>Women</a></li>
        <li><a href='/kid'>Kid</a></li>
        <li><a href='/cart'>🛒</a></li>
      </ul>
    </nav>

    <h1>Welcome to Home</h1>
  </body>
</html>
`);
    return res.end();
  } else if (
    req.url === "/men" ||
    req.url === "/women" ||
    req.url === "/kid" ||
    req.url === "/cart"
  ) {
    let show = req.url.slice(1);
    res.setHeader("Content-Type", "text/html");
    res.write(`
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Shop</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/men'>Men</a></li>
        <li><a href='/women'>Women</a></li>
        <li><a href='/kid'>Kid</a></li>
        <li><a href='/cart'>🛒</a></li>
      </ul>
    </nav>

    <h1>Welcome to ${show.toUpperCase()}</h1>
  </body>
</html>
`);
    return res.end();
  } else {
    res.write(`
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Shop</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/men'>Men</a></li>
        <li><a href='/women'>Women</a></li>
        <li><a href='/kid'>Kid</a></li>
        <li><a href='/cart'>🛒</a></li>
      </ul>
    </nav>
    <h1>Error 404 page not found</h1>
  </body>
</html>`);
    return res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
