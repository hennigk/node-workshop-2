var http = require("http");
var randomFortune = require("./library/fortune.js");

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(randomFortune());
  response.end();
});

server.listen(process.env.PORT, process.env.IP);
console.log("Server is listening");