const desactAdministratorController = require('../../controllers/administrator/desactAdministratorController')

const desactAdministratorHandler= async (req, res) =>{
    const {id, value} = req.params
    try {
        const response = await desactAdministratorController(id, value)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports= desactAdministratorHandler