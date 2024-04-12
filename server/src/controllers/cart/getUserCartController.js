const { Cart, Product, CartProduct } = require('../../db');

const getUserCartController = async (idUser) => {
    const cartUser = await Cart.findOne({
        where: { userId: idUser },
        attributes: ['id'],
        include: [
            {
                model: Product,
                through: { 
                    model: CartProduct,
                    attributes: ['quantity']
                }, 
                attributes: ['name', 'price', 'image']
            }
        ]
    });

    // const cartUserFilter = {
    //     id: cartUser.id,
    //     product: cartUser.product.map(product => (
    //         {
    //             name: product.name,
    //             price: product.price,
    //             quantity: product.CartProduct.quantity,
    //             image: product.image
    //         }
    //     ))
    // };
    

    const resp = cartUser ? cartUser : "No hay carrito para ese id";

    return resp;
}

module.exports = getUserCartController;