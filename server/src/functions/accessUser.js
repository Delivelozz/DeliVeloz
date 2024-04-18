const jwt = require('jsonwebtoken');
const { User } = require('../db');

const accessUser = async (req) => {
 const authHeader = req.headers['authorization'];
 const token = authHeader && authHeader.split(' ')[1];

 if (!token) {
    console.error('Token no proporcionado');
    return false;
 }
 try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded;

    const UserByToken = await User.findOne({
      where: { email: email }
    });

    if (!UserByToken) {
      console.error('Acceso denegado');
      return false;
    }

    return UserByToken;
 } catch (error) {
    console.error('Se produjo un error al acceder al usuario:');
    return false;
 }
}

module.exports = accessUser;