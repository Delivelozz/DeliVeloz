const { Router } = require("express");
const router = Router();

const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");
const assessmentRouter = require("./assessmentRouter");
const filterRouter = require("./filterRouter");
const addressRouter = require("./addressRouter");

// router PRODUCTOS
router.use("/products", productsRouter);
// Router USUARIOS
router.use("/users", usersRouter);
// Router VALORACIONES
router.use("/assessment", assessmentRouter);
// Router FILTROS
router.use("/filter", filterRouter);
// Router ADDRESS
router.use("/address", addressRouter);

module.exports = router;
