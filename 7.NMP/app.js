const http = require("http");
const requestHandler = require("./handler");
const runtimeError = require("./runtime");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  requestHandler(req, res);
  runtimeError(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});
