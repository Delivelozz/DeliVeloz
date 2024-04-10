const {Assessment, User} = require('../../db')

const postAssessmentController = async (req, res) => {
    
    try { 
        const {productId} = req.params
        const {rating, comment, email}= req.body;

        const userCheck= await User.findOne({
            where: {email: email}
        })
        if (!userCheck){
            throw new Error ("Usuario no encontrado")
        }

        if(!rating || !comment ){
            throw new Error("Es necesario proporcionar la puntuación y un comentario")
        } else if(rating < 1 || rating > 5){
            throw new Error ("La puntuación debe estar entre 1 y 5")
        }

        //crear la valoracion asociada al producto 
        const newAssessment = await Assessment.create({
          rating: rating,
          comment: comment,
          productId: productId,
          userId: userCheck.id,
        });

        res.status(201).json({message: "Tu valoracion fue recibida, ¡Gracias por tu tiempo!", newAssessment})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = postAssessmentController;
