const {Usuario} = require('../../db');

const getUserByIDController = async (id) => {
const userById = await Usuario.findOne({ // Buscamos el Usuario en la BDD
    where: { id: id }
});

return userById;
}

module.exports = getUserByIDController;