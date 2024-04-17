const accessUser = require('../../functions/accessUser');

const getUserController = async (req) => {
    try {
        const userByToken = await accessUser(req)
        return userByToken;
    } catch (error) {
        throw error;
    }
};

module.exports = getUserController;