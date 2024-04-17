const { Router } = require("express");
const usersRouter = Router();

// import hadlers
const getUsersHandler = require("../handlers/users/getUsersHandler");
const getUserHandler = require("../handlers/users/getUserHandler");
const createUserHandler = require("../handlers/users/createUserHandler");
const editUserHandler = require("../handlers/users/editUserHandler");
const desactUserHandler = require("../handlers/users/desactUserHandler");
const closeUsersHandler = require("../handlers/users/closeUsersHandler");

// use handlers
// Obtener todos los Usuarios
usersRouter.get("/", getUsersHandler);
// Obtener Usuario
usersRouter.get("/user", getUserHandler);
// Crear Usuario
usersRouter.post("/", createUserHandler);
// Editar Usuario
usersRouter.patch("/:id", editUserHandler);
// Desactivar Usuario
usersRouter.put("/:id/:value", desactUserHandler);
// Cerrar Seccion
usersRouter.post("/close", closeUsersHandler);

module.exports = usersRouter;
