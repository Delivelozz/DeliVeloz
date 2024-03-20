const getProductByIdController = require("../../controllers/products/getProductByIdController.js");

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    //Verificamos que el ID sea un número válido
    if (isNaN(id)) {
      return res.status(400).json({ error: "El ID debe ser un número" });
    }
    //Convertimos el ID a un número entero para poder compararlo con el ID de la base de datos.
    const productId = parseInt(id, 10);
    const product = getProductByIdController(productId)
    //Si no se encuentra el producto, devolvemos un error 404.
    if (!product) {
      return res.status(404).json({ error: "No se encontró el Producto por ID" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = getProductById;
