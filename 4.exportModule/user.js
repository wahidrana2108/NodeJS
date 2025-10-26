const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>server page</title></head>");
    res.write("<body>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter Username"><br>'
    );
    res.write('<label for="gender"> Gender: </label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male"> male </label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female"> female </label><br><br><br>');
    res.write('<button type="submit">submit </button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/pro") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>server page</title></head>");
    res.write("<body><h1>this are our latest products</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const row = [];

    req.on("data", (chunk) => {
      row.push(chunk);
    });

    req.on("end", () => {
      const data = row.concat().toString();

      const param = new URLSearchParams(data);

      const obj = Object.fromEntries(param);

      console.log(obj);
      fs.writeFileSync("user.txt", JSON.stringify(obj));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else {
    {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>server page</title></head>");
      res.write("<body><h1>error 404: page not found</h1></body>");
      res.write("</html>");
      return res.end();
    }
  }
};



module.exports = requestHandler;