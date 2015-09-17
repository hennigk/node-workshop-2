
var randomFortune = require("./library/fortune.js");

//check to see if an element was given in the command line
if (process.argv[2] !== undefined) {
    console.log("You selected to receive " + process.argv[2] + " fortunes! \n"); 
    //console.log(""); //nicer output of the fortunes
    
    for (var i=0; i <= process.argv[2]; i++) {
        console.log(randomFortune() + "\n");
        //console.log(""); //nicer output of the fortunes
    }
}

console.log(randomFortune());
