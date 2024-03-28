const getPaymentMethodByIdController = require("../../controllers/paymentMethod/getPaymentMethodByIdController");

const getPaymentMethodByIdHandlers = async (req, res) => {
  try {
    await getPaymentMethodByIdController(req, res);
  } catch (error) {
    console.error(
      "Error en el manejador de creación de método de pago:",
      error
    );
    res.status(500).json({
      message: "Hubo un error en el manejador de creación de método de pago",
    });
  }
};

module.exports = getPaymentMethodByIdHandlers;
