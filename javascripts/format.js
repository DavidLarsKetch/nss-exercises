"use strict";

// While looping through each product, loop through categories and find the department name that
// matches the product_id of product_id

const displayData = require("./display.js");

const productsLooper = (products, categories) => {
  products.forEach( item => categoriesLooper(item, categories));
  displayData(products);
};

const categoriesLooper = (item, categories) => {
  categories.forEach( category => matcher(item, category));
};

const matcher = (item, category) => {
  if (item.category_id === category.id) {
    item.department = category.name;
    item.season = category.season_discount;
    item.discount = Math.round((item.price * 100) - (item.price * 100) * category.discount) / 100;
  }

};

module.exports = productsLooper;
