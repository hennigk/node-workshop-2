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
