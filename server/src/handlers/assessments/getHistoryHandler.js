const getHistoryController = require('../../controllers/assessments/getHistoryController');

const getHistoryHandler = async (req, res) => {
  const userId = req.params.userId;

  try {
    console.log('User ID:', userId); 
    // Obtener el historial de compras 
    const orders = await getHistoryController.getHistoryController(userId);

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getHistoryHandler;
