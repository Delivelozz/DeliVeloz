const { Router } = require("express");
const paymentMethodRouter = Router();
// Importar handlers
const handleCreatePaymentMethod = require("../handlers/paymentMethod/getPaymentMethodHandlers");
const handleCreatePaymentByIdMethod = require("../handlers/paymentMethod/getPaymentMethodByIdHandlers");
// Usar handlers
// Buscar todos los pagos
paymentMethodRouter.get("/", handleCreatePaymentMethod);
//Buscar pagos por Id
paymentMethodRouter.get("/:id", handleCreatePaymentByIdMethod);
module.exports = paymentMethodRouter;
