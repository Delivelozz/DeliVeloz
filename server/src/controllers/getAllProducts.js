const { Producto } = require("../db.js");

const getAllProducts = async (req, res) =>{
  try {
    const data = await Producto.findAll();
    //Verificamos si hay productos en la base de datos
    if (data?.length === 0) {
      return res.status(404).json({ error: "No se encontraron productos" });
    }
    res.status(200).json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al recuperar los productos" });
  }
}

module.exports = getAllProducts