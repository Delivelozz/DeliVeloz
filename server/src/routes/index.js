// Importar router
const { Router } = require('express');
const router = Router();

// Importar controladores
const getAllProducts = require('../controllers/getAllProducts');
const getProductById = require('../controllers/getProductById');

// Definir rutas y controladores
router.get("/productos", getAllProducts)
router.get("/productos/:id", getProductById)


module.exports = router;
