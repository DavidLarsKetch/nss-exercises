const outputTarget = document.getElementById("output-target");
const textInputField = document.getElementById("keypress-input");
const guineaPig = document.getElementById("guinea-pig");

document.body.addEventListener("click", event => {
  let clickTarget = event.target;
  if (clickTarget.localName === "section") {
    outputTarget.innerHTML = `You clicked on the ${clickTarget.innerHTML} section`;
  }
  if (clickTarget.id === "add-color") {
    guineaPig.classList.add("blue-text");
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

textInputField.addEventListener("keyup", event => {
  outputTarget.innerHTML = textInputField.value;
});
