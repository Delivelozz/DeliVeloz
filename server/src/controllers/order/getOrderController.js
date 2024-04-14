const  {Order, Product, OrderProduct} = require('../../db');

const getOrderController = async (idUser, idPedido) =>{
    const orderUser = await Order.findOne({
        where:{
            id: idPedido,
            userId: idUser
        },
        include: [
            {
                model: Product,
                through: { 
                    model: OrderProduct,
                    attributes: ['quantity']
                },
                attributes: ['id', 'name', 'price', 'image']
            }
        ],
        attributes:['id','userId','total','paid','orderStatus']
    })

    const orderUserProducts = orderUser.products.map(product => (
        {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.orderProduct.quantity,
            image: product.image
        }
    ))

    const orderUserFilter = {
        id: orderUser.id,
        userId: orderUser.userId,
        total: orderUser.total,
        paid: orderUser.paid,
        orderStatus: orderUser.orderStatus,
        products: orderUserProducts
    };
    


    return orderUserFilter;
}

module.exports = getOrderController;