const { Router } = require ("express");
const mercadoPagoRouter = Router(); 

// Importar handlers
const mercadoPagoHandler = require("../handlers/mercadoPago/mercadoPagoHandler");
const mercadoPagoWebhookHandler = require("../handlers/mercadoPago/mercadoPagoWebhookHandler");
// Usar handlers
// Genera el pago
mercadoPagoRouter.post("/create_preference", mercadoPagoHandler)

mercadoPagoRouter.post("/webhook", mercadoPagoWebhookHandler)
module.exports = mercadoPagoRouter;
