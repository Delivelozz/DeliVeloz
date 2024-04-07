const { Assessment } = require("../../db");

const getAssessmentController = async (req, res) => {
  try {
    const {productId}= req.params
    const assessmentDB= await Assessment.findAll({
      where: {
        productId:productId,
      }
    }
    )
    if (assessmentDB.length===0) {
      return res.status(404).json({ error: "No se encontraron valoraciones para este producto" });
    }
    return res.status(200).json(assessmentDB);

  } catch (error) {
    return res.status(500).json({error: "Error interno del servidor"})
  }
  

};

module.exports = getAssessmentController;
