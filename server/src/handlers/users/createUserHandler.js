const createUserController = require('../../controllers/users/createUserController');

// Maneja la creación de un usuario en la Base de Datos
const createUserHandler = async (req, res) => {
    //obtenemos los datos del usuario por body
    const user = req.body;
    try {
        const response = await createUserController(user);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = createUserHandler;