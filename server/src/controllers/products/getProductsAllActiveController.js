const { where } = require("sequelize");
const { Product } = require("../../db.js");

const getProductsAllActiveController = async () =>{
  const data = await Product.findAll({
    where:{
      availability: true
    }
  });
  return data;
}

module.exports = getProductsAllActiveController;