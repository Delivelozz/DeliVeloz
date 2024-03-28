const { PaymentMethod } = require("../../db");

const getPaymentMethodController = async (req, res) => {
  try {
    // Buscar todos los métodos de pago en la base de datos
    const paymentMethods = await PaymentMethod.findAll();

    // Enviar una respuesta con todos los métodos de pago encontrados
    res.status(200).json(paymentMethods);
  } catch (error) {
   
    res
      .status(500)
      .json({ message: "Hubo un error al obtener los métodos de pago" });
  }
};

module.exports = getPaymentMethodController;
