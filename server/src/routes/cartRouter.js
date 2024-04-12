const { Router } = require("express");
const cartRouter = Router();

// Importar handlers
const getUserCartHandler = require("../handlers/cart/getUserCartHandler");
const addProductCartHandler = require("../handlers/cart/addProductCartHandler");
const decreaseProductCartHandler = require("../handlers/cart/decreaseProductCartHandler");
const removeProductCartHandler = require("../handlers/cart/removeProductCartHandler");

// Usar handlers
cartRouter.get("/user/:idUser", getUserCartHandler);
// Add product
cartRouter.put("/addproduct/:idUser/:idProduct", addProductCartHandler);
// Decrease product
cartRouter.put(
  "/decreaseproduct/:idUser/:idProduct",
  decreaseProductCartHandler
);
// Remove product
cartRouter.delete(
  "/removeproduct/:idUser/:idProduct",
  removeProductCartHandler
);

module.exports = cartRouter;
