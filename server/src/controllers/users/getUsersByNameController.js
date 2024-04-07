const {User} = require('../../db');
const { Op } = require('sequelize');

const getUsersByNameController = async (name) => {

    // Obtiene el User de la BDD por nombre
    const allUsersByNameDB = await User.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%` 
            }
        }
    });
    // Obtiene el User de la BDD por apellido
    const allUsersByLastnameDB = await User.findAll({
        where: {
            lastName: {
                [Op.iLike]: `%${name}%` 
            }
        }
    });



    return [...allUsersByNameDB , ...allUsersByLastnameDB];
}

module.exports = getUsersByNameController;