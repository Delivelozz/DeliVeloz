const {SubCategoryProduct} = require('../../db');

const getSubCategoriesController = async () => {
    //Obtiene todas las subcategorias de la BDD
    const allSubCategoriesBDD = await SubCategoryProduct.findAll();
      return allSubCategoriesBDD;
}

module.exports = getSubCategoriesController;