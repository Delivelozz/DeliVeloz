const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Router USUARIOS
const usersRouter = require('./usersRouter');
const productsRouter = require("./productsRouter")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router Products
router.use("/products", productsRouter)
// Router USUARIOS
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


//valoracion
const postValoracion = require('../controllers/postValoracion')
const updateValoracion= require('../controllers/UpdateValoracion')
const deleteValoracion= require('../controllers/deleteValoracion')


module.exports = router;
