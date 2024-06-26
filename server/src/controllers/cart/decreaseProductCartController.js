const {User, Cart, Product, CartProduct} = require('../../db');

const decreaseProductCartController = async (idUser, idProduct) =>{
    // Verificar si el usuario existe
    const user = await User.findByPk(idUser);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    // Ahora que sabemos que el usuario existe, procedemos a buscar el carrito
    const userCart = await Cart.findOne({
        where: { userId: idUser }
    });

    // Verificar si el producto existe
    const product = await Product.findByPk(idProduct);
    if (!product) {
            throw new Error('Producto no encontrado');
        }


    const cartProduct = await CartProduct.findOne({
        where: {
            cartId: userCart.id,
            productId: idProduct
        }
    })

    if(cartProduct){
        if(cartProduct.quantity > 1){
            await userCart.addProduct(product, { through: { quantity: cartProduct.quantity - 1 } });
            await product.update({
                quantity: product.quantity + 1
            });
        }else{
            await userCart.removeProduct(product);
            await product.update({
                quantity: product.quantity + 1
            });
        }
    }else{
        throw new Error('Producto no encontrado');
    }

    return "Producto decrementado";
}

module.exports = decreaseProductCartController;