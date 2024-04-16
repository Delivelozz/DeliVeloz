// SDK de Mercado Pago
const { MercadoPagoConfig, Preference } = require("mercadopago");
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken: process.env.YOUR_ACCESS_TOKEN,
});
const mercadoPagoController = async (itemsNew, id_order) => {
  const body = {
    items: itemsNew,
    external_reference: id_order,
    back_urls: {
      success: "https://deliveloz.netlify.app/",
      failure: "https://deliveloz.netlify.app/",
      pending: "https://deliveloz.netlify.app/",
    },
    payment_methods: {
      excluded_payment_methods: [
        {
          id: "argencard",
        },
        {
          id: "cabal",
        },
        {
          id: "cmr",
        },
        {
          id: "cencosud",
        },
        {
          id: "cordobesa",
        },
        {
          id: "diners",
        },
        {
          id: "naranja",
        },
        {
          id: "tarshop",
        },
      ],
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
      installments: 1,
    },
    auto_return: "approved",
    notification_url: "https://deliveloz-ryfh.onrender.com/mercadopago/webhook"
  };
  const preference = new Preference(client);
  const result = await preference.create({ body });
  return result;
};

module.exports = mercadoPagoController;
