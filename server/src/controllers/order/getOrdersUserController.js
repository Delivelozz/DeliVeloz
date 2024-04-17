const { Order, Product, PaymentMethod } = require('../../db');


const getOrdersUserController = async (idUser) =>{
    const orders = await Order.findAll({
    where: { userId: idUser },
    include: [{ model: Product }, {model:PaymentMethod}],
    });
    return orders;
 };


module.exports = getOrdersUserController;