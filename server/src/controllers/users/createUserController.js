const {Usuario} = require('../../db');

const createUserController = async ({name, lastName, email, userAddress, phone, password}) => {
    const newUsuario = await Usuario.create({
        name,
        lastName,
        email,
        userAddress,
        phone,
        password
    });

    return newUsuario;
    }

module.exports = createUserController;