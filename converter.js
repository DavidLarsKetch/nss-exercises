function toCelsius () {
const clearDisplay = document.getElementById("clearInput");
const tempDisplay = document.getElementById("tempDisplay");
const tempInput = document.getElementById("tempInput");
const tempOutput = document.getElementById("tempOutput");
const outputF = document.getElementById("outputF");
const outputC = document.getElementById("outputC");

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
