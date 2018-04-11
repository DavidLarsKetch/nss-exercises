"use strict";

const applyDiscount = event => {
  let season = event.target.value.toLowerCase();
  const cardElms = document.getElementsByClassName("card");

  [...cardElms].map( item => {
    let discountElmClasses = item.lastChild.classList;
    let regularElmClasses = item.children[2].classList;
    
    if ([...discountElmClasses].indexOf(season) > -1) {
      discountElmClasses.toggle("hidden");
      regularElmClasses.toggle("hidden");
    } else {
      regularElmClasses.remove("hidden");
      discountElmClasses.add("hidden");
    }
  });
};

const selector = document.getElementById("selector").addEventListener("change", applyDiscount);
