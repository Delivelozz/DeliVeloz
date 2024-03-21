const { Product } = require('../../db');

const desactProductController = async (id, value) =>{
  const product = await Product.findOne({ where: { id: parseInt(id, 10) } });
  product.availability = value;
  await product.save();
  return { message: 'Producto actualizado exitosamente' };
}

module.exports = desactProductController