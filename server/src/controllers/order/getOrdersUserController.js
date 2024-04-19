const { Order, Product, PaymentMethod, OrderProduct } = require('../../db');

const getOrdersUserController = async (idUser) => {
    const orders = await Order.findAll({
        where: { userId: idUser,
        paid: true },
        include: [{ model: Product, through: { model: OrderProduct, attributes: ['quantity'] } }, { model: PaymentMethod, attributes: ['type', 'status'] }],
    });

    // Ordenar el array de órdenes
    const sortedOrders = orders.map(order => {
        const orderData = {
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
            }))
        };

        // Verificar si hay un método de pago asociado
        if (order.paymentMethod) {
            orderData.paymentMethod = {
                type: order.paymentMethod.type,
                status: order.paymentMethod.status
            };
        }

        return orderData;
    });

    return sortedOrders;
};

module.exports = getOrdersUserController;