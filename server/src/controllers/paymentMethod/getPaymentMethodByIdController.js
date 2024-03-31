const { PaymentMethod } = require("../../db");

const getPaymentMethodByIdController = async (req, res) => {
  try {
    const paymentMethodId = req.params.id;

    const paymentMethod = await PaymentMethod.findByPk(paymentMethodId);

    if (!paymentMethod) {
      return res.status(404).json({
        message: "No se encontró el método de pago con el ID proporcionado",
      });
    }

    res.status(200).json(paymentMethod);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al obtener el método de pago por ID" });
  }
};

module.exports = getPaymentMethodByIdController;
