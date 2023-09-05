const itemsProduct = require("../database/db.json");
const getAllItems = (req, res) => {
  const allItems = itemsProduct.getAllItems();
  res.send({ status: "OK", data: allItems });
};

const getOneItems = (req, res) => {
  const item = itemsProduct.getOneItems();
  res.send("Get an existing Item");
};

const createNewItems = (req, res) => {
  const createItem = itemsProduct.createNewItems();
  res.send("Create a new Item");
};

const updateOneItems = (req, res) => {
  const updateItem = itemsProduct.updateOneItems();
  res.send("Update an existing Item");
};

const deleteOneItems = (req, res) => {
  itemsProduct.deleteOneItems();
  res.send("Delete an existing Item");
};

module.exports = {
  getAllItems,
  getOneItems,
  createNewItems,
  updateOneItems,
  deleteOneItems,
};
