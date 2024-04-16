const mercadoPagoWebhookController = require('../../controllers/mercadoPago/mercadoPagoWebhookController');

const mercadoPagoWebhookHandler = async (req, res) => {
    const paymentId = req.query.id;
    try {
        // Aquí puedes verificar el tipo de evento y actuar en consecuencia
        const response = await mercadoPagoWebhookController(paymentId);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        res.sendStatus(200);
    } catch (error) {
        console.log('Error:', error);
        res.sendStatus(500);
    }
}

module.exports = mercadoPagoWebhookHandler;