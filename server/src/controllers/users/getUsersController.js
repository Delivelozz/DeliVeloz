const {User} = require('../../db');

const getUsersController = async () => {
    //Obtiene todos los videogames de la BDD
    const allUsersBDD = await User.findAll();
      
      return allUsersBDD;
}

module.exports = getUsersController;