const { Router } = require("express");

const assessmentRouter = Router();

const postAssessmentHandler = require("../handlers/assessments/postAssessmentHandler");
const updateAssessmentHandler = require("../handlers/assessments/updateAssessmentHandler")
const deleteAssessmentHandler = require("../handlers/assessments/deleteAssessmentHandler");


assessmentRouter.post("/", postAssessmentHandler);
assessmentRouter.put("/:id", updateAssessmentHandler);
assessmentRouter.delete("/:id", deleteAssessmentHandler);

module.exports = assessmentRouter;
