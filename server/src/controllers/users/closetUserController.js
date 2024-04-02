const {User} = require('../../db');

const closeUserController = async ( req, res) => {
    try{
    res.status(200).json({ message: "Sesión cerrada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = closeUserController;