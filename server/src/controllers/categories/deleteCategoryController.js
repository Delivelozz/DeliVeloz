const {CategoryProduct} = require('../../db');

const deleteCategoryController = async (id) => {
  //Obtiene la categoria por id y la elimina
  const category = await CategoryProduct.findByPk(id);
  if(!category){
      throw new Error ("No se encontró la categoria especificada")
  }
  await category.destroy();
  
  return {message: "Categoria eliminada correctamente"};
}

module.exports = deleteCategoryController;