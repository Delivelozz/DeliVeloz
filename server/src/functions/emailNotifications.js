const emailOrderController = require("../controllers/order/emailOrderController");
const userOrderController = require("../controllers/order/userOrderController");


const emailNotifications = async (idUser, status) => {
  try {
    const user = await userOrderController(idUser);
    if (user) {
      const img = "https://res.cloudinary.com/derot8znd/image/upload/v1712286915/Otros/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju_g2ngxd.webp"
      const historyURL = `https://deliveloz.netlify.app/home`;
      if(status ==='approved'){
        const info = {
          from: "deliveloz24@gmail.com",
          to: user.email,
          subject: "¡Tu pedido ha sido confirmado!",
          text: "DeliVeloz",
          html: `
                Hola&nbsp;${user.name},
                <br><br>
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 1000px;">
                    <img src=${img} alt="Imagen de referencia" width="200" height="200">
                    <br>
                    <div style="width: 650px; background-color: #f9f9f9; color: #333; padding: 20px; border-radius: 5px;">
                        Nos alegra informarte que tu pedido ha sido confirmado exitosamente y queremos que sepas que estamos
                        trabajando activamente en la preparación de tu comida.
                        <br><br>
                        Nos esforzamos por ofrecerte una experiencia culinaria excepcional, y estamos dedicando todo nuestro esfuerzo para garantizar que tu comida esté lista pronto y sea entregada con el cuidado y la atención que mereces. 
                        <br><br>
                        Por favor, toma un momento para dejarnos saber cómo fue tu experiencia: <a href="${historyURL}" style="text-decoration: none; color: red;">Tu comentario aquí</a>
                        <br><br>
                        ¡Gracias por elegir DeliVeloz!
                </div></div>
                  `,
        };

        return emailOrderController(info);
      } else {
        const info = {
          from: "deliveloz24@gmail.com",
          to: user.email,
          subject: "¡Tu pedido fue rechazado!",
          text: "DeliVeloz",
          html: `
                  Hola&nbsp;${user.name},
                  <br><br>
                  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 1000px;">
                      <img src=${img} alt="Imagen de referencia" width="200" height="200">
                      <br>
                      <div style="width: 650px; background-color: #f9f9f9; color: #333; padding: 20px; border-radius: 5px;">
                          Lamentamos informarte que tu pedido ha sido rechazado. Nos disculpamos por cualquier inconveniente que esto pueda causarte. Nuestro equipo está aquí para ayudarte a resolver cualquier problema que puedas tener. Por favor, no dudes en ponerte en contacto con nosotros para cualquier pregunta o preocupación adicional. Apreciamos tu comprensión y esperamos poder servirte mejor en el futuro.
                          <br><br>
                          ¡Gracias por elegir DeliVeloz!
                  </div></div>
                  `,
        };
        return emailOrderController(info);
      }
    }
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};

module.exports = emailNotifications;
