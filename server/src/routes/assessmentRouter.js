const { Router } = require("express");

const assessmentRouter = Router();

const postAssessmentHandler = require("../handlers/assessments/postAssessmentHandler");
const updateAssessmentHandler = require("../handlers/assessments/updateAssessmentHandler")
const deleteAssessmentHandler = require("../handlers/assessments/deleteAssessmentHandler");
const getAssessmentHandler= require ("../handlers/assessments/getAssessmentHandler")
const getHistoryHandler = require("../handlers/assessments/getHistoryHandler");
assessmentRouter.get("/:productId", getAssessmentHandler)
assessmentRouter.post("/:productId", postAssessmentHandler);
assessmentRouter.put("/:id", updateAssessmentHandler);
assessmentRouter.delete("/:id", deleteAssessmentHandler);
assessmentRouter.get("/:userId/history",getHistoryHandler)

module.exports = assessmentRouter;
