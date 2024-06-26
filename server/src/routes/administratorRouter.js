const {Router} = require("express");
const administratorRouter= Router()


const getAdministratorsHandler = require("../handlers/administrator/getAdministratorsHandler")
const getAdministratorByIdHandler= require("../handlers/administrator/getAdministratorByIdHandler")
const createAdministratorHandler = require("../handlers/administrator/createAdministratorHandler")
const editAdministratorHandler = require("../handlers/administrator/editAdministratorHandler")
const desactAdministratorHandler = require ("../handlers/administrator/desactAdministratorHandler")


//obtner todos los administradores
administratorRouter.get("/", getAdministratorsHandler)
// obtener admins por id
administratorRouter.get("/:id", getAdministratorByIdHandler)
//crear un administrador
administratorRouter.post("/", createAdministratorHandler)
//editar admins
administratorRouter.patch("/:id", editAdministratorHandler)
// desactivar administrador
administratorRouter.delete("/:id/:value", desactAdministratorHandler)

module.exports = administratorRouter
