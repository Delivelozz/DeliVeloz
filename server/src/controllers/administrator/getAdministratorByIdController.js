const {Administrator}= require ('../../db')

const getAdministratorByIdController = async (id)=>{
    const administratorId= await Administrator.findOne({
        where: {id: id}
    })
    return administratorId
}

module.exports = getAdministratorByIdController