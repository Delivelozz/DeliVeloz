const getAdministratorByIdController =require ('../../controllers/administrator/getAdministratorByIdController')

const getAdministratorByIdHandler= async (req, res) =>{
    const {id}= req.params
    try {
        const AdministratorById= getAdministratorByIdController(id)
        res.status(200).json(AdministratorById)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports= getAdministratorByIdHandler