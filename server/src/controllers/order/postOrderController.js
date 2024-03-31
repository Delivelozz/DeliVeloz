const { Order } = require("../../db");

const postOrderControllers = async (userId, orderStatus) => {
  try {
    // Crear el pedido con el userId proporcionado
    const nuevoPedido = await Order.create({ userId, orderStatus });
    return nuevoPedido;
  } catch (error) {
    throw new Error("Error al crear el pedido en la base de datos");
  }
};

module.exports = {
  postOrderControllers,
};
