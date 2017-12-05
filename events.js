const outputTarget = document.getElementById("output-target");

document.body.addEventListener("click", event => {
  let clickTarget = event.target;
  if (clickTarget.localName === "section") {
    outputTarget.innerHTML = `You clicked on the ${clickTarget.innerHTML} section`;
  }
});

document.body.addEventListener("mouseover", event => {
  let hoverTarget = event.target;
  if (hoverTarget.localName === "h1") {
    outputTarget.innerHTML = `You moved your mouse over the header.`;
  }
});

document.body.addEventListener("mouseout", event => {
  let mouseoutTarget = event.target;
  if (mouseoutTarget.localName === "h1") {
    outputTarget.innerHTML = `You left me!!`;
  }
});
