const { Router } = require ("express");
const mercadoPagoRouter = Router(); 

// Importar handlers
const mercadoPagoHandler = require("../handlers/mercadoPago/mercadoPagoHandler");
const mercadoPagoWebhookController = require("../controllers/mercadoPago/mercadoPagoWebhookController");
// Usar handlers
// Genera el pago
mercadoPagoRouter.post("/create_preference", mercadoPagoHandler);

mercadoPagoRouter.post("/webhook", mercadoPagoWebhookController);

module.exports = mercadoPagoRouter;
