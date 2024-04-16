const mercadoPagoWebhookController = async (event) => {
    if (event.type === 'payment.updated') {
        const payment = event.data.object;
        // Aquí puedes verificar el estado del pago
        if (payment.status === 'approved') {
            console.log('El pago fue aprobado');
            // Aquí puedes realizar acciones adicionales, como actualizar tu base de datos
        } else if (payment.status === 'rejected') {
            console.log('El pago fue rechazado');
            // Aquí puedes realizar acciones adicionales, como notificar al usuario
        }
    }
}

module.exports = mercadoPagoWebhookController;