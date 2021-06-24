console.log("Welcome to Home page");
// Single-line comment
/* 
    Multi-line comment 
*/

// 3 types of popups in JS.
alert("Nice to meet you");
confirm("Do you want to continue?");
var myName = prompt("What is your name?");

console.log("Your name: " + myName);

var myString = "my string";
var myNumber = 5;
var myBoolean = true;

var myVar = "GLOBAL";

function funScope(){
    console.log(myVar); // undefined  --> Because funScope - myVar variable is considered. (Local scope)
    var myVar = "LOCAL";
    console.log(myVar); // LOCAL
}
console.log(myVar); // GLOBAL
funScope();
console.log(myVar); // GLOBAL
