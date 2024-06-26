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
        attributes: ["id", "name", "price", "image", "quantity"],
      },
    ],
  });

  const newOrderProducts = cartUser.products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.cartProduct.quantity,
    quantity_stock: product.quantity,
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
