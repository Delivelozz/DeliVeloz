const { Producto } = require('../../db');
const { Op, Sequelize } = require('sequelize');

const getProductsByNameController = async (name) => {
  const allProductsByName = await Producto.findAll({
    where: {
      nombre: {
          [Op.like]: Sequelize.literal(`LOWER('%${name}%')`) 
      }
    }
  });

  return allProductsByName;
}

module.exports = getProductsByNameController;