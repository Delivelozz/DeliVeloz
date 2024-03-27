const deleteAddressController = require('../../controllers/address/deleteAddressController');

const deleteAddressHandler = async (req, res) => {
    const { addressId } = req.params; 
    try {
        const response = await deleteAddressController(addressId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteAddressHandler;
