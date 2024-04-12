const { Order, PaymentMethod, User, OrderProduct } = require("../../db");
const nodemailer = require('nodemailer');

const postOrderHandlers = async (req, res) => {
  try {
    const { orderStatus, userId, paymentMethod, orderProducts } = req.body; 
    if (!orderStatus || !userId || !paymentMethod || !orderProducts) { 
      return res
        .status(400)
        .json({
          message:
            "El estado del pedido, el ID de usuario, la información del método de pago y los productos son obligatorios",
        });
    }

    const nuevoMetodoPago = await PaymentMethod.create({
      type: paymentMethod.type,
      number: paymentMethod.number,
    });

    const nuevoPedido = await Order.create({
      orderStatus,
      userId,
      paymentMethodId: nuevoMetodoPago.id,
    });

    for (const orderProduct of orderProducts) {
      await OrderProduct.create({
        orderId: nuevoPedido.id,
        productId: orderProduct.productId,
        cantidad: orderProduct.cantidad,
      });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Enviar correo electrónico si el estado del pedido es "entregado"
    if (orderStatus === 'delivered') {
      // Configurar el transporte de correo
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
        user: 'deliveloz24@gmail.com',
        pass: 'c h x u j b t p w b j e i k e a'
        },
      });

      const historyURL = `https://deliveloz-ryfh.onrender.com/assessment/${userId}/history`;
     
      const info = {
        from: 'deliveloz24@gmail.com',
        to: user.email,
        subject: '¡Tu pedido ha sido entregado!',
        text: 'DeliVeloz',
        html: `
        Hola&nbsp;${user.name},


            <br><br>
            Esperamos que hayas disfrutado de tu pedido. En DeliVeloz Nos esforzamos por brindar la mejor experiencia de
            entrega y nos encantaría conocer tu opinión sobre el producto que has recibido
            <br><br>
            Por favor, toma un momento para dejarnos saber cómo fue tu experiencia.
            <a href="${historyURL}">Agegar tu comentario aqui</a>
            <br>
            ¡Gracias por elegir DeliVeloz!
            <br><br>
            Saludos,
          <br>
            DeliVeloz
          `
      };

    
      transporter.sendMail(info, (error, info) => {
        if (error) {
          console.error('Error al enviar el correo electrónico:', error);
        } else {
          console.log('Correo electrónico enviado con éxito:', info.response);
        }
      });
    }

    res.status(201).json(nuevoPedido);
  } catch (error) {
    console.error("Error al crear el pedido:", error);
    res
      .status(500)
      .json({ message: "Error interno del servidor al crear el pedido" });
  }
};

module.exports = postOrderHandlers;
