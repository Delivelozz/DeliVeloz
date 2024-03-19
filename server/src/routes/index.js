const { Router } = require('express');
const getAllProducts = require('../controllers/getAllProducts');
const startDatabase = require('../controllers/startDatabase');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/products", getAllProducts)
// router.get("/", startDatabase)



module.exports = router;
