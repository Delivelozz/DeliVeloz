const postAssessmentController = require("../../controllers/valoracion/postAssessmentController");

const postAssessmentHandler = async (req, res) => {
  await postAssessmentController(req, res);
};
 module.exports = postAssessmentHandler