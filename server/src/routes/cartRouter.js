const { Router } = require ("express");
const cartRouter = Router(); 

// Importar handlers
const getUserCartHandler = require("../handlers/cart/getUserCartHandler");
const addProductCartHandler = require("../handlers/cart/addProductCartHandler");
const removeProductCartHandler = require("../handlers/cart/removeProductCartHandler");

// Usar handlers
cartRouter.get("/user/:idUser", getUserCartHandler);
// Add product
cartRouter.post("/addproduct/:idUser/:idProduct", addProductCartHandler);
// Remove product
cartRouter.put("/removeproduct/:idUser/:idProduct", removeProductCartHandler);

module.exports = cartRouter;