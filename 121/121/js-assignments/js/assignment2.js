let firstName = prompt("Let's play the sum game.\n" + "Please enter your name", "First name"); //creates varible for name - prompt that takes user input
let numOne = parseInt(prompt("Enter first number")); //creates varible for first number - prompt that takes user input number 
let numTwo = parseInt(prompt("Enter second number")); //creates varible for second number - prompt that takes user input number 
let sum = numOne + numTwo; //take user input numbers and adds them together



if (firstName != null) {

    document.getElementById("sumGame").innerHTML =

        "Hi, " + firstName + "! The sum of " + numOne + " + " + numTwo + " is " + sum;

};