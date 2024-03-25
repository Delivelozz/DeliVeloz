const {Assessment} = require('../../db')

const deleteAssessmentController = async (id) =>{
    const assessment = await Assessment.findByPk(id);    
        if(!assessment){
            throw new Error ("No se encontró la valoración especificada")
        }
        await assessment.destroy();
        
    return assessment
}
module.exports = deleteAssessmentController;
