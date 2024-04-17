const mercadoPagoController = require('../../controllers/mercadoPago/mercadoPagoController');

const mercadoPagoHandler = async (req, res) => {
  const {product} = req.body;
  const {id_order} = req.body;
  const {id_user} = req.body;
  try {
    const itemsNew = product.map((item)=>{
      return {
        title: item.name,
        quantity: Number(item.quantity),
        unit_price: Number(item.price),
        current_id: "ARS",
      }
    })
    const response = await mercadoPagoController(itemsNew, id_order, id_user); 
    res.json(response)
  } catch (error) {
    res.status(500).json({ error:error.message })
  }
}

module.exports = mercadoPagoHandler;