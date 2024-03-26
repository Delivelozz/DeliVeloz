const getAdministratorByNameController = require("../../controllers/administrator/getAdministratorsByNameController");
const getAdministratorsController = require("../../controllers/administrator/getAdministratorsController");
// Devuelve todos los Usuarios o los Usuarios por nombre
const getAdministratorsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const allAdministratorsByName = await getAdministratorByNameController(name);
      if (allAdministratorsByName.length === 0) {
        throw new Error(`No se encontro ningun administrador con nombre: ${name}`);
      }
      res.status(200).json(allAdministratorsByName);
    } else {
      const allAdministrator = await getAdministratorsController();
      res.status(200).json(allAdministrator);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAdministratorsHandler;
