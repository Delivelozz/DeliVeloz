const removeProductCartController = require('../../controllers/cart/removeProductCartController.js');

// 
const removeProductCartHandler = async (req, res) => {
    //
    // const id = req.params;
    //
    // const dataProduct = req.body;
    try {
        const response = await removeProductCartController();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = removeProductCartHandler;