const { Router } = require("express");

const valoracionRouter = Router();

const postValoracionHandler = require("../handlers/valoraciones/postValoracionHandler");
/* const updateValoracionHandler = require("../handlers/valoraciones/updateValoracionHandler") */
const deleteValoracionHandler = require("../handlers/valoraciones/deleteValoracionHandler");


valoracionRouter.post("/valoracion", postValoracionHandler);
/* valoracionRouter.put("/valoracion/:id", updateValoracionHandler); */
valoracionRouter.delete("/valoracion/:id", deleteValoracionHandler);

module.exports = valoracionRouter;
