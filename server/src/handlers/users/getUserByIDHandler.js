const getUserByIDController = require('../../controllers/users/getUserByIDController');
// Devuelve el detalle del Usuario por id
const getUserByIDHandler = async (req, res) => {
    //obtenemos el id por params
    const {id} = req.params;
    try {
        const userById = await getUserByIDController(id);
        res.status(200).json(userById);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getUserByIDHandler;