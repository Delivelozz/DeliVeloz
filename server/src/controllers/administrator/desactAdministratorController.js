const {Administrator} = require('../../db')

const desactAdministratorController = async (id, value) =>{
    const administrator =await Administrator.findOne({where: {id: parseInt(id, 10)}})
    administrator.active = value;
    await administrator.save()
    return {message: "Administrador actualizado exitosamente"}

}

module.exports= desactAdministratorController