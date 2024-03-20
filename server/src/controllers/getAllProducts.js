// import { Product } from "../db.js";
const { Producto } = require("../db.js");
// const axios = require("axios");

const getAllProducts = async (req, res) =>{
  try {
    const data = await Producto.findAll();
    res.status(200).json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = getAllProducts