const DB = require("./db.json");

const getAllItems = () => {
  return DB.products;
};

module.exports = { getAllItems };
