const mercadoPagoController = require('../../controllers/mercadoPago/mercadoPagoController');

const mercadoPagoHandler = async (req, res) => {
  const items = req.body;
  try {
    const itemsNew = items.map((item)=>{
      return {
        title: item.name,
        quantity: Number(item.quantity),
        unit_price: Number(item.price),
        current_id: "ARS",
      }
    })
    const response = await mercadoPagoController(itemsNew); 
    res.json({id: response.id})
  } catch (error) {
    res.status(500).json({ error: "Error al crear preferencia" })
  }
}

module.exports = mercadoPagoHandler;