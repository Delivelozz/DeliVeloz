const { Product, SubCategoryProduct} = require('../../db');

const editProductController = async ({id}, {name, description, price, category, subCategory, image}) => {

  const subcategory = await SubCategoryProduct.findOne({ where: { name: subCategory } });

  const editProduct = await Product.update({
    name,
    description,
    price,
    category,
    subCategory,
    image,
    subCategoryProductId: subcategory.id
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