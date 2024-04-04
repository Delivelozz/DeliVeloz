// SDK de Mercado Pago
const { MercadoPagoConfig, Preference } = require('mercadopago');
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.YOUR_ACCESS_TOKEN });

const mercadoPagoController = async (itemsNew) => {
    const body = {
        items: itemsNew,
        back_urls: {
          success: "http://localhost:5173/",
          failure: "http://localhost:5173/",
          pending: "http://localhost:5173/"
        },
        payment_methods: {
            excluded_payment_methods: [
                {
                    id: "argencard"
                },
                {
                    id: "cabal"
                },
                {
                    id: "cmr"
                },
                {
                    id: "cencosud"
                },
                {
                    id: "cordobesa"
                },
                {
                    id: "diners"
                },
                {
                    id: "naranja"
                },
                {
                    id: "tarshop"
                }
            ],
            excluded_payment_types: [
                {
                    id: "ticket"
                }
            ],
            installments: 1
        },
        auto_return: "approved"
      }
      const preference = new Preference(client);
      const result = await preference.create({body});
      return result;
};

module.exports = mercadoPagoController;