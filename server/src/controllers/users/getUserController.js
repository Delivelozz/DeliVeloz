const accessUser = require('../../functions/accessUser');

const getUserController = async (req) => {
    try {
        const access = await accessUser(req);
        if (!access){
            console.error('No tienes acceso');
            return false;
        }
        return access;
    } catch (error) {
        throw error;
    }
};

module.exports = getUserController;