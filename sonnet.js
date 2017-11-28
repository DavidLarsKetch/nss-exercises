let sonnet = document.getElementById("sonnet").innerHTML;
console.log(sonnet.search("orphans"));
console.log(sonnet.length);
sonnet = sonnet.replace("winter", "yuletide");
console.log(sonnet);
sonnet = sonnet.replace(/\sthe\s/gi, " a large ");
console.log(sonnet);
document.getElementById("sonnet").innerHTML = sonnet;
