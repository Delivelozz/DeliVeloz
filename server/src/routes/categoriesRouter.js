const { Router } = require("express");
const categoriesRouter = Router();

// import hadlers
const getCategoriesHandler = require('../handlers/categories/getCategoriesHandler');
const createCategoryHandler = require('../handlers/categories/createCategoryHandler');
const deleteCategoryHandler = require('../handlers/categories/deleteCategoryHandler');

// use handlers
// Obtener todas las categorias
categoriesRouter.get("/", getCategoriesHandler);
// Crear Categoria
categoriesRouter.post("/", createCategoryHandler);
// Eliminar Categoria
categoriesRouter.delete("/:id", deleteCategoryHandler)

module.exports = categoriesRouter;