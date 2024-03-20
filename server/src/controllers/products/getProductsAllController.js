const { Producto } = require("../../db.js");

const getProductsAllController = async () =>{
  const data = await Producto.findAll();
  return data;
}

module.exports = getProductsAllController