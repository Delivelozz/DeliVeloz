const {User} = require('../../db');

const editUserController = async ({id}, {name, lastName, email, userAddress, phone, password}) => {
    const editUser = await User.update({
        name,
        lastName,
        email,
        userAddress,
        phone,
        password,
    },{ 
        where: {
            id: parseInt(id, 10) // Asegúrate de que el ID sea un número
        }
    });

    if (editUser) {
        return { message: 'Usuario actualizado exitosamente' };
    } else {
        return { message: 'Usuario no encontrado o no se realizaron cambios' };
    }
    }

module.exports = editUserController;