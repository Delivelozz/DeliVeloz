const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: 'jodannysaliendres@gmail.com',
        pass: 'tuvd euiz lchp jqlo'
    }
});

async function sendEmail(info) {
     
    console.log('Enviando correo electrónico...');
    try {
        const result = await transporter.sendMail(info);
        console.log('Email enviado:', result.messageId);
        return result;
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        throw error; 
    }
}

module.exports =  sendEmail ;