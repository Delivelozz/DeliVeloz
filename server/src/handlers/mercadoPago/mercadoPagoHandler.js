// SDK de Mercado Pago
const { MercadoPagoConfig, Preference } = require('mercadopago');
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });

const mercadoPagoHandler = async (req, res) => {
  try {

    const items = req.body.items.map(item => ({
      title: item.title,
      quantity: Number(item.quantity),
      unit_price: Number(item.price),
      currency_id: "ARS",
    }));

    const body = {
      // items: [
      //   {
      //     title: req.body.title,
      //     quantity: Number(req.body.quantity),
      //     unit_price: Number(req.body.price),
      //     current_id: "ARS",
      //   }
      // ],
      items,
      back_urls: {
        success: "https://www.youtube.com/watch?v=-VD-l5BQsuE&t=47s",
        failure: "https://www.youtube.com/watch?v=-VD-l5BQsuE&t=47s",
        pending: "https://www.youtube.com/watch?v=-VD-l5BQsuE&t=47s"
      },
      auto_return: "approved"
    }
    const preference = new Preference(client);
    const result = await preference.create({body});
    res.json({
      id: result.id,
    })
  } catch (error) {
    res.status(500).json({
      error: "Error al crear preferencia :("
    })
  }
}

module.exports = mercadoPagoHandler;