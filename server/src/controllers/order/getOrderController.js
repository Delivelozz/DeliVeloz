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
        ]
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
        products: orderUserProducts
    };
    


    return orderUserFilter;
}

module.exports = getOrderController;