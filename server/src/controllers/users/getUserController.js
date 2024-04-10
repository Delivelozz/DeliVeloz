const jwt = require('jsonwebtoken');
const {User} = require('../../db');

const getUserController = async (req) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        throw new Error('Token no proporcionado');
    }

    try {
        // Verificar y decodificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { email } = decoded;

        // Buscar al usuario en la base de datos por email
        const userByToken = await User.findOne({
            where: { email: email }
        });

        if (!userByToken) {
            throw new Error('Usuario no encontrado');
        }

        return userByToken;
    } catch (error) {
        throw error;
    }
};

module.exports = getUserController;