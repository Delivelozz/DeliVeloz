const {User} = require('../../db');

const createUserController = async ({name, lastName, email, userAddress, phone, password}) => {
    const newUser = await User.create({
        name,
        lastName,
        email,
        userAddress,
        phone,
        password
    });

    return newUser;
    }

module.exports = createUserController;