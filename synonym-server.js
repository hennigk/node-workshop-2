//http://words.bighugelabs.com/api/2/7ec1db38be2bf9e9685a75e32f94a75d/word/json

//for this to work properly the user must enter npm install on their
//comand line.

var http = require("http");
var request = require('request');

var server = http.createServer(function(req, response) {
    response.writeHead(200);
    if (req.url !== "/favicon.ico"){  
        var userWord = req.url.substring(1);
        var httpRequest = "http://words.bighugelabs.com/api/2/7ec1db38be2bf9e9685a75e32f94a75d/" + userWord + "/json";
        request(httpRequest, function(err, res, body) {
            if (err) {
                response.end('Sorry, try again! There was an error:' + err);           
            }
        var thesaurus = JSON.parse(body);
        response.write(" \n Synonyms of: " + userWord.toLowerCase());
        if ((thesaurus.hasOwnProperty('adjective')) && (thesaurus.adjective.hasOwnProperty('syn'))) {
            response.write("\n\n ADJECTIVES: \n");
            for (var i = 0; i < thesaurus.adjective.syn.length; i++) {
                response.write("\n #" + i + " " + thesaurus.adjective.syn[i]);
            }
        }
        if ((thesaurus.hasOwnProperty('verb')) && (thesaurus.verb.hasOwnProperty('syn'))) {
            response.write("\n\n VERBS: \n");
            for (var i = 0; i < thesaurus.verb.syn.length; i++) {
                response.write("\n #" + i + " " + thesaurus.verb.syn[i]);
            }
        }
        if ((thesaurus.hasOwnProperty('noun')) && (thesaurus.noun.hasOwnProperty('syn'))) {
            response.write("\n\n NOUNS \n");
            for (var i = 0; i < thesaurus.noun.syn.length; i++) {
                response.write("\n #" + i + " " + thesaurus.noun.syn[i]);
            }
        }
        else {
            response.write("There are no synonyms for your word!");
        }
        response.end();    
        });  
    }
});

server.listen(process.env.PORT, process.env.IP);
