const {Valoracion} = require('../../db')

const deleteValoracion = async (id) =>{
    const valoracion = await Valoracion.findByPk(id);    
        if(!valoracion){
            throw new Error ("No se encontró la valoración especificada")
        }
        await valoracion.destroy();
        
    return valoracion
}
module.exports = {deleteValoracion};
