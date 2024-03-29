const { Order } = require("../../db");
const { PaymentMethod } = require("../../db");

const postOrderHandlers = async (req, res) => {
  try {
    const { orderStatus, userId, paymentMethod } = req.body;
    // Verificar si se proporcionó el estado del pedido
    if (!orderStatus || !userId || !paymentMethod) {
      return res
        .status(400)
        .json({
          message:
            "El estado del pedido, el ID de usuario y la información del método de pago son obligatorios",
        });
    }

    const nuevoMetodoPago = await PaymentMethod.create({
      type: paymentMethod.type,
      number: paymentMethod.number,
    });

    // Crear el pedido y asociarlo con el método de pago y el usuario
    const nuevoPedido = await Order.create({
      orderStatus,
      userId,
      paymentMethodId: nuevoMetodoPago.id,
    });

    res.status(201).json(nuevoPedido);
  } catch (error) {
    console.error("Error al crear el pedido:", error);
    res
      .status(500)
      .json({ message: "Error interno del servidor al crear el pedido" });
  }
};

module.exports = postOrderHandlers;
