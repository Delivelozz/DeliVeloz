const {Valoracion} = require ('../../db')

const updateValoracion = async (req, res)=> {
    try {

        const {id} = req.params;
        const {puntuacion, comentario} =req.body;

        if(!puntuacion && !comentario){
            throw new Error ("Debes proporcionar al meno una puntuación o un comentario para actualizar")
        }
        
        const valoracion = await Valoracion.findByPk(id)
        if(!valoracion){
            throw new Error("No se encontro la valoración especificada")
        }

        if (puntuacion){
            if (puntuacion < 1 || puntuacion >5){
                throw new Error ("La puntuacion debe estar entre 1 y 5")
            }
            valoracion.puntuacion = puntuacion
        }

        if(comentario){
            valoracion.comentario=comentario;
        }
        await valoracion.save()

        res.status(200).json({message: "Valoración actualizada correctamente"})
    } 
    
    catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

module.exports= updateValoracion