const { where } = require('sequelize');
const {User, Cart, Product, CartProduct} = require('../../db');

const addProductCartController = async (idUser, idProduct) => {
    // Verificar si el usuario existe
    const user = await User.findByPk(idUser);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    // Ahora que sabemos que el usuario existe, procedemos a crear o actualizar el carrito
    const newCart = await Cart.findOne({
        where: { userId: idUser }
    });

    if(!newCart){
        throw new Error('Carrito no encontrado');
    }else{
        const product = await Product.findByPk(idProduct);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        const cartProduct = await CartProduct.findOne({
            where: {
                cartId: newCart.id,
                productId: product.id
            }
        })
        if(product.quantity >= 1){
            if(cartProduct){
                await newCart.addProduct(product, { through: { quantity: cartProduct.quantity + 1 } });
                await product.update({
                    quantity: product.quantity - 1
                });
                if(product.quantity === 0){
                    await product.update({
                        availability: false
                    });
                }

            }else{
                await newCart.addProduct(product, { through: { quantity: 1 } });
                await product.update({
                    quantity: product.quantity - 1
                });
                if(product.quantity === 0){
                    await product.update({
                        availability: false
                    });
                }
            }
        }else{
            return "Alcanzo el numero de productos disponibles";
        }
    }
   
    return "Producto añadido";
}

module.exports = addProductCartController;