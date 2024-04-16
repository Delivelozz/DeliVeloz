const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "deliveloz24@gmail.com",
    pass: "c h x u j b t p w b j e i k e a",
  },
});

async function emailOrderController(info) {
  console.log("Enviando correo electrónico...");
  const result = await transporter.sendMail(info);
  console.log("Email enviado:", result.messageId);
  return result;
}

module.exports = emailOrderController;
