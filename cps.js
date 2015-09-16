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
    getFirstChar(stringInput, function(letter){firstLetter = letter});
    getLastChar(stringInput, function(letter){lastLetter = letter});
    var newString = firstLetter + lastLetter
    retNewString(newString);
}




//call function firstChar with a string
//and a function that displays the value
getFirstChar(testString, displayFunc);
getLastChar(testString, displayFunc);
getFirstAndLast(testString, displayFunc);

/*Create a function that takes a string and a continuation (callback)
Your function should use the two previous functions you 
created to "return" a string that contains both the first and 
last character of the initial string
I should be able to use your function as such:
getFirstAndLast("hello", function(newStr) { console.log(newStr); }); 
// should output "ho"*/

