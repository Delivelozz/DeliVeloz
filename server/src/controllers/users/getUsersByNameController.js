const {Usuario} = require('../../db');

const getUsersByNameController = async (name) => {

    // Obtiene el usuario de la BDD por nombre
    const allUsersByNameDB = await Usuario.findAll();
    // Filtramos para que sea indistino a Mayuscula o Minuscula
    const allUsersByNameDBFilter = allUsersByNameDB.length !== 0 ? allUsersByNameDB.filter((user)=>user.name.toLowerCase().includes(name.toLowerCase())) : [];

    return allUsersByNameDBFilter;
}

module.exports = getUsersByNameController;