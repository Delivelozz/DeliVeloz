const {User} = require('../../db');
const { Op, Sequelize } = require('sequelize');

const getUsersByNameController = async (name) => {

    // Obtiene el User de la BDD por nombre
    const allUsersByNameDB = await User.findAll({
        where: {
            name: {
                [Op.like]: Sequelize.literal(`LOWER('%${name}%')`) 
            }
        }
    });
    // Obtiene el User de la BDD por apellido
    const allUsersByLastnameDB = await User.findAll({
        where: {
            lastName: {
                [Op.like]: Sequelize.literal(`LOWER('%${name}%')`) 
            }
        }
    });



    return [...allUsersByNameDB , ...allUsersByLastnameDB];
}

module.exports = getUsersByNameController;