const {SubCategoryProduct} = require('../../db');

const createSubCategoryController = async ({name, categoryProductId}) => {
    //Crea una nueva categoria en la BDD
    const newSubCategory = await SubCategoryProduct.create({
      name,
      categoryProductId
  });

  return newSubCategory;
}

module.exports = createSubCategoryController;