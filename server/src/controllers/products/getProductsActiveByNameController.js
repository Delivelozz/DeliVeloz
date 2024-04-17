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

  const order = allProductsByName.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // Convertir a mayúsculas para asegurar la comparación sin importar mayúsculas o minúsculas
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1; // Retorna un número negativo si el nombre de 'a' es menor que el de 'b'
    }
    if (nameA > nameB) {
      return 1; // Retorna un número positivo si el nombre de 'a' es mayor que el de 'b'
    }
    return 0; // Retorna 0 si son iguales
  });

  return order;
}

module.exports = getProductsActiveByNameController;