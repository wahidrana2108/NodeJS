const sumHandler = (req, res) => {
  const cont = [];
  req.on("data", (chuck) => cont.push(chuck));
  req.on("end", () => {
    const row = Buffer.concat(cont).toString();
    const param = new URLSearchParams(row);
    const data = Object.fromEntries(param);
    const result = Number(data.first) + Number(data.second);

    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Calculator App</title>
        </head>
        <body>
            <h1>The sum is ${result}</h1>
            <a href='/calculator'>Go To Calculator</a>    
        </body>
        </html>
      `);
    return res.end();
  });
};

exports.sumHandler = sumHandler;
