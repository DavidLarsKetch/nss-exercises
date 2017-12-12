"use strict";
const container = document.getElementById("container");
const cardHolder = document.getElementById("cardHolder");

const display = data => {
  const select = createSelectButton();
  container.appendChild(select);

  data.forEach( item => cardHolder.appendChild(createProductCard(item)));
  container.appendChild(cardHolder);
};

const createProductCard = data => {
  const card = document.createElement("div");
  card.className = "card";

  const itemNameElm = document.createElement("h2");
  const itemNameNode = document.createTextNode(data.name);
  itemNameElm.appendChild(itemNameNode);

  const itemDeptElm = document.createElement("h4");
  const itemDeptNode = document.createTextNode(data.department);
  itemDeptElm.appendChild(itemDeptNode);

  const itemPriceElm = document.createElement("h3");
  const itemPriceNode = document.createTextNode(data.price);
  itemPriceElm.appendChild(itemPriceNode);

  const discountPriceElm = document.createElement("h3");
  const discountPriceNode = document.createTextNode(data.discount);
  discountPriceElm.className = `hidden ${data.season.toLowerCase()} discount`;
  discountPriceElm.appendChild(discountPriceNode);

  card.appendChild(itemNameElm);
  card.appendChild(itemDeptElm);
  card.appendChild(itemPriceElm);
  card.appendChild(discountPriceElm);

  return card;
};

const createSelectButton = () => {

  const select = document.getElementById("selector");

  const seasonOpt = document.createElement("option");
  const seasonNode = document.createTextNode("Season");
  seasonOpt.appendChild(seasonNode);
  seasonOpt.setAttribute("name", "season");

  const springOpt = document.createElement("option");
  springOpt.setAttribute("name", "spring");
  const springNode = document.createTextNode("Spring");
  springOpt.appendChild(springNode);

  const autumnOpt = document.createElement("option");
  autumnOpt.setAttribute("name", "autumn");
  const autumnNode = document.createTextNode("Autumn");
  autumnOpt.appendChild(autumnNode);

  const winterOpt = document.createElement("option");
  winterOpt.setAttribute("name", "winter");
  const winterNode = document.createTextNode("Winter");
  winterOpt.appendChild(winterNode);

  select.appendChild(seasonOpt);
  select.appendChild(springOpt);
  select.appendChild(autumnOpt);
  select.appendChild(winterOpt);

  return select;
};

module.exports = display;
