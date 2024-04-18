const {User} = require('../../db');
// const accessUser = require('../../functions/accessUser');

const getUserController = async (id) => {
    try {
        // const access = await accessUser(req);
        // if (!access){
        //     console.error('No tienes acceso');
        //     return false;
        // }
        // return access;

        const response = await User.findOne({
            where: { id: id }
          });

        return response;
    } catch (error) {
        throw error;
    }
};

module.exports = getUserController;