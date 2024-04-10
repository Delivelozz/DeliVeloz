const { Router } = require("express");
const bannersRouter = Router();

const getBannersHandler = require("../handlers/banners/getBannersHandler");
const postBannersHandler = require("../handlers/banners/postBannersHandler");
const patchBannersHandler = require("../handlers/banners/patchBannersHandler");
const deleteBannersHandler = require("../handlers/banners/deleteBannersHandler");

//obtner todos los banners
bannersRouter.get("/", getBannersHandler);
//crear un banner
bannersRouter.post("/", postBannersHandler);
//editar banners
bannersRouter.patch("/:id", patchBannersHandler);
// eliminar un banner
bannersRouter.delete("/:id", deleteBannersHandler);

module.exports = bannersRouter;
