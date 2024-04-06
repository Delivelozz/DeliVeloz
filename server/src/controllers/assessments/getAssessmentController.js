const { Assessment } = require("../../db");

const getAssessmentController = async () => {
  //Obtiene todas las valoraciones de la base de datos 
  const allAssessmentDB = await Assessment.findAll();
  return allAssessmentDB;
};

module.exports = getAssessmentController;
