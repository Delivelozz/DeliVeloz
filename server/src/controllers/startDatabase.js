const axios = require("axios");
const { Producto } = require("../db.js")

const startDatabase = async (req, res) =>{
  try {
    const { data } = await axios.get("http://localhost:5000/products")

    const products = data.map(product => {
      try {
        return{
          id: product.id || Math.floor(Math.random() * 101) + 100,
          nombre: product.name || "undefined",
          descripcion: product.description || "undefined",
          precio: product.price || "undefined",
          categoria: product.category || "undefined",
          imagen: product.image || "undefined",
          disponibilidad: product.availability || false,
        }
      } catch (error) {
        console.error("Error en el producto: ", product);
        throw error;
      }
    }) 

    for (const product of products) {
      const existingProduct = await Producto.findOne({ where: { nombre: product.nombre } });
      if (!existingProduct) {
        await Producto.create(product);
      }
    }

    res.status(200).json("Datos guardados correctamente")
  } catch (error) {
    console.error("Error al hacer la peticion o guardar los datos: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = startDatabase