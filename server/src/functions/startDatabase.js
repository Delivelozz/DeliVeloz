const axios = require("axios");
const { Product } = require("../db.js")

const startDatabase = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/products");

    const products = data.map(product => {
      try {
        return{
          name: product.name || "undefined",
          description: product.description || "undefined",
          price: product.price || "undefined",
          category: product.category || "undefined",
          image: product.image || {},
          availability: product.availability || false,
        }
      } catch (error) {
        console.error("Error en el producto: ", product);
        throw error;
      }
    });

    for (const product of products) {
      const existingProduct = await Product.findOne({ where: { name: product.name } });
      if (!existingProduct) {
        await Product.create(product);
      }
    }

    console.log("Datos guardados correctamente");
  } catch (error) {
    console.error("Error al hacer la peticion o guardar los datos: ", error);
  }
};

module.exports = startDatabase;
