const { User, Product, Cart } = require("../../db.js");

const addProductCartController = async (userId, productId, quantity) =>{

    // Crear un nuevo carrito
    const newCart = await Cart.create({
        userId
    });

    // Crear una asociación entre el producto y el carrito
    await newCart.addProducts(productId, { through: { quantity } });

    return newCart;
}

module.exports = addProductCartController;