const editUserController = require('../../controllers/users/editUserController');

// Maneja la edicion de los datos del Usuario en la Base de Datos
const editUserHandler = async (req, res) => {
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