const { Router } = require('express');
const getAllProducts = require('../controllers/getAllProducts');
const startDatabase = require('../controllers/startDatabase');


//valoracion
const postValoracion = require('../controllers/postValoracion')
const updateValoracion= require('../controllers/UpdateValoracion')
const deleteValoracion= require('../controllers/deleteValoracion')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRouter = require('./usersRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/products", getAllProducts)
router.use("/users", usersRouter);
// router.get("/", startDatabase)

router.post("/valoracion", postValoracion)
router.put("/valoracion/:id", updateValoracion)
router.delete("/valoracion/:id", deleteValoracion)


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
