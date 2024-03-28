const getPaymentMethodController = require("../../controllers/paymentMethod/getPaymentMethodController");

const getPaymentMethodHandlers = async (req, res) => {
  try {
    await getPaymentMethodController(req, res);
  } catch (error) {
    console.error(
      "Error en el manejador de obtención de métodos de pago:",
      error
    );
    res.status(500).json({
      message: "Hubo un error en el manejador de obtención de métodos de pago",
    });
  }
};

module.exports = getPaymentMethodHandlers;
