const {Valoracion} = require('../../db')

const deleteValoracion = async (req, res) =>{
    try {
        const {id}= req.params

        const valoracion =await Valoracion.findByPk(id)
        if(!valoracion){
            throw new Error ("No se encontró la valoración especificada")
        }

        await valoracion.destroy();
         res.status(200).json({message: "Valoración eliminada correctamente"})
        
    } catch (error) {
        res.status(400).json({error: error.message})        
    }
}
module.exports= deleteValoracion