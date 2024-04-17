const getUsersByNameController = require('../../controllers/users/getUsersByNameController');
const getUsersController = require('../../controllers/users/getUsersController');
const accessAdmin = require('../../functions/accessAdmin');
// Devuelve todos los Usuarios o los Usuarios por nombre
const getUsersHandler = async (req, res) => {
    try {
        const access = await accessAdmin(req);
        if (!access){
            return res.status(403).json({ error: 'Acceso denegado' })
        }
        const {name} = req.query;
        try {
            if(name){
                const allUsersByName = await getUsersByNameController(name);
                if(allUsersByName.length === 0){
                    throw new Error(`No se encontro ningun usuario con nombre: ${name}`)
                }
                res.status(200).json(allUsersByName);
            }else{
                const allUsersDB = await getUsersController();
                res.status(200).json(allUsersDB);
            }
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getUsersHandler;