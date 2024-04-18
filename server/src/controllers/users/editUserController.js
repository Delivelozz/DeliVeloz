const jwt = require("jsonwebtoken");
const { User } = require('../../db');

const editUserController = async ({id}, {name, lastName, email, userAddress, phone, password}) => {
    const user = await User.findOne({ where: { id: parseInt(id, 10) } });
    let token = null;

    if (user) {
        const updateData = {
            name,
            lastName,
            email,
            userAddress,
            phone,
            password,
        };

        // Si el correo electrónico se actualiza, genera un nuevo token
        if (email && email !== user.email) {
            token = jwt.sign(
                {
                    email: updateData.email,
                },
                process.env.JWT_SECRET,
                // { expiresIn: "1h" } //opcional si se necesita un tiempo de expiracion
            );
        }

        const editUser = await User.update(updateData, { 
            where: {
                id: parseInt(id, 10) // Asegúrate de que el ID sea un número
            }
        });

        if (editUser) {
            return { message: 'Usuario actualizado exitosamente', token };
        } else {
            return { message: 'Usuario no encontrado o no se realizaron cambios' };
        }
    } else {
        return { message: 'Usuario no encontrado' };
    }
}

module.exports = editUserController;