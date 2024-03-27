const {SubCategoryProduct} = require('../../db');

const deleteSubCategoryController = async (id) => {
  //Obtiene la subcategoria por id y la elimina
  const subCategory = await SubCategoryProduct.findByPk(id);
  if(!subCategory){
      throw new Error ("No se encontró la subcategoria especificada")
  }
  await subCategory.destroy();
  
  return {message: "Subcategoria eliminada correctamente"};
}

module.exports = deleteSubCategoryController;