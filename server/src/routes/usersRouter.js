const { Router } = require("express");
const usersRouter = Router();

// import hadlers
const getUsersHandler = require("../handlers/users/getUsersHandler");
const getUserByIDHandler = require("../handlers/users/getUserByIDHandler");
const createUserHandler = require("../handlers/users/createUserHandler");
const editUserHandler = require("../handlers/users/editUserHandler");
const desactUserHandler = require("../handlers/users/desactUserHandler");
const loginUsersHandler = require("../handlers/users/loginUsersHandler");
const closeUsersHandler = require("../handlers/users/closeUsersHandler");

// use handlers
// Obtener todos los Usuarios
usersRouter.get("/", getUsersHandler);
// Obtener Usuario Por ID
usersRouter.get("/:id", getUserByIDHandler);
// Crear Usuario
usersRouter.post("/", createUserHandler);
// Editar Usuario
usersRouter.patch("/:id", editUserHandler);
// Desactivar Usuario
usersRouter.put("/:id/:value", desactUserHandler);
// login Usuario
usersRouter.post("/login", loginUsersHandler);
// Cerrar Seccion
usersRouter.post("/close", closeUsersHandler);

module.exports = usersRouter;
