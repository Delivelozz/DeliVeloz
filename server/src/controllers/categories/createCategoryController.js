const {CategoryProduct} = require('../../db');

const createCategoryController = async ({name, subcategory}) => {
    //Crea una nueva categoria en la BDD
    const newCategory = await CategoryProduct.create({
      name,
      subcategory
  });

  return newCategory;
}

module.exports = createCategoryController;