const { Router } = require ("express");
const mercadoPagoRouter = Router(); 

// Importar handlers
const mercadoPagoHandler = require("../handlers/mercadoPago/mercadoPagoHandler");

// Usar handlers
// Genera el pago
mercadoPagoRouter.post("/create_preference", mercadoPagoHandler)

module.exports = mercadoPagoRouter;
