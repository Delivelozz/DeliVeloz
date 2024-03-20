const { Producto } = require('../../db');
const { Op } = require('sequelize');

const getProductsByNameController = async (name) => {
  const allProductsByName = await Producto.findAll({
    where: {
      name: {
          [Op.iLike]: '%' + name + '%' 
      }
    }
  });

  return allProductsByName;
}

module.exports = getProductsByNameController;