//a function that takes returns the first character of a string
//using continuation passing style

var testString = "This is my string to text functions";

function displayFunc(varToDisplay){
    console.log(varToDisplay);
}

function getFirstChar(stringInput, retFirstChar){
    retFirstChar(stringInput.charAt(0));    
}

function getLastChar(stringInput, retLastChar) {
    var lastChar = stringInput.charAt(stringInput.length - 1);
    retLastChar(lastChar);
}

function getFirstAndLast(stringInput, retNewString){
    var firstLetter = "";
    var lastLetter = "";
    getFirstChar(stringInput, function(letter1) {
        firstLetter = letter1;
        getLastChar(stringInput, function(letter2) {
            lastLetter = letter2; 
        });
    });
    var newString = firstLetter + lastLetter;
    retNewString(newString);
}


//getFirstChar(testString, displayFunc);
//getLastChar(testString, displayFunc);
//getFirstAndLast(testString, displayFunc);

//link randomFortune to library
var randomFortune = require("./library/fortune.js");
console.log(randomFortune())

