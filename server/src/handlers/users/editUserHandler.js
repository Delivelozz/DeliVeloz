const editUserController = require('../../controllers/users/editUserController');
const accessUser = require('../../functions/accessUser');

// Maneja la edicion de los datos del Usuario en la Base de Datos
const editUserHandler = async (req, res) => {
    const response = await accessUser(req)
    if (!response){
        return res.status(400).json({ error: "Acceso denegado" })
    }
    //obtenemos el id del usuario por params
    const id = req.params;
    //obtenemos los nuevos datos del usuario por body
    const dataUser = req.body;
    try {
        const response = await editUserController(id, dataUser);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = editUserHandler;