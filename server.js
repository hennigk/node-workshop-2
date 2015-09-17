var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE 'html'>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Kayla's Server</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("<h1>Hello World!</h1>");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(process.env.PORT, process.env.IP);

