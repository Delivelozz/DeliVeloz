const {Administrator} = require('../../db')


const createAdministratorController = async ({name, lastName, email, password, permissions })=>{
    const newAdministrator= await Administrator.create({
        name, 
        lastName,
        email,
        password,
        permissions
    })
    return newAdministrator
}
module.exports = createAdministratorController