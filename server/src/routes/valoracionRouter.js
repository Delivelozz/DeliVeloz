const { Router } = require("express");

const valoracionRouter = Router();

const postAssessmentHandler = require("../handlers/valoraciones/postAssessmentHandler");
const updateAssessmentHandler = require("../handlers/valoraciones/updateAssessmentHandler")
const deleteAssessmentHandler = require("../handlers/valoraciones/deleteAssessmentHandler");


valoracionRouter.post("/", postAssessmentHandler);
valoracionRouter.put("/:id", updateAssessmentHandler);
valoracionRouter.delete("/:id", deleteAssessmentHandler);

module.exports = valoracionRouter;
