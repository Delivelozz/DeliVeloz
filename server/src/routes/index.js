const { Router } = require('express');
const router = Router();
const usersRouter = require('./usersRouter');
const productsRouter = require("./productsRouter")


// router PRODUCTOS
router.use("/products", productsRouter)
// Router USUARIOS
router.use("/users", usersRouter);
// Router VALORACIONES
// router.use("/valoracion", valoracionRouter);


//! Requiere cambios!
const postValoracion = require('../controllers/valoracion/postValoracion')
const updateValoracion= require('../controllers/valoracion/UpdateValoracion')
const deleteValoracion= require('../controllers/valoracion/deleteValoracion')
router.post("/valoracion", postValoracion)
router.put("/valoracion/:id", updateValoracion)
router.delete("/valoracion/:id", deleteValoracion)

module.exports = router;
