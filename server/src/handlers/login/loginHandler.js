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
          { expiresIn: "1h" } //opcional si se necesita un tiempo de expiracion 
        );
        res.status(200).json({ message, user, token });
    } else if (admin){
         const token = jwt.sign(
           {
             email: admin.email,
           },
           process.env.JWT_SECRET,
           { expiresIn: "1h" } //opcional si se necesita un tiempo de expiracion
         );
         res.status(200).json({ message, admin, token });
    }
  } catch (error) {
    res
      .status(500).json({ message: "Error al iniciar sesión", error: error.message });
  }
};

module.exports = loginHandler;
