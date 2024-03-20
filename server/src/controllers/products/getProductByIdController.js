const { Product } = require("../../db.js");

const getProductByIdController = async (id) =>{
  const product = await Product.findByPk(id);
  return product;
}

module.exports = getProductByIdController;