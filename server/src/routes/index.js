const { Router } = require("express");
const router = Router();

const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");
const subcategoriesRouter = require("./subcategoriesRouter");
const usersRouter = require("./usersRouter");
const assessmentRouter = require("./assessmentRouter");
const filterRouter = require("./filterRouter");
const addressRouter = require("./addressRouter");
const administratorRouter = require("./administratorRouter");


// router PRODUCTOS
router.use("/products", productsRouter);
// router CATEGORIAS
router.use("/categories", categoriesRouter);
// router SUBCATEGORIAS
router.use("/subcategories", subcategoriesRouter);
// Router USUARIOS
router.use("/users", usersRouter);
// Router VALORACIONES
router.use("/assessment", assessmentRouter);
// Router FILTROS
router.use("/filter", filterRouter);
// Router ADDRESS
router.use("/address", addressRouter);
// Router ADMINISTRATOR
router.use("/administrator", administratorRouter)

module.exports = router;
