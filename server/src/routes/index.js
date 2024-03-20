// Importar router
const { Router } = require('express');
const router = Router();

// Importar controladores
const getAllProducts = require('../controllers/getAllProducts');

// Definir rutas y controladores
router.get("/products", getAllProducts)


module.exports = router;
