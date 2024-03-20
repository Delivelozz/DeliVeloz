const {Valoracion} = require('../../db')

const postValoracion = async (req, res) => {
    try { 
        const {puntuacion, comentario}= req.body;

        if(!puntuacion || !comentario){
            throw new Error("Es necesario agregar una puntuación y un comentario")
        } else if(puntuacion < 1 || puntuacion > 5){
            throw new Error ("La puntuación debe estar entre 1 y 5")
        }
        const newValoracion= await Valoracion.create({
            puntuacion, comentario,
        })

        res.status(200).json({message: "Tu valoracion fue recibida, ¡Gracias por tiempo!"})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports= postValoracion
