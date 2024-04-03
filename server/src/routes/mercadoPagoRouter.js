const { Router } = require ("express");
const mercadoPagoHandler = require("../handlers/mercadoPago/mercadoPagoHandler");
const mercadoPagoRouter = Router(); 

mercadoPagoRouter.post("/create_preference", mercadoPagoHandler)

module.exports = mercadoPagoRouter;