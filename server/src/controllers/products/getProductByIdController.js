const { Producto } = require("../../db.js");

const getProductByIdController = async (id) =>{
  const product = await Producto.findByPk(id);
  return product;
}

module.exports = getProductByIdController;