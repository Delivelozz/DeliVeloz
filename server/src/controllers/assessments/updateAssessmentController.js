const {Assessment} = require ('../../db')

const updateAssessmentController = async (id, rating, comment)=> {
    const assessment = await Assessment.findByPk(id)

        if(!assessment){
            throw new Error("No se encontro la valoración especificada")
        }

        if (rating){
            if (rating < 1 || rating >5){
                throw new Error ("La puntuacion debe estar entre 1 y 5")
            }
            assessment.rating = rating
        }

        if(comment){
            assessment.comment=comment;
        }
        await assessment.save()

        return assessment
    }

module.exports = updateAssessmentController;
