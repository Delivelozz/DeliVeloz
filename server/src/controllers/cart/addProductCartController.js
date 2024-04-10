const { User, Product, Cart } = require("../../db.js");

const addProductCartController = async (userId, productId, quantity) =>{
    // Obtener la instancia del usuario
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    // Crear un nuevo carrito
    const newCart = await Cart.create();

    // Agregar el producto al carrito
    const product = await Product.findByPk(productId);
    if (!product) {
        throw new Error('Producto no encontrado');
    }

    // Crear una asociación entre el producto y el carrito
    await newCart.addProduct(product, { through: { quantity } });

    // Asociar el carrito con el usuario
    await user.setCart(newCart);

    return newCart;
}

module.exports = addProductCartController;