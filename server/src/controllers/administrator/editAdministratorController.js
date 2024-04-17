const {Administrator} = require ('../../db')

const editAdministratorController = async ({id}, {name, lastName, email, password, image }) =>{
    
    const editAdministrator =await Administrator.update({
        name, 
        lastName,
        email,
        password,
        image,
    },{
        where: {
            id: parseInt(id, 10)
        }
    })

    if(editAdministrator){
        return { message: "Administrador actualizado exitosamente"}
    } else {
        return { message: "Administrador no encontrado o no se realizaron cambios"}
    }
}

module.exports = editAdministratorController;