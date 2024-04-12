const decreaseProductCartController = require('../../controllers/cart/decreaseProductCartController.js');

// 
const decreaseProductCartHandler = async (req, res) => {

    const {idUser, idProduct} = req.params;

    try {
        const response = await decreaseProductCartController(idUser, idProduct);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = decreaseProductCartHandler;