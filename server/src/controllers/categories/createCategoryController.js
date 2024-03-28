const {CategoryProduct} = require('../../db');
// subcategoria?
const createCategoryController = async ({name}) => {
    //Crea una nueva categoria en la BDD
    const newCategory = await CategoryProduct.create({
      name
  });

  return newCategory;
}

module.exports = createCategoryController;