const axios = require('axios');
const {Order, PaymentMethod} = require('../../db');
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
            
            const id_order = response.data.external_reference;
            const order = await Order.findById(id_order);
            order.update({
                paid: true,
            });
            // const paymentMethod = PaymentMethod.create({
            //     type: '',
                
            // });
            await PaymentMethod.create({
                id: id_order,
                type: data.payment_method.type,
                status: data.status,
                // Incluir cualquier otra información relevante del pago
            });

            const data = response.data;
            console.log(data);
            

            // // Buscar el pedido en la base de datos
            // const order = await Order.findOne({ where: { id: orderId } });

            // // Verificar si el pedido existe y si el estado es diferente de 'pagado'
            // if (order && order.status !== 'pagado') {
            //     // Actualizar el estado del pedido a 'pagado'
            //     order.status = 'pagado';
            //     await order.save();
            //     console.log(`Pedido ${orderId} actualizado a estado 'pagado'.`);

            //     // Crear un registro en PaymentMethod usando .create()
            //     await PaymentMethod.create({
            //         orderId: orderId,
            //         paymentId: data.id,
            //         status: data.status,
            //         // Incluir cualquier otra información relevante del pago
            //     });
            //     console.log(`Registro de pago creado para el pedido ${orderId}.`);
            // }
        }
        res.sendStatus(204);
    } catch (error) {
        console.log('Error:', error);
        res.sendStatus(500);
    }
}

module.exports = mercadoPagoWebhookController;

