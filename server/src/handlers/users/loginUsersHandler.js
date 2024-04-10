const jwt = require('jsonwebtoken'); 
const loginUserController = require("../../controllers/users/loginUserController");

const loginUsersHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUserController(email, password);
    const token = jwt.sign(
      {
        email: user.email,
      },
      "clave_secreta_de_prueba"
      // process.env.JWT_SECRET,//Crear en el .env
      // { expiresIn: "1h" } //Por si se necesita un tiempo de expiración
    );
    res.status(200).json({ message: "Inicio de sesión exitoso", user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginUsersHandler;
