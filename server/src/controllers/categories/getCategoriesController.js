const {CategoryProduct} = require('../../db');

const getCategoriesController = async () => {
    //Obtiene todas las categorias de la BDD
    const allCategoriesBDD = await CategoryProduct.findAll();
      return allCategoriesBDD;
}

module.exports = getCategoriesController;