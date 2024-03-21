const {User} = require('../../db');

const getUserByIDController = async (id) => {
const userById = await User.findOne({ // Buscamos el Usuario en la BDD
    where: { id: id }
});

return userById;
}

module.exports = getUserByIDController;