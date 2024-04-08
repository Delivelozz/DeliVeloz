const getAdministratorByIdController =require ('../../controllers/administrator/getAdministratorByIdController')

const getAdministratorByIdHandler= async (req, res) =>{
    const {id}= req.params
    
    try {
        
        const AdministratorById= await getAdministratorByIdController(id)
        if(!AdministratorById){
            res.status(404).json({message: "No se encontró administrador con el id indicado"})
        }
        res.status(200).json(AdministratorById)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports= getAdministratorByIdHandler