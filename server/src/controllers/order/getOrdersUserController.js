const { Order, Product } = require('../../db');


const getOrdersUserController = async (idUser) =>{
    const orders = await Order.findAll({
    where: { userId: idUser },
    include: [{ model: Product }],
    });
    return orders;
 };


module.exports = getOrdersUserController;