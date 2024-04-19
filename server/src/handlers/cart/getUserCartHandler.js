const getUserCartController = require('../../controllers/cart/getUserCartController.js');

// 
const getUserCartHandler = async (req, res) => {
    //
    const {idUser} = req.params;
    try {
        const response = await getUserCartController(idUser);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = getUserCartHandler;