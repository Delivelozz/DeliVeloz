const createAddressController = require("../../controllers/address/createAddressController");

const createAddressHandler = async (req, res) => {
  const { deliveryAddress, city, country } = req.body;
  try {
    const response = await createAddressController({
      deliveryAddress,
      city,
      country,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createAddressHandler;
