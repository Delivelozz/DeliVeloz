const { Order, Product } = require('../../db');

const getHistoryController= async (userId) => {
  try {
    const orders = await Order.findAll({
      where: { userId },
      include: [{ model: Product }],
    });
    return orders;
  } catch (error) {
    throw new Error('Error al obtener el historial de compras del usuario');
  }
};

module.exports = {
  getHistoryController
};
