// products.js
const axios = require("axios");
const { Product, SubCategoryProduct, CategoryProduct } = require("../db.js");

const fetchProducts = async () => {
 const endPointProducts = "http://127.0.0.1:5000/products";
 const { data: productsData } = await axios.get(endPointProducts);
 // Iteramos sobre cada producto y sus subcategorías
  // Iteamos primero sobre los productos
  for (const product of productsData) {
    // Buscar el producto por nombre para ver si existe en la base de datos.
    const existingProduct = await Product.findOne({ 
      where: { name: product.name } 
    });
    // Si no existe, crearlo en la base de datos.
    if (!existingProduct) {
      // Buscar la subcategoría por nombre
      const subcategory = await SubCategoryProduct.findOne({ 
        where: { name: product.subCategory } 
      });
      // Buscar la categoría por ID de la subcategoría.
      const category = await CategoryProduct.findOne({ 
        where: { id: subcategory.categoryProductId } 
      });
      // Si la subcategoría existe, crear el producto en la base de datos.
      if (subcategory) {
        await Product.create({
          name: product.name || "undefined",
          description: product.description || "undefined",
          price: product.price || "undefined",
          // Utiliza el nombre de la categoría encontrada
          category: category.name || "undefined",
          // Utiliza el nombre de la subcategoría encontrada
          subCategory: product.subCategory || "undefined", 
          // Utiliza el ID de la subcategoría encontrada
          subCategoryProductId: subcategory.id, 
          image: product.image || {},
          availability: product.availability || false,
        });
      } else {
        // Si la subcategoría no existe, imprime un mensaje de error.
      console.error(
          `Subcategoría no encontrada para el producto: ${product.name}`
        );
      }
    } else {
      // Si el producto ya existe, actualizarlo con los nuevos datos
      // Buscar la subcategoría por nombre
      const subcategory = await SubCategoryProduct.findOne({ 
        where: { name: product.subCategory } 
      });
      // Actualizar los datos del producto con los nuevos datos.
      if (subcategory) {
        await existingProduct.update({
          description: product.description || "undefined",
          price: product.price || "undefined",
          // Actualiza el ID de la subcategoría encontrada
          subCategoryProductId: subcategory.id, 
          image: product.image || {},
          availability: product.availability || false,
        });
      } else {
        // Si la subcategoría no existe, imprime un mensaje de error.
        console.error(
          `Subcategoría no encontrada para el producto: ${product.name}`
        );
      }
    }
  }
};

module.exports = { fetchProducts };