const deleteOrderController = require("../../controllers/order/deleteOrderController");

const deleteOrderHandlers = async (req, res) => {
  try {
    const orderId = req.params.id;

    // Verificar si se proporcionó el ID del pedido
    if (!orderId) {
      return res
        .status(400)
        .json({ message: "Se requiere proporcionar el ID del pedido" });
    }

    const result = await deleteOrderController(orderId);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor al eliminar el pedido" });
  }
};

module.exports = deleteOrderHandlers;
