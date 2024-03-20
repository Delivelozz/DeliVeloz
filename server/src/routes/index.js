const { Router } = require('express');
const router = Router();
const usersRouter = require('./usersRouter');
const productsRouter = require("./productsRouter")
const valoracionRouter = require("./valoracionRouter")


// router PRODUCTOS
router.use("/products", productsRouter)
// Router USUARIOS
router.use("/users", usersRouter);
// Router VALORACIONES
router.use("/valoracion", valoracionRouter);

module.exports = router;
