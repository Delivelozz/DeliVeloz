const {Usuario} = require('../../db');

const editUserController = async (id, {nombre, apellido, email, direccion_usuario, telefono, password}) => {
    const editUser = await Usuario.update({
        nombre,
        apellido,
        email,
        direccion_usuario,
        telefono,
        password
    },{ 
        where: {
            id: parseInt(id, 10) // Asegúrate de que el ID sea un número
        }
    });

    return editUser;
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