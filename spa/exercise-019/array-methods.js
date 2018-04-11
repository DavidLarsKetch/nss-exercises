var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
planets.forEach(item => el.innerHTML += `<div>${item}</div>`);
// Use the map method to create a new array where the first letter of each planet is capitalized
let capPlanets = planets.map(item => item[0].toUpperCase() + item.slice(1));
console.log(capPlanets);
// Use the filter method to create a new array that contains planets with the letter 'e'
let ePlanets = planets.filter(item => {
  if (item.indexOf("e") > -1) {
    return item;
  }
});
console.log(ePlanets);
// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
let str = words.reduce((a, b) => `${a} ${b}`);
console.log(str);
