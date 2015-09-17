var http = require("http");
var request = require('request');

var server = http.createServer(function(req, response) {
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Location-Image-Server</title>");
    response.write("</head>");
    response.write("<body>");
    
    var userCity = req.url.substring(1);
    var httpRequest = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userCity + "&key=AIzaSyCyJgwsFhRRPWDik2jba7YRWU45soLDtwY";
    
    request(httpRequest, function(err, res, body) {
        if (err) {
            response.end("<p> Sorry, try again! There was an error:" + err + "</p>");           
        }
        
    var data = JSON.parse(body);
    var firstResult = data.results[0]
    
    if (firstResult) {
        var lat1 = firstResult.geometry.location.lat;
        var long1 = firstResult.geometry.location.lng;
        response.write("<h1>" + userCity.toUpperCase() + "</h1>") ;
        response.write("<p>The latitude of " + userCity + " is: " + lat1 + "</p>");
        response.write("<p>The longitude of " + userCity + " is: " + long1 + "</p>");
        
        //creates the Https to request from google static maps API
        var mapsStatic = "https://maps.googleapis.com/maps/api/staticmap?";
        var key = "&key=https://console.developers.google.com/project/dulcet-analyst-107016/apiui/credential"
        var center = "center=" + lat1 +"," + long1
        var zoomSize = "&zoom=12&size=500x400"
        var format = "&format=JPEG"
        var markers = "&markers=color:blue%7Clabel:A%7C"+lat1 +"," +long1
        
        var mapsHTTP = mapsStatic + center + zoomSize + format + markers;
        
        response.write("<img src=" + mapsHTTP + ">");
        response.write("</body>");
        response.write("</html>");
        response.end();
    }
        else {
        response.write("<p> Sorry there are no results </p>");
        response.write("</body>");
        response.write("</html>");
        response.end();
        }
    }); 
});

server.listen(process.env.PORT, process.env.IP);


