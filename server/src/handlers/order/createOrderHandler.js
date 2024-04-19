const createOrderController = require("../../controllers/order/createOrderController.js")

const createOrderHandler = async (req, res) => {
  const data = req.body;
  try {
    const response = await createOrderController(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

module.exports = createOrderHandler;
