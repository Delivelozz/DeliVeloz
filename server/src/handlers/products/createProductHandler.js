const createProductController = require("../../controllers/products/createProductController.js")

const createProductHandler = async (req, res) => {
  const data = req.body;
  try {
    const response = await createProductController(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

module.exports = createProductHandler;