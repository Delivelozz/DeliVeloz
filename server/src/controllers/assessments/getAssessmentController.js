const { Assessment } = require("../../db");

const getAssessmentController = async (productId) => {
    const assessmentDB= await Assessment.findAll({
      where: {
        productId:productId,
      }
    })
    
    if (assessmentDB.length===0) {
      return {};
    }
    return assessmentDB;
  
};

module.exports = getAssessmentController;
