const { Product } = require('../../db');
const { Op, Sequelize } = require('sequelize');

const getProductsByNameController = async (name) => {
  const allProductsByName = await Product.findAll();

  const allProductsByNameDBFilter = allProductsByName.length !== 0 ? allProductsByName.filter((product)=>product.name.toLowerCase().includes(name.toLowerCase())) : [];

  return allProductsByNameDBFilter;
}

module.exports = getProductsByNameController;