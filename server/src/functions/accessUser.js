const jwt = require('jsonwebtoken');
const { User } = require('../db');

const accessUser = async (req) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
      throw new Error('Token no proporcionado');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded;

    const UserByToken = await User.findOne({
      where: { email: email }
    });

    if (!UserByToken) {
        throw new Error('Acceso denegado');
    }

    return UserByToken
  } catch (error) {
    throw error;
  }
}

module.exports = accessUser