const editAddressController = require("../../controllers/address/editAddressController");

const editAddressHandler = async (req, res) => {
  const { addressId } = req.params;
  const updatedData = req.body;
  try {
    const response = await editAddressController(addressId, updatedData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = editAddressHandler;
