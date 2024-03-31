const { Router } = require("express");

const addressRouter = Router();
// import handlers
const createAddressHandler = require("../handlers/address/createAddressHandler");
const deleteAddressHandler = require("../handlers/address/deleteAddressHandler");
const editAddressHandler = require("../handlers/address/editAddressHandler");

// use handlers
// Crear Direccion
addressRouter.post("/", createAddressHandler);
// Borrar Direccion
addressRouter.delete("/:addressId", deleteAddressHandler);
// Editar Direccion
addressRouter.put("/:addressId", editAddressHandler);

module.exports = addressRouter;
