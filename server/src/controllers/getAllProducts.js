const axios = require("axios");

const getAllProducts = async (req, res) =>{
  try {
    const { data } = await axios.get("http://localhost:5000/products")
    res.status(200).json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = getAllProducts