const getOrdersUserController = require('../../controllers/order/getOrdersUserController');

const getOrdersUserHandler = async (req, res)=>{
    const {idUser} = req.params;
    try {
        const ordersUser = await getOrdersUserController(idUser);
        res.status(200).json(ordersUser);
    } catch (error) {
        res.status(200).json({error: error.message});
    }
}
module.exports = getOrdersUserHandler;