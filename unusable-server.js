var http = require("http");

var requestListener = function (request, response) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < 10000) {
        response.writeHead(200);
        response.end("hello world");
    }
};


console.log("Server is listening");

var server = http.createServer(requestListener);
server.listen(process.env.PORT, process.env.IP);

