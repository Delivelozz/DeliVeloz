const { Product, OrderProduct } = require('../../db');

const deleteProductController = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      console.log('Producto no encontrado');
      throw new Error('Producto no encontrado');
    }
    await product.destroy();

    console.log('Producto eliminado correctamente');
    const orderProducts = await OrderProduct.findAll({ where: { productId: id } });
    if (orderProducts.length > 0) {
      await OrderProduct.destroy({ where: { productId: id } });
      console.log('Registros en OrderProduct asociados al producto eliminados correctamente');
    } else {
      console.log('No se encontraron registros en OrderProduct asociados al producto');
    }
    return { message: 'Producto eliminado correctamente' };
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    throw error;
  }
};

module.exports = deleteProductController;

