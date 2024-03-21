const {Assessment} = require('../../db')

const postAssessmentController = async (req, res) => {
    try { 
        const {rating, comment}= req.body;

        if(!rating || !comment){
            throw new Error("Es necesario agregar una puntuación y un comment")
        } else if(rating < 1 || rating > 5){
            throw new Error ("La puntuación debe estar entre 1 y 5")
        }
        await Assessment.create({
            rating, comment,
        })

        res.status(200).json({message: "Tu valoracion fue recibida, ¡Gracias por tiempo!"})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = postAssessmentController;
