const data = require("./fetchItems.json");

const { items } = data;

const itemsToClick = Object.keys(items)
  .slice(4)
  .reduce((acc, item) => [...acc, items[item][0][0], items[item][0][1]], []);

console.log(JSON.stringify(itemsToClick));
