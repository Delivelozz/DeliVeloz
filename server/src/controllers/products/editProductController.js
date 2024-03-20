const { Product } = require('../../db');

const editProductController = async ({id}, {name, description, price, category, image}) => {
  const editProduct = await Product.update({
    name,
    description,
    price,
    category,
    image,
  },{ 
    where: {
        id: parseInt(id, 10) // Asegúrate de que el ID sea un número
    }
  });

  if (editProduct) {
      return { message: 'Producto actualizado exitosamente' };
  } else {
      return { message: 'Producto no encontrado o no se realizaron cambios' };
  }
  }

module.exports = editProductController;