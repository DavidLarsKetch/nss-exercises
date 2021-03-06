const outputTarget = document.getElementById("output-target");
const textInputField = document.getElementById("keypress-input");
const guineaPig = document.getElementById("guinea-pig");
const buttons = document.getElementsByTagName("button");
const article = document.getElementsByTagName("article");
const articleFirstChild = article[0].children[0];
const articleLastChild = article[0].children[article[0].children.length - 1];

articleFirstChild.classList.add("bold");
articleLastChild.classList.add("bold-italic");

for (let i = 0; i < buttons.length; i++) {
  let button = buttons.item([i]);
  button.classList.add("button-block");
}

document.body.addEventListener("click", event => {
  let clickTarget = event.target;
  if (clickTarget.localName === "section") {
    outputTarget.innerHTML = `You clicked on the ${clickTarget.innerHTML} section`;
  } else if (clickTarget.id === "add-color") {
    guineaPig.classList.add("blue-text");
  } else if (clickTarget.id === "make-large") {
    guineaPig.classList.add("hulkify");
  } else if (clickTarget.id === "add-border") {
    guineaPig.classList.add("pig-border");
  } else if (clickTarget.id === "add-rounding") {
    guineaPig.classList.add("round-border");
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
