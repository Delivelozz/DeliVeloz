// Importar router
const { Router } = require('express');
const router = Router();

// Importar controladores
const getAllProducts = require('../controllers/getAllProducts');
const getProductById = require('../controllers/getProductById');
const editProduct = require('../controllers/editProduct');

// Definir rutas y controladores
router.get("/productos", getAllProducts)
router.get("/productos/:id", getProductById)
router.patch("/productos/:id", editProduct);

/*
  como se deberia de manejar en el front:
  
fetch('/productos/1', {
 method: 'PATCH',
 headers: {
    'Content-Type': 'application/json'
 },
 body: JSON.stringify({
    nombre: 'Nuevo nombre del producto',
    precio: 19.99
    // ...otros campos que se quieren actualizar
 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
*/


module.exports = router;
