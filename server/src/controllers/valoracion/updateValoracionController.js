const {Valoracion} = require ('../../db')

const updateValoracion = async (id, puntuacion, comentario)=> {
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

        return valoracion
    }

module.exports = updateValoracion
