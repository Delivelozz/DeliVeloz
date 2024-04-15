const emailOrderController = require("../../controllers/order/emailOrderController");
const userOrderController = require("../../controllers/order/userOrderController");
const emailOrderHandler = async(req, res) => {
try {
  const { idUser, orderStatus } = req.params;
  console.log(idUser, orderStatus);
  const user = userOrderController(idUser);
  // Enviar correo electrónico si el estado del pedido es "entregado"
  if (orderStatus === 'delivered') {
    const historyURL = `https://deliveloz-ryfh.onrender.com/order/${idUser}`;
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

    // Llama a la función sendEmail
    var nuevoPedido = sendEmailController(info);
  }
  res.status(201).json(nuevoPedido);
} catch (error) {
  console.error("Error al crear el pedido:", error);
  res
    .status(500)
    .json({ message: "Error interno del servidor al crear el pedido" });
}
};
 module.exports = emailOrderHandler;