const { Router } = require ("express");
const cartRouter = Router(); 

// Importar handlers
const addProductCartHandler = require("../handlers/cart/addProductCartHandler");
const removeProductCartHandler = require("../handlers/cart/removeProductCartHandler");

// Usar handlers
// Add product
cartRouter.post("/addproduct/:userId/:productId/:quantity", addProductCartHandler);
// Remove product
cartRouter.delete("/removeproduct/:userId/:productId", removeProductCartHandler);


module.exports = cartRouter;