const { User, Administrator } = require("../../db");

const loginController = async (email, password) => {
  
    const user = await User.findOne({ where: { email } });
    if(user){
        if (user.password !== password) {
            throw new Error("Contraseña incorrecta");
        }
    return { message: "Inicio de sesión exitoso para user", user };
      
  } else {
      const admin = await Administrator.findOne({where: {email}})
    
        if(admin){
            if(admin.password !== password){
                throw new Error ("Contraseñam incorrecta")
            }
             return {message: "Inicio de sesion exitoso para administrador", admin}        
        }
    }
    throw new Error("No se encontró registro de user o administrador en la db")
}



module.exports = loginController;
