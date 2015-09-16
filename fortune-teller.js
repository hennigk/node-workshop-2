var randomFortune = require("./library/fortune.js");

if (process.argv[2] !== undefined) {
    console.log("You selected to receive " + process.argv[2] + " fortunes!"); 
    console.log(""); //nicer output of the fortunes
    
    for (var i=0; i <= process.argv[2]; i++) {
        console.log(randomFortune());
        console.log(""); //nicer output of the fortunes
    }
}

console.log(randomFortune());


/*// print process.argv

process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});


This will generate:

$ node process-2.js one two=three four

0: node
1: /Users/mjr/work/node/process-2.js
2: one
3: two=three
4: four

Try to get that last 5 command-line argument from the process.argv array
Using this argument, output the number of fortunes requested by the user

*/
