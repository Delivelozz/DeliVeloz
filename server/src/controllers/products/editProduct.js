// controllers/editProduct.js
const { Producto } = require("../db.js");

const editProduct = async (req, res) => {
 try {
    const { id } = req.params;
    const productId = parseInt(id, 10);
    const updates = req.body; // Los datos actualizados enviados por el cliente

    // Actualizar el producto en la base de datos
    const product = await Producto.update(updates, {
      where: { id: productId }
    });

    if (!product) {
      return res.status(404).json({ error: "No se encontró el Producto por ID" });
    }

    res.status(200).json(product);
 } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al editar el producto" });
 }
}

module.exports = editProduct;