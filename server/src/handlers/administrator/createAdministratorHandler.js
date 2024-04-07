const createAdministratorController = require('../../controllers/administrator/createAdministratorController')

const createAdministratorHandler = async (req, res) =>{
    const administrator = req.body
    try {
        const response= await createAdministratorController(administrator);
        res.status(200).json("Administrador creado con exito", response)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}

module.exports= createAdministratorHandler