const {User, Cart, Product, CartProduct} = require('../../db');

const addProductCartController = async (idUser, idProduct) => {
    // Verificar si el usuario existe
    const user = await User.findByPk(idUser);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    // Ahora que sabemos que el usuario existe, procedemos a crear o actualizar el carrito
    const newCart = await Cart.findOrCreate({
        where: { userId: idUser }
    });

    if(newCart[1]){
        // Crear una asociación entre el producto y el carrito
        // Asegúrate de que el producto exista y esté correctamente definido
        const product = await Product.findByPk(idProduct);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        await newCart[0].addProduct(product, { through: { quantity: 1 } });
    }else{
        const product = await Product.findByPk(idProduct);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        const cartProduct = await CartProduct.findOne({
            where: {
                cartId: newCart[0].id,
                productId: product.id
            }
        })
        if(cartProduct){
            await newCart[0].addProduct(product, { through: { quantity: cartProduct.quantity + 1 } });
        }else{
            await newCart[0].addProduct(product, { through: { quantity: 1 } });
        }
    }
   

    return "Producto añadido";
}

module.exports = addProductCartController;