const textInput = document.getElementById("textInput");

const cardMaker = (str) => {
  const cardCreate = document.getElementById("cardCreate");
  const cardHolder = document.getElementById("cardHolder");
  
  const card = document.createElement("div");
  const textBody = document.createElement("div");
  const deleteButton = document.createElement("button");

  card.className = "card";
  textBody.className = "card-text";
  deleteButton.className = "delete";
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("name", "delete");

  const cardTextNode = document.createTextNode(str);
  const deleteTextNode = document.createTextNode("Delete");

  cardHolder.appendChild(card);
  card.appendChild(textBody);
  textBody.appendChild(cardTextNode);
  card.appendChild(deleteButton);
  deleteButton.appendChild(deleteTextNode);

}

document.body.addEventListener("click", event => {
  const clickTarget = event.target;
  if (clickTarget.id === "cardCreate" && textInput.value !== "") {
    cardMaker(textInput.value)
    textInput.value = "";
  } else if (clickTarget.name === "delete") {
    clickTarget.parentElement.remove();
  }
});
