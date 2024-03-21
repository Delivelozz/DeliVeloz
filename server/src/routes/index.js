const { Router } = require('express');
const router = Router();

const usersRouter = require('./usersRouter');
const productsRouter = require("./productsRouter");
const valoracionRouter = require("./valoracionRouter");
const filterRouter = require("./filterRouter");

// router PRODUCTOS
router.use("/products", productsRouter);
// Router USUARIOS
router.use("/users", usersRouter);
// Router VALORACIONES
router.use("/valoracion", valoracionRouter);
// Router FILTROS
router.use("/filter", filterRouter);

module.exports = router;
