const editAdministratorcontroller= require('../../controllers/administrator/editAdministratorController')

const editAdministratorHandler = async (req, res)=>{
    const id = req.params
    
    const infoAdministrator= req.body
    
    try {
        const response= await editAdministratorcontroller(id, infoAdministrator)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}

module.exports= editAdministratorHandler