const {Usuario} = require('../../db');

const editUserController = async ({id}, {name, lastName, email, userAddress, phone, password}) => {
    const editUser = await Usuario.update({
        name,
        lastName,
        email,
        userAddress,
        phone,
        password
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


// const [updated] = await Producto.update({
//   nombre,
//   descripcion,
//   precio,
//   categoria,
//   imagen,
//   disponibilidad
// }, {
//   where: {
//     id: parseInt(id, 10) // Asegúrate de que el ID sea un número
//   }
// });

// if (updated) {
//   res.status(200).json({ message: 'Producto actualizado exitosamente' });
// } else {
//   res.status(404).json({ message: 'Producto no encontrado' });
// }