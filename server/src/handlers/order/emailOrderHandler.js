const userOrderController = require("../../controllers/order/userOrderController");
const emailOrderController = require("../../controllers/order/emailOrderController");

const emailOrderHandler = async (idUser) => {
  try {
    const user = await userOrderController(idUser);
    if (idUser) {
      const historyURL = `https://deliveloz-ryfh.onrender.com/order/${idUser}`;

      const info = {
        from: "deliveloz24@gmail.com",
        to: user.email,
        subject: "¡Tu pedido ha sido entregado!",
        text: "DeliVeloz",
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
                `,
      };
      // await emailOrderController(info);
    }
    return emailOrderController(info);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};

module.exports = emailOrderHandler;
