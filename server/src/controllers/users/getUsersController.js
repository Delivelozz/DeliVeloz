const {Usuario} = require('../../db');

const getUsersController = async () => {
    //Obtiene todos los videogames de la BDD
    const allUsersBDD = await Usuario.findAll();
      
      return allUsersBDD;
}

module.exports = getUsersController;