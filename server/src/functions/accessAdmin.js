const jwt = require('jsonwebtoken');
const { Administrator } = require('../db');

const accessAdmin = async (req) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
      throw new Error('Token no proporcionado');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded;

    const adminByToken = await Administrator.findOne({
      where: { email: email }
    });

    if (!adminByToken) {
        throw new Error('Acceso denegado');
    }
  } catch (error) {
    throw error;
  }
}

module.exports = accessAdmin