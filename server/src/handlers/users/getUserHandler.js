const getUserController = require('../../controllers/users/getUserController');
// Devuelve el detalle del Usuario por id
const getUserHandler = async (req, res) => {
    try {
        const response = await getUserController(req);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getUserHandler;