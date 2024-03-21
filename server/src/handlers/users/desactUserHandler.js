const desactUserController = require('../../controllers/users/desactUserController');

const desactUserHandler = async (req, res) => {
    const { id, value } = req.params;
    try {
        //Faltaba el await xD 
        const response = await desactUserController(id, value);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = desactUserHandler;