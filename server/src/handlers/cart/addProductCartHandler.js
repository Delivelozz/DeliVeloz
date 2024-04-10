const addProductCartController = require('../../controllers/cart/addProductCartController.js');

// 
const addProductCartHandler = async (req, res) => {
    //
    const {userId, productId, quantity} = req.params;
    try {
        const response = await addProductCartController(userId, productId, quantity);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = addProductCartHandler;