const axios = require('axios');
const {Order, PaymentMethod, Cart, Product} = require('../../db');
const mercadoPagoWebhookController = async (req, res) => {
    const payment = req.query;
    try {
        // Aquí puedes verificar el tipo de evento y actuar en consecuencia
        if(payment.type === "payment"){
            // Utiliza axios para hacer una solicitud GET a la API de Mercado Pago
            const response = await axios.get(`https://api.mercadopago.com/v1/payments/${payment["data.id"]}`, {
                headers: {
                    'Authorization': `Bearer ${process.env.YOUR_ACCESS_TOKEN}`
                }
            });
            const data = response.data;
            console.log(data);

            const dataId = JSON.parse(response.data.external_reference);
            const id_order = dataId.id_order;
            const id_user = dataId.id_user;
            console.log(id_order);
            console.log(id_user);


            const order = await Order.findByPk(id_order);
            order.update({
                paid: true,
            });
  
            await PaymentMethod.create({
                type: data.payment_method.type,
                status: data.status,
                orderId: id_order,
                // Incluir cualquier otra información relevante del pago
            });  

            const cart = await Cart.findByPk(id_user, {
                include: [
                    {
                        model: Product,
                    }
                ]
            });

            for (let index = 0; index < cart.products.length; index++) {
                await cart.removeProduct(cart.products[index]);
            }

            const cart2 = await Cart.findByPk(id_user, {
                include: [
                    {
                        model: Product,
                    }
                ]
            });

        }
        res.sendStatus(204);
    } catch (error) {
        console.log('Error:', error);
        res.sendStatus(500);
    }
}

module.exports = mercadoPagoWebhookController;

