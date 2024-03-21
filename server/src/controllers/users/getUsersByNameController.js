const {Usuario} = require('../../db');
const { Op, Sequelize } = require('sequelize');

const getUsersByNameController = async (name) => {

    // Obtiene el usuario de la BDD por nombre
    const allUsersByNameDB = await Usuario.findAll({
        where: {
            name: {
                [Op.like]: Sequelize.literal(`LOWER('%${name}%')`) 
            }
        }
    });
    // Obtiene el usuario de la BDD por apellido
    const allUsersByLastnameDB = await Usuario.findAll({
        where: {
            lastName: {
                [Op.like]: Sequelize.literal(`LOWER('%${name}%')`) 
            }
        }
    });



    return [...allUsersByNameDB , ...allUsersByLastnameDB];
}

module.exports = getUsersByNameController;