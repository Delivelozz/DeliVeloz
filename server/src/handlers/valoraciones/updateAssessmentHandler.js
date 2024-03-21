const updateAssessmentController = require("../../controllers/valoracion/updateAssessmentController");

const updateAssessmentHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;

    const assessment = await updateAssessmentController(
      id,
      rating,
      comment
    );
    res
      .status(200)
      .json({ message: "Valoración actualizada corectamente", assessment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = updateAssessmentHandler; 
