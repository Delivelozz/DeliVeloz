const { Product } = require('../../db');
const { Op } = require('sequelize');

const getProductsByNameController = async (name) => {
  const allProductsByName = await Product.findAll(
    {
      where: {
          name: {
              [Op.iLike]: `%${name}%` 
          }
      }
  }
  );

  // const allProductsByNameDBFilter = allProductsByName.length !== 0 ? allProductsByName.filter((product)=>product.name.toLowerCase().includes(name.toLowerCase())) : [];

  return allProductsByName;
}

module.exports = getProductsByNameController;