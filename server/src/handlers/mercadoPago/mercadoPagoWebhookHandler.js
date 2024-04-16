const mercadoPagoWebhookController = require('../../controllers/mercadoPago/mercadoPagoWebhookController');

const mercadoPagoWebhookHandler = async (req, res) => {
    const event = req.body;
    try {
        // Aquí puedes verificar el tipo de evento y actuar en consecuencia
        await mercadoPagoWebhookController(event);
        res.status(200).send();
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = mercadoPagoWebhookHandler;