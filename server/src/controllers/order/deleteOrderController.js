const { Order, PaymentMethod } = require("../../db");

const deleteOrderController = async (orderId) => {
  try {
    // Buscar el pedido por su ID
    const order = await Order.findByPk(orderId);
    if (!order) {
      throw new Error("Pedido no encontrado");
    }

    // Eliminar el método de pago asociado al pedido, si existe
    if (order.paymentMethodId) {
      await PaymentMethod.destroy({ where: { id: order.paymentMethodId } });
    }

    // Eliminar el pedido
    await order.destroy();

    return { message: "Pedido eliminado correctamente" };
  } catch (error) {
    throw new Error("Error interno del servidor al eliminar el pedido");
  }
};

module.exports = deleteOrderController;
