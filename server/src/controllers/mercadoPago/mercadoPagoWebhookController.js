const mercadoPagoWebhookController = async (paymentId) => {
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${process.env.YOUR_ACCESS_TOKEN}`
    }
    });

    return response;
}

module.exports = mercadoPagoWebhookController;

