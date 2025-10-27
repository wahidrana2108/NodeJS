const http = require("http");
const { requestHandler } = require("./handler");
const PORT = 3000;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});
