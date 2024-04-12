const { Router } = require("express");
const orderRouter = Router();

// Importar handlers
const createOrderHandler = require("../handlers/order/createOrderHandler");
// Usar handlers
// Crear pedido
orderRouter.post("/", createOrderHandler);

module.exports = orderRouter;
