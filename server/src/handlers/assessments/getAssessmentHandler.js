const getAssessmentController = require("../../controllers/assessments/getAssessmentController");
// Devuelve todas las valoraciones o las valoraciones por nombre
const getAssessmentHandler = async (req, res) => {
  const {productId}= req.params
  try {    
    const assessmentDB = await getAssessmentController(productId);
    res.status(200).json(assessmentDB);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAssessmentHandler;
