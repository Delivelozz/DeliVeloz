require("dotenv").config();
const jwt = require("jsonwebtoken");
const loginController = require("../../controllers/login/loginController");

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { message, user, admin } = await loginController(email, password);
    
    if(user){
        const token = jwt.sign(
          {
            email: user.email,
          },
          process.env.JWT_SECRET,
          // { expiresIn: "1h" } //opcional si se necesita un tiempo de expiracion 
        );
        let userResponse = {
          ...user.dataValues, // Asegúrate de que 'user' tenga una propiedad 'dataValues' si es una instancia de Sequelize
          token
        };
        let response = {
          message,
          user: userResponse
        }
        res.status(200).json(response);
    } else if (admin){
         const token = jwt.sign(
           {
             email: admin.email,
           },
           process.env.JWT_SECRET,
          //  { expiresIn: "1h" } //opcional si se necesita un tiempo de expiracion
         );
         let adminResponse = {
          ...admin.dataValues, // Asegúrate de que 'admin' tenga una propiedad 'dataValues' si es una instancia de Sequelize
          token
        };
        let response = {
          message,
          admin: adminResponse
        }
        res.status(200).json(response);
    }
  } catch (error) {
    res
      .status(500).json({ message: "Error al iniciar sesión", error: error.message });
  }
};

module.exports = loginHandler;
