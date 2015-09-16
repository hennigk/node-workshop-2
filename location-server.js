//for this to work properly the user must enter npm install on their
//comand line.

var http = require("http");
var request = require('request');

var server = http.createServer(function(req, response) {
    response.writeHead(200);
    if (req.url !== "/favicon.ico"){  
        var userCity = req.url.substring(1);
        var httpRequest = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userCity + "&key=AIzaSyCyJgwsFhRRPWDik2jba7YRWU45soLDtwY";
        request(httpRequest, function(err, res, body) {
            if (err) {
                response.end('Sorry, try again! There was an error:' + err);           
            }
        var data = JSON.parse(body);
        var firstResult = data.results[0]
        if (firstResult) {
            var lat1 = data.results[0].geometry.location.lat;
            var long1 = data.results[0].geometry.location.lng;
            response.write(" \n Your city is: " + userCity) ;
            response.write(" \n Your latitude is: " + lat1.toString()) ;
            response.write("\n Your longitude is: " + long1.toString());
            response.end();
        }
        else {
        response.write('Sorry there are no results');
        response.end();    
        }
    });  
    }
});

server.listen(process.env.PORT, process.env.IP);
