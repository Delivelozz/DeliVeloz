const { Cart, Product, CartProduct } = require("../../db");

const getUserCartController = async (idUser) => {
  const cartUser = await Cart.findOne({
    where: { userId: idUser },
    attributes: ["id"],
    include: [
      {
        model: Product,
        through: {
          model: CartProduct,
          attributes: ["quantity"],
        },
        attributes: ["name", "price", "image"],
      },
    ],
  });

  const newOrderProducts = cartUser.products.map((product) => ({
    name: product.name,
    price: product.price,
    quantity: product.cartProduct.quantity,
    image: product.image,
  }));

  const cartUserFilter = {
    id: cartUser.id,
    products: newOrderProducts,
  };

  const resp = cartUserFilter ? cartUserFilter : "No hay carrito para ese id";
  // const resp = cartUser ? cartUser : "No hay carrito para ese id";

  return resp;
};

module.exports = getUserCartController;
