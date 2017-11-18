var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
for (let i = 0; i < reindeer.length; i++){
  divElement = document.createElement("div");
  textNode = document.createTextNode(colors[i] + " " + reindeer[i]);
  divElement.appendChild(textNode);
  hohohoElement.appendChild(divElement);
}
