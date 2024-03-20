const deleteValoracionController= require ("../../controllers/valoracion/deleteValoracionController")

const deleteValoracionHandler = async (req, res)=>{
    try {
        const {id} =req.params;
        await deleteValoracionController.deleteValoracion(id)

        res.status(200).json({message: "Valoración eliminada correctamente"});

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = deleteValoracionHandler