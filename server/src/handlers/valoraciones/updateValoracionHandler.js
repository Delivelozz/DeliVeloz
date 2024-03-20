const updateValoracionController = require("../../controllers/valoracion/updateValoracionController");

const updateValoracionHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { puntuacion, comentario } = req.body;

    const valoracion = await updateValoracionController.updateValoracion(
      id,
      puntuacion,
      comentario
    );
    res
      .status(200)
      .json({ message: "Valoración actualizada corectamente", valoracion });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = updateValoracionHandler;
