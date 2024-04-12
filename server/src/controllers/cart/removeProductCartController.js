const { User, Cart, Product, CartProduct } = require("../../db");

const removeProductCartController = async (idUser, idProduct) => {
  // Verificar si el usuario existe
  const user = await User.findByPk(idUser);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // Ahora que sabemos que el usuario existe, procedemos a buscar el carrito
  const userCart = await Cart.findOne({
    where: { userId: idUser },
  });

  // Verificar si el producto existe
  const product = await Product.findByPk(idProduct);
  if (!product) {
    throw new Error("Producto no encontrado");
  }

  const cartProduct = await CartProduct.findOne({
    where: {
      cartId: userCart.id,
      productId: idProduct,
    },
  });
  if (cartProduct) {
    await userCart.removeProduct(product);
  } else {
    throw new Error("Producto no encontrado");
  }

  return "Producto removido";
};

module.exports = removeProductCartController;
