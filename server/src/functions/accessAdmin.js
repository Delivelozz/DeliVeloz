const jwt = require('jsonwebtoken');
const { Administrator } = require('../db');

const accessAdmin = async (req) => {
 const authHeader = req.headers['authorization'];
 const token = authHeader && authHeader.split(' ')[1];

 if (!token) {
    console.error('Token no proporcionado');
    return false;
 }
 try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded;

    const adminByToken = await Administrator.findOne({
      where: { email: email }
    });

    if (!adminByToken) {
      console.error('Acceso denegado');
      return false;
    }

    return adminByToken;
 } catch (error) {
    console.error('Error de token, inválido o expirado:', error);
    return false;
 }
}

module.exports = accessAdmin;