const { Router } = require("express");

const valoracionRouter = Router();

const postValoracionHandler = require("../handlers/valoraciones/postValoracionHandler");
const updateValoracionHandler = require("../handlers/valoraciones/updateValoracionHandler")
const deleteValoracionHandler = require("../handlers/valoraciones/deleteValoracionHandler");


valoracionRouter.post("/", postValoracionHandler);
valoracionRouter.put("/:id", updateValoracionHandler);
valoracionRouter.delete("/:id", deleteValoracionHandler);

module.exports = valoracionRouter;
