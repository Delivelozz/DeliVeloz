const getAssessmentController = require("../../controllers/assessments/getAssessmentController");
// Devuelve todas las valoraciones o las valoraciones por nombre
const getAssessmentHandler = async (req, res) => {


  try {    
      const allAssessmentDB = await getAssessmentController();
     
      res.status(200).json(allAssessmentDB);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAssessmentHandler;
