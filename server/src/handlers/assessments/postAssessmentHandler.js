const postAssessmentController = require("../../controllers/assessments/postAssessmentController");

const postAssessmentHandler = async (req, res) => {
  try {
    await postAssessmentController(req, res);
    
  } catch (error) {
    res.status(500).json({error: "Ocurrió un error al procesar la solicitud"})
  }
};

module.exports = postAssessmentHandler