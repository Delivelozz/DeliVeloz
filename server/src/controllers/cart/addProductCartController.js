const { User, Cart, Product, CartProduct } = require("../../db");

const addProductCartController = async (idUser, idProduct) => {
  // Verificar si el usuario existe
  const user = await User.findByPk(idUser);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // Ahora que sabemos que el usuario existe, procedemos a crear o actualizar el carrito
  const newCart = await Cart.findOne({
    where: { userId: idUser },
  });

  if (!newCart) {
    throw new Error("Producto no encontrado");
  } else {
    // // Crear una asociación entre el producto y el carrito
    // // Asegúrate de que el producto exista y esté correctamente definido
    // const product = await Product.findByPk(idProduct);
    // if (!product) {
    //     throw new Error('Producto no encontrado');
    // }
    // await newCart.addProduct(product, { through: { quantity: 1 } });
    const product = await Product.findByPk(idProduct);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    const cartProduct = await CartProduct.findOne({
      where: {
        cartId: newCart.id,
        productId: product.id,
      },
    });
    if (cartProduct) {
      await newCart.addProduct(product, {
        through: { quantity: cartProduct.quantity + 1 },
      });
    } else {
      await newCart.addProduct(product, { through: { quantity: 1 } });
    }
  }

  return "Producto añadido";
};

module.exports = addProductCartController;
