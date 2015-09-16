var http = require("http");

var requestListener = function (request, response) {
    setTimeout(function(){
        response.writeHead(200);
        response.end("hello world");
    }, 10000);
};


console.log("Server is listening");

var server = http.createServer(requestListener);
server.listen(process.env.PORT, process.env.IP);

/*
http.createServer(function (request, response) {
  console.log('New request @ ' + request.url);
  setTimeout(function () {
    console.log('Time is up');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('Hello World\n');
  }, 3000);
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');*/