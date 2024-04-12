const deleteProductController = require('../../controllers/products/deleteProductController');

const deleteProductHandler = async (req, res) => {
    const productId = req.params.productId;
    try {
        await deleteProductController(productId);
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteProductHandler;
