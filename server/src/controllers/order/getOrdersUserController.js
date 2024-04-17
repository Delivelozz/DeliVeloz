const { Order, Product, PaymentMethod } = require('../../db');

const getOrdersUserController = async (idUser) => {
    const orders = await Order.findAll({
    where: { userId: idUser },
    include: [{ model: Product }, {model:PaymentMethod}],
    });

    // Ordenar el array de órdenes
    const sortedOrders = orders.map(order => {
        return {
            id: order.id,
            userId: order.userId,
            total: order.total,
            orderStatus: order.orderStatus,
            // Otros campos de la orden
            // ...
            products: order.products.map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.orderProduct.quantity,
                image: product.image
                // Otros campos del producto
                // ...
            })),
            paymentMethod: {
                type: order.paymentMethod.type,
                status: order.paymentMethod.status
            }
        };
    });

    return sortedOrders;
};

module.exports = getOrdersUserController;