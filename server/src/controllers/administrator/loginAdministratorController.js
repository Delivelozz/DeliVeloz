const {Administrator} = require ('../../db')

const loginAdministratorController= async (email, password) => {
    const user = await Administrator.findOne({where: {email}})

    if(!user){
        throw new Error ("Administrador no encontrado")
    }

    if(user.password !== password){
        throw new Error ("Contraseñam no encontrada")
    }
     return {message: "Inicio de sesion exitoso", user}
}

module.exports= loginAdministratorController