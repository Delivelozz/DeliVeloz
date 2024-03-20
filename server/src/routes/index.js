const { Router } = require('express');
const getAllProducts = require('../controllers/getAllProducts');
const startDatabase = require('../controllers/startDatabase');


//valoracion
const postValoracion = require('../controllers/postValoracion')
const updateValoracion= require('../controllers/UpdateValoracion')
const deleteValoracion= require('../controllers/deleteValoracion')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/products", getAllProducts)
// router.get("/", startDatabase)

router.post("/valoracion", postValoracion)
router.put("/valoracion/:id", updateValoracion)
router.delete("/valoracion/:id", deleteValoracion)


module.exports = router;
