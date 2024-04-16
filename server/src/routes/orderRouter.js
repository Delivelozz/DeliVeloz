const { Router } = require("express");
const orderRouter = Router();

// Importar handlers
const createOrderHandler = require("../handlers/order/createOrderHandler");
const getOrderHandler = require("../handlers/order/getOrderHandler");
const getOrdersUserHandler = require("../handlers/order/getOrdersUserHandler");
const emailOrderHandler = require("../handlers/order/emailOrderHandler");

// Usar handlers
// Crear pedido
orderRouter.post("/", createOrderHandler);
// Obtener pedido
orderRouter.get("/:idUser/:idPedido", getOrderHandler);
// Obtener pedidos
orderRouter.get("/:idUser", getOrdersUserHandler);
// Enviar Email
orderRouter.post("/:idUser/:orderStatus", emailOrderHandler);

module.exports = orderRouter;
