const { Product } = require('../../db');
const { Op, Sequelize } = require('sequelize');

const getProductsByNameController = async (name) => {
  const allProductsByName = await Product.findAll({
    where: {
      name: {
          [Op.like]: Sequelize.literal(`LOWER('%${name}%')`) 
      }
    }
  });

  return allProductsByName;
}

module.exports = getProductsByNameController;