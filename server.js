var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello World");
  response.end();
});

server.listen(process.env.PORT, process.env.IP);
console.log("Server is listening");