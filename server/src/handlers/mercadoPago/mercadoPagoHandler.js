// SDK de Mercado Pago
const { log } = require('console');
const { MercadoPagoConfig, Preference } = require('mercadopago');
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.YOUR_ACCESS_TOKEN });

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
    console.log("item", itemsNew);

    // const items = req.body.items.map(item => ({
    //   title: item.title,
    //   quantity: Number(item.quantity),
    //   unit_price: Number(item.price),
    //   current_id: "ARS",
    // }));

    const body = {
      // itemsNew: [
      //   {
      //     title: "Hamburguesa",
      //     quantity: 2,
      //     unit_price: 200,
      //     current_id: "ARS",
      //   }
      // ],
      itemsNew,
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
    console.log(error);
    res.status(500).json({
      error: "Error al crear preferencia :("
    })
  }
}

module.exports = mercadoPagoHandler;