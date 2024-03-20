const { Router } = require("express");
const productsRouter = Router();

// import hadlers
const getProductsHandler = require('../handlers/products/getProductsHandler');
const getProductByIdHandler = require('../handlers/products/getProductByIdHandler');
const createProductHandler = require('../handlers/products/createProductHandler');
const editProductHandler = require('../handlers/products/editProductHandler');
/* const desactProductHandler = require('../handlers/products/desactProductHandler');
 */
// use handlers
// Obtener todos los Productos
productsRouter.get("/", getProductsHandler);
// Obtener Producto Por ID
productsRouter.get("/:id", getProductByIdHandler);
// Crear Producto
productsRouter.post("/", createProductHandler);
// Editar Producto
productsRouter.patch("/:id", editProductHandler);
// Desactivar Producto
/* productsRouter.delete("/:id/:value", desactProductHandler); */

module.exports = productsRouter;