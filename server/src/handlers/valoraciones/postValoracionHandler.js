const valoracionController = require("../../controllers/valoracion/valoracionController");

const postValoracionHandler = async (req, res) => {
  await valoracionController(req, res);
};
 module.exports = postValoracionHandler