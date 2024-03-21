const { Product } = require("../../db.js");

const getProductsAllController = async () =>{
  const data = await Product.findAll();
  return data;
}

module.exports = getProductsAllController