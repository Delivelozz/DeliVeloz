const { Router } = require("express");
const subCategoriesRouter = Router();

// import hadlers
const getSubCategoriesHandler = require('../handlers/subcategories/getSubCategoriesHandler');
const createSubCategoryHandler = require('../handlers/subcategories/createSubCategoryHandler');
const deleteSubCategoryHandler = require('../handlers/subcategories/deleteSubCategoryHandler');

// use handlers
// Obtener todas las categorias
subCategoriesRouter.get("/", getSubCategoriesHandler);
// Crear Categoria
subCategoriesRouter.post("/", createSubCategoryHandler);
// Eliminar Categoria
subCategoriesRouter.delete("/:id", deleteSubCategoryHandler);

module.exports = subCategoriesRouter;