"use strict";
const catContainer = document.getElementById("catFood");
const dogContainer = document.getElementById("dogFood");

const createHeaders = (check) => {
  const tableElm = document.createElement("table");
  const headersRow = document.createElement("tr");
  tableElm.appendChild(headersRow);

  const brandHead = document.createElement("th");
  const brandTextNode = document.createTextNode("Brand");
  headersRow.appendChild(brandHead);
  brandHead.appendChild(brandTextNode);

  if (check) {
    const breedsHead = document.createElement("th");
    const breedsTextNode = document.createTextNode("Breeds");
    headersRow.appendChild(breedsHead);
    breedsHead.appendChild(breedsTextNode);
  }

  const typesHead = document.createElement("th");
  const typesTextNode = document.createTextNode("Types/Prices");
  headersRow.appendChild(typesHead);
  typesHead.appendChild(typesTextNode);

  return tableElm;
}


const createRow = (data, check) => {
  const dataRow = document.createElement("tr");

  const brandCell = document.createElement("td");
  const brandTextNode = document.createTextNode(data.name);
  dataRow.appendChild(brandCell);
  brandCell.appendChild(brandTextNode);

  if (check) {
    let breeds = assembleBreeds(data.breeds);
    const breedsCell = document.createElement("td");
    const breedsTextNode = document.createTextNode(breeds);
    dataRow.appendChild(breedsCell);
    breedsCell.appendChild(breedsTextNode);
  }

  let types = assembleTypes(data.types);
  const typesCell = document.createElement("td");
  const typesTextNode = document.createTextNode(types);
  dataRow.appendChild(typesCell);
  typesCell.appendChild(typesTextNode);

  return dataRow;
}

const assembleBreeds = data => {
  let str = data.join(', ');
  return str;
}

const assembleTypes = data => {
  let str = "";
  data.forEach( item => {
    item.volumes.forEach( item2 => {
      str += `${item.type}, ${item2.name}, $${item2.price}; `;
    })
  })
  return str.slice(0, -2);
}

const printFood = (data, target) => {
  let catCheck = data[0].hasOwnProperty("breeds");
  let table = createHeaders(catCheck);
  target.appendChild(table);
  data.forEach( item => {
    table.appendChild(createRow(item, catCheck));
  });
}

const getDogFood = event => {
  let request = new XMLHttpRequest();
  request.addEventListener("load", event => {
    let parsed = JSON.parse(event.target.responseText);
    let dogArr = parsed.dog_brands;
    printFood(dogArr, dogContainer);
  });
  request.addEventListener("error", failure);
  request.open("GET", "dog.json");
  request.send();
}

const getCatFood = event => {
  let request = new XMLHttpRequest();
  request.addEventListener("load", event => {
    let parsed = JSON.parse(event.target.responseText);
    let catArr = parsed.cat_brands;
    printFood(catArr, catContainer);
  });
  request.addEventListener("error", failure);
  request.open("GET", "cat.json");
  request.send();
}

const failure = data => {
  console.log(`There's been an error`);
}

getDogFood();
getCatFood();
