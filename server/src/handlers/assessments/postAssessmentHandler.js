const postAssessmentController = require("../../controllers/assessments/postAssessmentController");

const postAssessmentHandler = async (req, res) => {
  await postAssessmentController(req, res);
};
 module.exports = postAssessmentHandler