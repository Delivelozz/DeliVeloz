const { Assessment, User } = require("../../db");

const postAssessmentController = async (req, res) => {
  try {
    const { productId } = req.params;
    const { rating, comment, email } = req.body;

    // Verificar si el usuario existe
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Buscar la valoración existente del usuario para el producto
    let existingAssessment = await Assessment.findOne({
      where: {
        productId: productId,
        userId: user.id,
      },
    });

    if (!rating || !comment) {
      throw new Error(
        "Es necesario proporcionar la puntuación y un comentario"
      );
    } else if (rating < 1 || rating > 5) {
      throw new Error("La puntuación debe estar entre 1 y 5");
    }

    /*  if (existingAssessment) {
            // Si el usuario ya ha valorado el producto, crear una nueva valoración
            const newAssessment = await Assessment.create({
                rating: rating,
                comment: comment,
                productId: productId,
                userId: user.id
            });
            res.status(201).json({ message: "Tu valoración fue recibida. ¡Gracias por tu tiempo!", newAssessment });
        } else {
            // Si el usuario no ha valorado el producto, actualizar el comentario
            existingAssessment.comment = comment;
            await existingAssessment.save();
            res.status(200).json({ message: "Tu comentario ha sido actualizado", existingAssessment });
        } */
    if (existingAssessment) {
      // Si la evaluación existe, actualizar el comentario
      await existingAssessment.update({ comment: comment });
      res.status(200).json({
        message: "Tu comentario ha sido actualizado",
        existingAssessment,
      });
    } else {
      // Si la evaluación no existe, crear una nueva evaluación
      const newAssessment = await Assessment.create({
        rating: rating,
        comment: comment,
        productId: productId,
        userId: user.id,
      });
      res.status(201).json({
        message: "Tu valoración fue recibida. ¡Gracias por tu tiempo!",
        newAssessment,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postAssessmentController;
