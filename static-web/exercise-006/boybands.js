var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var bandElement = document.getElementById("boy-bands");

var veggieElement = document.getElementById("vegetables");

for (let i = 0; i < bands.length; i++) {
  bandElement.innerHTML += "<p>" + bands[i] + "</p>";
}
for (let i = 0; i < vegetables.length; i++) {
  veggieElement.innerHTML += "<p>" + vegetables[i] + "</p>";
}

