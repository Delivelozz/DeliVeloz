const {Usuario} = require('../../db');

const createUserController = async ({nombre, apellido, email, direccion_usuario, telefono, password}) => {
    const newUsuario = await Usuario.create({
        nombre,
        apellido,
        email,
        direccion_usuario,
        telefono,
        password
    });

    return newUsuario;
    }

module.exports = createUserController;