const Product = require("../database/product");
const getAllItems = () => {
  const allItems = Product.getAllItems();
  return allItems;
};
const getOneItems = () => {
  return;
};
const createNewItems = () => {
  return;
};
const updateOneItems = () => {
  return;
};
const deleteOneItems = () => {
  return;
};

module.exports = {
  getAllItems,
  getOneItems,
  createNewItems,
  updateOneItems,
  deleteOneItems,
};
