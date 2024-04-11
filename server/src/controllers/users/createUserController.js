const {User, Cart} = require('../../db');

const createUserController = async ({name, lastName, email, userAddress, phone, password}) => {
    const newUser = await User.create({
        name,
        lastName,
        email,
        userAddress,
        phone,
        password
    });

    const newCart = await Cart.findOrCreate({
        where: { userId: newUser.id }
    });

    return newUser;
    }

module.exports = createUserController;