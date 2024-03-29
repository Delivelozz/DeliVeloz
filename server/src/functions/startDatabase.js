const axios = require("axios");
const { Product, CategoryProduct, SubCategoryProduct} = require("../db.js")

const startDatabase = async () => {
  try {
    //+ GUARDAR CATEGORIAS Y SUBCATEGORIAS DE PRODUCTOS EN LA BASE DE DATOS
    const endPointCategory = "http://localhost:5000/category"
    const { data: categoriesData } = await axios.get(endPointCategory);
    // Iteramos sobre cada categoría y sus subcategorías
    // Iteamos primero sobre las categorias
    for (const category of categoriesData) {
      //Buscar la categoría por nombre para ver si existe
      let existingCategory = await CategoryProduct.findOne({ 
        where: { name: category.name } 
      });
      // Si no existe, crearla en la base de datos
      if (!existingCategory) {
        existingCategory = await CategoryProduct.create({ 
          name: category.name 
        });
      }
      // Iteramos sobre las subcategorías de la categoría actual
      for (const subcategory of category.subcategories) {
        //Buscar la subcategoría por nombre para ver si existe
        let existingSubCategory = await SubCategoryProduct.findOne({ 
          where: { name: subcategory } 
        });
        // Si no existe, crearla en la base de datos
        if (!existingSubCategory) {
          existingSubCategory = await SubCategoryProduct.create({ 
            name: subcategory, 
            categoryProductId: existingCategory.id 
          });
        } else {
          // Actualizar la subcategoría si es necesario
          await existingSubCategory.update({
            name: subcategory,
            categoryProductId: existingCategory.id,
          });
        }
      }
    }
    console.log("Categorias y subcategorias creadas correctamente");
    //+ GUARDAR PRODUCTOS EN LA BASE DE DATOS
    const endPointProducts = "http://localhost:5000/products" 
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
    // Confirmar que los datos se guardaron correctamente
    console.log("Datos guardados correctamente");
  } catch (error) {
    console.error("Error al hacer la peticion o guardar los datos: ", error);
  }
};

module.exports = startDatabase;
