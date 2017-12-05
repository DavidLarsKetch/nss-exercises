const outputTarget = document.getElementById("output-target");

document.body.addEventListener("click", event => {
  let clickTarget = event.target
  if (clickTarget.localName === "section") {
    outputTarget.innerHTML = `You clicked on the ${clickTarget.innerHTML} section`;
  }
});
