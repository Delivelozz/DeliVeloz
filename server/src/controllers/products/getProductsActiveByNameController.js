const { Product } = require('../../db');
const { Op } = require('sequelize');

const getProductsActiveByNameController = async (name) => {
  const allProductsByName = await Product.findAll(
    {
      where: {
          name: {
              [Op.iLike]: `%${name}%` 
          },
          availability: true
      }
  }
  );

  return allProductsByName;
}

module.exports = getProductsActiveByNameController;