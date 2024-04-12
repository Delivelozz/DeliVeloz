const removeProductCartController = require('../../controllers/cart/removeProductCartController.js');

// 
const removeProductCartHandler = async (req, res) => {

    const {idUser, idProduct} = req.params;

    try {
        const response = await removeProductCartController(idUser, idProduct);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = removeProductCartHandler;