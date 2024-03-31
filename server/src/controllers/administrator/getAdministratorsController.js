const {Administrator} = require ('../../db')

const getAdministratorsController = async () => {
    const allAdministrators = Administrator.findAll()

    return allAdministrators
}

module.exports= getAdministratorsController