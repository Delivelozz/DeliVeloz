const axios = require("axios");
const { Product, CategoryProduct, SubCategoryProduct} = require("../db.js")

const startDatabase = async () => {
  try {
    //+ GUARDAR CATEGORIAS EN LA BASE DE DATOS
    const { data: categoriesData } = await axios.get("http://localhost:5000/category");
  
    for (const category of categoriesData) {
      let existingCategory = await CategoryProduct.findOne({ where: { name: category.name } });
      if (!existingCategory) {
        existingCategory = await CategoryProduct.create({ name: category.name });
      }
      for (const subcategory of category.subcategories) {
        let existingSubCategory = await SubCategoryProduct.findOne({ where: { name: subcategory } });
        if (!existingSubCategory) {
          existingSubCategory = await SubCategoryProduct.create({ name: subcategory, categoryProductId: existingCategory.id });
        } else {
          // Actualizar la subcategoría si es necesario
          await existingSubCategory.update({
            name: subcategory,
            categoryProductId: existingCategory.id,
          });
        }
      }
    }
    //+ GUARDAR PRODUCTOS EN LA BASE DE DATOS
    const { data: productsData } = await axios.get("http://localhost:5000/products");

    // Crear o actualizar los productos en la base de datos
    for (const product of productsData) {
      const existingProduct = await Product.findOne({ where: { name: product.name } });
      if (!existingProduct) {
        // Buscar la subcategoría por nombre
        const subcategory = await SubCategoryProduct.findOne({ where: { name: product.subCategory } });
        const category = await CategoryProduct.findOne({ where: { id: subcategory.categoryProductId } });
        if (subcategory) {
          await Product.create({
            name: product.name || "undefined",
            description: product.description || "undefined",
            price: product.price || "undefined",
            category: category.name || "undefined",
            subCategory: product.subCategory || "undefined", // Utiliza el nombre de la subcategoría encontrada
            subCategoryProductId: subcategory.id, // Utiliza el ID de la subcategoría encontrada
            image: product.image || {},
            availability: product.availability || false,
          });
        } else {
          console.error(`Subcategoría no encontrada para el producto: ${product.name}`);
        }
      } else {
        // Si el producto ya existe, actualizarlo con los nuevos datos
        // Buscar la subcategoría por nombre
        const subcategory = await SubCategoryProduct.findOne({ where: { name: product.subCategory } });
        if (subcategory) {
          await existingProduct.update({
            description: product.description || "undefined",
            price: product.price || "undefined",
            subCategoryProductId: subcategory.id, // Actualiza el ID de la subcategoría encontrada
            image: product.image || {},
            availability: product.availability || false,
          });
        } else {
          console.error(`Subcategoría no encontrada para el producto: ${product.name}`);
        }
      }
    }
    console.log("Datos guardados correctamente");
  } catch (error) {
    console.error("Error al hacer la peticion o guardar los datos: ", error);
  }


};

module.exports = startDatabase;
