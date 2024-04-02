// categoriesAndSubcategories.js
const axios = require("axios");
const { CategoryProduct, SubCategoryProduct } = require("../db.js");

const fetchCategoriesAndSubcategories = async () => {
 const endPointCategory = "http://localhost:5000/category";
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
};

module.exports = { fetchCategoriesAndSubcategories };