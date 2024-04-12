const { Router } = require("express");
const orderRouter = Router();

// Importar handlers
const postOrderHandler = require("../handlers/order/postOrderHandlers");
const deleteOrderHandler = require("../handlers/order/deleteOrderHandlers");
// Usar handlers
// Crear pedido
orderRouter.post("/", postOrderHandler);
// Eliminar pedido por Id
orderRouter.delete("/:id", deleteOrderHandler);


module.exports = orderRouter;
