const { Router } = require("express");
const productsRouter = Router();

// import hadlers
const getProductsHandler = require('../handlers/products/getProductsHandler');
const getProductsActiveHandler= require('../handlers/products/getProductsActiveHandler');
const getProductByIdHandler = require('../handlers/products/getProductByIdHandler');
const createProductHandler = require('../handlers/products/createProductHandler');
const editProductHandler = require('../handlers/products/editProductHandler');
const desactProductHandler = require('../handlers/products/desactProductHandler');
const deleteProductHandler= require('../handlers/products/deleteProductHandler');

// use handlers
// Obtener todos los Productos
productsRouter.get("/", getProductsHandler);
// Obtener todos los Productos activos
productsRouter.get("/active", getProductsActiveHandler);
// Obtener Producto Por ID
productsRouter.get("/:id", getProductByIdHandler);
// Crear Producto
productsRouter.post("/", createProductHandler);
// Editar Producto
productsRouter.patch("/:id", editProductHandler);
// Desactivar - Activar Producto
productsRouter.put("/:id/:value", desactProductHandler)
//Borrar Producto
productsRouter.delete("/:productId", deleteProductHandler);

module.exports = productsRouter;