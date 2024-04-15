const getOrderController = require('../../controllers/order/getOrderController')

const getOrderHandler = async (req, res)=>{
    const {idUser, idPedido} = req.params;
    try {
        const orderUser = await getOrderController(idUser, idPedido);
        res.status(200).json(orderUser);
    } catch (error) {
        res.status(200).json({error: error.message});
    }
}
module.exports = getOrderHandler;