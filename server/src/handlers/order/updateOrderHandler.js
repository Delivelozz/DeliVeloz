const updateOrderController = require('../../controllers/order/updateOrderController');

const updateOrderHandler = async (req, res) =>{
    const data = req.body;
    try {
        const response = await updateOrderController(data);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = updateOrderHandler;