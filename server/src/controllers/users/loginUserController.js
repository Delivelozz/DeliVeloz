const { User } = require("../../db");

const loginUserController = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  if (user.password !== password) {
    throw new Error("Contraseña incorrecta");
  }
  return { message: "Inicio de sesión exitoso", user };
};

module.exports = loginUserController;
